import { graphql } from '@/datocms/graphql';

export const CVTextFragment = graphql(`
  fragment CVTextFragment on CvTextRecord {
    topSkillsTitle
    workExperienceTitle
    educationTitle
    certificateTitle
    languageSkillsTitle
    techSkillsTitle
    designSkillsTitle
    coreSkillsTitle
    languageLevel1Text
    languageLevel2Text
    languageLevel3Text
  }
`);

export const CVFragment = graphql(`
  fragment CVFragment on CvRecord {
    name
    title
    intro
    showSeparateIntro
    image {
      responsiveImage(imgixParams: { fm: png, w: 300 }) {
        src
      }
    }
    links {
      icon
      title
      url
    }
    topSkills {
      name
    }
    workHistory {
      company
      title
      customDate
      startDate
      endDate
      body
      skills {
        name
      }
    }
    education {
      title
      subtitle
      date
      body
    }
    certificates {
      title
      subtitle
      date
      body
    }
    languageSkills {
      name
      level
    }
    techSkills {
      name
    }
    designSkills {
      name
    }
    coreSkills {
      name
    }
  }
`);
