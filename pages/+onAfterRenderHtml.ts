import { useConfig } from 'vike-react/useConfig';
import type { PageContext } from 'vike/types';

export default (pageContext: PageContext) => {
  const config = useConfig();
  if (pageContext.styleSheet) {
    const { styleSheet } = pageContext;
    try {
      const styles = styleSheet.getStyleElement();
      config({
        Head: styles,
      });
    } catch (error) {
      throw error;
    } finally {
      styleSheet.seal();
    }
  }
};
