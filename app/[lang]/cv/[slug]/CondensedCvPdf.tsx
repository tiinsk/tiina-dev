import {
  Document,
  Font,
  Image,
  Link,
  Page,
  StyleSheet,
  Text,
  View,
} from '@react-pdf/renderer';
import { readFragment } from 'gql.tada';
import { getFormattedDateMMYYYY, getFormattedDateYYYY } from '@/utils/date';
import { CVFragment, CVTextFragment } from '@/app/[lang]/cv/[slug]/fragments';
import {
  CvPdfProps,
  getLanguageSkillLevel,
  getSvgIcon,
  SvgLine,
} from '@/app/[lang]/cv/[slug]/CvPdf';

const fontDomain = process.env.STATIC_FONT_URL;

Font.register({
  family: 'Work Sans',
  fonts: [
    {
      src: `${fontDomain}/WorkSans/WorkSans-Light.ttf`,
      fontWeight: 300,
    },
    {
      src: `${fontDomain}/WorkSans/WorkSans-Regular.ttf`,
      fontWeight: 400,
    },
    {
      src: `${fontDomain}/WorkSans/WorkSans-SemiBold.ttf`,
      fontWeight: 600,
    },
  ],
});

Font.register({
  family: 'Poppins',
  fonts: [
    {
      src: `${fontDomain}/Poppins/Poppins-Light.ttf`,
      fontWeight: 300,
    },
    {
      src: `${fontDomain}/Poppins/Poppins-Regular.ttf`,
      fontWeight: 400,
    },
    {
      src: `${fontDomain}/Poppins/Poppins-Medium.ttf`,
      fontWeight: 500,
    },
    {
      src: `${fontDomain}/Poppins/Poppins-SemiBold.ttf`,
      fontWeight: 600,
    },
    {
      src: `${fontDomain}/Poppins/Poppins-Bold.ttf`,
      fontWeight: 700,
    },
  ],
});

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#ECE9E7',
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 20,
    paddingBottom: 10,
    paddingHorizontal: 30,
    marginTop: -20,
    gap: 20,
  },
  headerTexts: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  content: {
    paddingTop: 10,
    paddingHorizontal: 30,
  },
  image: {
    width: 80,
    height: 80,
  },
  page: {
    paddingTop: 20,
    paddingBottom: 20,
  },
  name: {
    fontSize: 16,
    fontWeight: 'semibold',
    fontFamily: 'Work Sans',
    marginBottom: 4,
  },
  title: {
    fontSize: 12,
    fontFamily: 'Work Sans',
  },
  intro: {
    fontSize: 12,
    fontFamily: 'Work Sans',
    fontWeight: 'light',
    lineHeight: 1.5,
  },
  linkWrapper: {
    display: 'flex',
    flexDirection: 'row',
    gap: 4,
    marginBottom: 4,
    alignItems: 'center',
  },
  links: {
    marginTop: 16,
  },
  link: {
    fontSize: 11,
    fontFamily: 'Work Sans',
    fontWeight: 'light',
    color: '#404040',
    textDecoration: 'none',
  },
  subtitle: {
    fontFamily: 'Poppins',
    fontSize: 10,
    marginVertical: 8,
    fontWeight: 'light',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  topSkills: {
    marginBottom: 16,
    marginTop: 0,
  },
  item: {
    marginBottom: 24,
  },
  itemCondensed: {
    marginBottom: 8,
  },
  itemTitle: {
    fontSize: 10,
    fontFamily: 'Work Sans',
    fontWeight: 'semibold',
    marginBottom: 4,
  },
  itemSubtitle: {
    fontSize: 11,
    fontFamily: 'Work Sans',
    marginBottom: 4,
  },
  itemBody: {
    fontSize: 11,
    fontFamily: 'Work Sans',
    fontWeight: 'light',
    lineHeight: 1.5,
  },
  tagWrapper: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 4,
  },
  tagText: {
    fontSize: 10,
    fontFamily: 'Work Sans',
  },
  tag: {
    paddingVertical: 1,
    paddingHorizontal: 4,
    backgroundColor: '#F8F8F8',
    borderRadius: 20,
    border: '1px solid #F1F1F1',
  },
  flexRowWrapper: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  listFlexCondensed: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 2,
  },
});

