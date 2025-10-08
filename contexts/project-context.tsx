import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import throttle from 'lodash/throttle';
import { FixedImageContainer } from '../components/projects/FixedImageContainer';

type Project = {
  name: string;
  image: string;
  height: number;
  initialY1: number;
};

export interface ProjectContextType {
  projects: { [name: string]: Project | undefined };
  visibleProject: { name?: string; opacity: number };
  addProject: (name: string, data: Project) => void;
}

/*
 *   --------------------------------- => 0
 *   | . . . . . . . . . . . . . . . |
 *   | . . . . . . . . . . . . . . . | => offsetTop
 *   |                               |
 *   |         visible area          | => visibility area
 *   |                               |
 *   | . . . . . . . . . . . . . . . | => offsetBottom
 *   | . . . . . . . . . . . . . . . |
 *   --------------------------------- => viewportH
 */

export const VIEWPORT_OFFSET_TOP = 0.2;
export const VIEWPORT_OFFSET_BOTTOM = 0.4;

/* Returns y1 (top of the project) and y2 (bottom of the project) coordinates for each project.
 * y1 and y2 are relative to the top of the project list. If the project top is on top of the viewport y1 = 0 and the y2 = viewportH.
 */
const getProjectCoordinates = (
  projects: {
    [name: string]: Project | undefined;
  },
  projectGroupTopY: number, // is 0 if on top of the viewport, <0 if above the viewport, > viewportH if below the viewport
  viewportH: number
) => {
  const orderedProject = Object.values(projects)
    .filter(p => !!p)
    .sort((a, b) => {
      if (!a?.initialY1) return 1;
      if (!b?.initialY1) return -1;
      return a.initialY1 < b.initialY1 ? -1 : 1;
    });
  const minProjectInitY1 = orderedProject[0]?.initialY1;

  return orderedProject.map(project => {
    const top = projectGroupTopY + project?.initialY1 - minProjectInitY1;

    const y1 = top;
    const y2 = top + project?.height || 0;

    const offsetTop = viewportH * VIEWPORT_OFFSET_TOP;
    const offsetBottom = viewportH - viewportH * VIEWPORT_OFFSET_BOTTOM;

    let visibilityRatio = 0;

    if (y2 <= offsetTop || y1 >= offsetBottom) {
      // Project is not visible, if it is below (y1 >= offsetBottom) visibility area or above (y2 <= offsetTop) it.
      visibilityRatio = 0;
    } else {
      //These values are used to calculate the visibility ratio of the project. Y1 is larger than offsetTop the project is visible. Y2 is smaller than offsetBottom if the project is visible.
      const maxY1 = Math.max(y1, offsetTop);
      const minY2 = Math.min(y2, offsetBottom);

      const minHeight = Math.min(
        project?.height,
        viewportH -
          viewportH * VIEWPORT_OFFSET_TOP -
          viewportH * VIEWPORT_OFFSET_BOTTOM
      );

      //Percentage of the project visible in the viewport
      visibilityRatio = (minY2 - maxY1) / minHeight;
    }

    return {
      ...project,
      y1,
      y2,
      visibilityRatio: Math.max(0, Number(visibilityRatio.toFixed(2))),
    };
  });
};

export const DEFAULT_OPACITY = 0;

const ProjectContext = createContext<ProjectContextType>({
  projects: {},
  visibleProject: { name: undefined, opacity: DEFAULT_OPACITY },
  addProject: (_val, _val2) => {},
});

export const ProjectContextProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [projects, setProject] = useState<{
    [name: string]: Project | undefined;
  }>({});
  const [visibleProject, setVisibleProject] = useState<{
    name?: string;
    opacity: number;
  }>({ name: undefined, opacity: 0 });

  const onScroll = useCallback(() => {
    if (typeof window === 'undefined') return;

    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const viewportH = window.innerHeight;

    const projectCoordinates = getProjectCoordinates(
      projects,
      rect.top,
      viewportH
    );

    let mostVisibleProject: { name: string | undefined; opacity: number } = {
      name: undefined,
      opacity: 0,
    };

    projectCoordinates.forEach(project => {
      if (project.visibilityRatio > mostVisibleProject?.opacity) {
        mostVisibleProject = {
          name: project.name,
          opacity: project.visibilityRatio,
        };
      }
    });

    setVisibleProject(mostVisibleProject);
  }, [projects]);

  const throttledOnScroll = useCallback(throttle(onScroll, 100), [onScroll]);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    window.addEventListener('scroll', throttledOnScroll);
    throttledOnScroll(); // Calculate initial state
    return () => {
      window.removeEventListener('scroll', throttledOnScroll);
    };
  }, [throttledOnScroll]);

  const addProject = (name: string, project: Project) => {
    setProject(prevState => ({
      ...prevState,
      [name]: project,
    }));
  };

  const contextValue = useMemo(
    () => ({
      projects,
      visibleProject,
      addProject,
    }),
    [projects, visibleProject]
  );

  return (
    <ProjectContext.Provider value={contextValue}>
      <FixedImageContainer />
      <div ref={ref}>{children}</div>
    </ProjectContext.Provider>
  );
};

export const useProjectContext = () => useContext(ProjectContext);