export const CondensedCvPdf = ({ data, textData, slug }: CvPdfProps) => {
  const cvData = readFragment(CVFragment, data);
  const texts = readFragment(CVTextFragment, textData);
  const languageSkillLevelTitles = {
    '1': texts?.languageLevel1Text || '',
    '2': texts?.languageLevel2Text || '',
    '3': texts?.languageLevel3Text || '',
  };

  return (
    <Document title={slug}>
      <Page style={styles.page} size="A4">
        <View style={styles.header}>
          {cvData.image?.responsiveImage?.src && (
            <Image
              style={styles.image}
              src={cvData.image.responsiveImage.src}
            />
          )}
          <View style={styles.headerTexts}>
            <Text style={styles.name}>{cvData.name}</Text>
            <Text style={styles.title}>{cvData.title}</Text>
            <View style={styles.links}>
              {cvData.links.map(link => (
                <View key={link.url} style={styles.linkWrapper}>
                  {getSvgIcon(link.icon)}
                  <Link style={styles.link} src={link.url}>
                    {link.title}
                  </Link>
                </View>
              ))}
            </View>
          </View>
        </View>
        <View style={styles.content}>
          <Text style={styles.intro}>{cvData.intro}</Text>
          <View wrap={false}>
            <Text style={styles.subtitle}>{texts?.topSkillsTitle}</Text>
            <View style={{ ...styles.tagWrapper, ...styles.topSkills }}>
              {cvData.topSkills.map(skill => (
                <View style={styles.tag} key={skill.name}>
                  <Text style={styles.tagText}>{skill.name}</Text>
                </View>
              ))}
            </View>
          </View>
          <SvgLine />
          <Text style={styles.subtitle}>{texts?.workExperienceTitle}</Text>
          {cvData.workHistory.map(workItem => (
            <View wrap={false} style={styles.item} key={workItem.company}>
              <Text style={styles.itemTitle}>
                {workItem.customDate
                  ? workItem.customDate
                  : `${getFormattedDateMMYYYY(workItem.startDate)} - ${
                      workItem.endDate
                        ? getFormattedDateMMYYYY(workItem.endDate)
                        : ''
                    }`}
                {`, ${workItem.company}, ${workItem.title}`}
              </Text>
              <Text style={styles.itemBody}>{workItem.body}</Text>
              <View style={styles.tagWrapper}>
                {workItem.skills.map(skill => (
                  <View style={styles.tag} key={skill.name}>
                    <Text style={styles.tagText}>{skill.name}</Text>
                  </View>
                ))}
              </View>
            </View>
          ))}
          <SvgLine />
          <View wrap={false}>
            <Text style={styles.subtitle}>{texts?.educationTitle}</Text>
            {cvData.education.map(eduItem => (
              <Text key={eduItem.title} style={styles.itemTitle}>
                {getFormattedDateYYYY(eduItem.date)}
                {`, ${eduItem.title} — ${eduItem.subtitle}`}
              </Text>
            ))}
          </View>
          <View wrap={false}>
            <Text style={styles.subtitle}>{texts?.certificateTitle}</Text>
            <Text style={styles.itemTitle}>
              {cvData.certificates.map(c => c.title).join(', ')}
            </Text>
          </View>
          <View wrap={false}>
            <Text style={styles.subtitle}>{texts?.languageSkillsTitle}</Text>
            <View wrap={false} style={styles.flexRowWrapper}>
              {cvData.languageSkills.map((l, i) => (
                <View
                  wrap={false}
                  style={styles.listFlexCondensed}
                  key={l.name}
                >
                  <Text style={styles.itemTitle}>{l.name}</Text>
                  <Text style={styles.itemSubtitle}>
                    {`(${getLanguageSkillLevel(l.level, languageSkillLevelTitles)})`}
                    {i < cvData.languageSkills.length - 1 && ', '}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};
