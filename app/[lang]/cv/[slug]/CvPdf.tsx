'use client';

import {
  Font,
  Page,
  StyleSheet,
  Text,
  Document,
  View,
  Svg,
  Line,
  Image,
  Link,
} from '@react-pdf/renderer';
import { FragmentOf, readFragment } from 'gql.tada';
import { getFormattedDateMMMYYYY } from '@/utils/date';
import { useParams } from 'next/navigation';
import { Locale } from '@/locales';
import { CVFragment, CVTextFragment } from '@/app/[lang]/cv/[slug]/fragments';
import { LinkedIn } from '@/app/[lang]/cv/[slug]/icons/linkedIn';
import { Web } from '@/app/[lang]/cv/[slug]/icons/web';
import { Phone } from '@/app/[lang]/cv/[slug]/icons/phone';
import { At } from '@/app/[lang]/cv/[slug]/icons/at';

export interface CvPdfProps {
  data: FragmentOf<typeof CVFragment>;
  textData: FragmentOf<typeof CVTextFragment> | null;
}

Font.register({
  family: 'Work Sans',
  fonts: [
    {
      src: '/fonts/WorkSans/WorkSans-Light.ttf',
      fontWeight: 300,
    },
    {
      src: '/fonts/WorkSans/WorkSans-Regular.ttf',
      fontWeight: 400,
    },
    {
      src: '/fonts/WorkSans/WorkSans-SemiBold.ttf',
      fontWeight: 600,
    },
  ],
});

Font.register({
  family: 'Poppins',
  fonts: [
    {
      src: '/fonts/Poppins/Poppins-Light.ttf',
      fontWeight: 300,
    },
    {
      src: '/fonts/Poppins/Poppins-Regular.ttf',
      fontWeight: 400,
    },
    {
      src: '/fonts/Poppins/Poppins-Medium.ttf',
      fontWeight: 500,
    },
    {
      src: '/fonts/Poppins/Poppins-SemiBold.ttf',
      fontWeight: 600,
    },
    {
      src: '/fonts/Poppins/Poppins-Bold.ttf',
      fontWeight: 700,
    },
  ],
});

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#ECE9E7',
    paddingTop: 40,
    paddingBottom: 20,
    paddingHorizontal: 40,
    marginTop: -40,
    display: 'flex',
    flexDirection: 'row',
    gap: 40,
  },
  headerTexts: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  content: {
    paddingTop: 16,
    paddingHorizontal: 40,
  },
  image: {
    width: 120,
    height: 120,
  },
  page: {
    paddingTop: 40,
    paddingBottom: 30,
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
    fontSize: 12,
    fontFamily: 'Work Sans',
    fontWeight: 'light',
    color: '#404040',
    textDecoration: 'none',
  },
  subtitle: {
    fontSize: 14,
    fontFamily: 'Poppins',
    fontWeight: 'semibold',
    marginVertical: 16,
  },
  topSkills: {
    marginBottom: 16,
  },
  item: {
    marginBottom: 24,
  },
  flexItem: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 8,
  },
  itemDate: {
    fontSize: 12,
    fontFamily: 'Poppins',
    fontWeight: 'light',
    textTransform: 'uppercase',
    marginBottom: 2,
  },
  itemTitle: {
    fontSize: 12,
    fontFamily: 'Poppins',
    fontWeight: 'medium',
    marginBottom: 4,
  },
  itemBody: {
    fontSize: 12,
    fontFamily: 'Work Sans',
    fontWeight: 'light',
    lineHeight: 1.5,
  },
  flexItemTitle: {
    fontSize: 12,
    fontFamily: 'Poppins',
    fontWeight: 'medium',
    minWidth: 132,
  },
  flexItemBody: {
    fontSize: 12,
    fontFamily: 'Work Sans',
  },
  tagWrapper: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  tagText: {
    fontSize: 12,
    fontFamily: 'Work Sans',
  },
  tag: {
    paddingVertical: 4,
    paddingHorizontal: 10,
    backgroundColor: '#F8F8F8',
    borderRadius: 20,
    border: '1px solid #F1F1F1',
  },
  pageNumber: {
    fontFamily: 'Work Sans',
    position: 'absolute',
    fontSize: 12,
    bottom: 30,
    left: 40,
    right: 40,
    textAlign: 'right',
    color: '#b6b6b6',
  },
});

const SvgLine = () => {
  return (
    <Svg height="16" width="515">
      <Line x1="0" y1="8" x2="515" y2="8" strokeWidth={1} stroke="#E5E5E5" />
    </Svg>
  );
};

const getSvgIcon = (icon: string | null) => {
  switch (icon) {
    case 'linkedIn':
      return <LinkedIn />;
    case 'web':
      return <Web />;
    case 'phone':
      return <Phone />;
    case 'email':
      return <At />;
    default:
      null;
  }
};

const getLanguageSkillLevel = (
  level: string | null,
  levelTitles: Record<string, string | undefined>
) => {
  if (!level) return '';
  return levelTitles[level] || '';
};

export const CvPdf = ({ data, textData }: CvPdfProps) => {
  const { lang, slug } = useParams<{ lang: Locale, slug: string }>();
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
          <Text style={styles.subtitle}>{texts?.topSkillsTitle}</Text>
          <View style={{ ...styles.tagWrapper, ...styles.topSkills }}>
            {cvData.topSkills.map(skill => (
              <View style={styles.tag} key={skill.name}>
                <Text style={styles.tagText}>{skill.name}</Text>
              </View>
            ))}
          </View>
          <SvgLine />
          <Text style={styles.subtitle}>{texts?.workExperienceTitle}</Text>
          {cvData.workHistory.map(workItem => (
            <View wrap={false} style={styles.item} key={workItem.company}>
              <Text style={styles.itemDate}>
                {workItem.startDate &&
                  `${getFormattedDateMMMYYYY(workItem.startDate, lang)} - ${
                    workItem.endDate
                      ? getFormattedDateMMMYYYY(workItem.endDate, lang)
                      : ''
                  }`}
              </Text>
              {workItem.customDate && (
                <Text style={styles.itemDate}>{workItem.customDate}</Text>
              )}
              <Text style={styles.itemTitle}>
                {workItem.company} — {workItem.title}
              </Text>
              <Text style={styles.itemBody}>{workItem.body}</Text>
            </View>
          ))}
          <SvgLine />
          <Text style={styles.subtitle}>{texts?.educationTitle}</Text>
          {cvData.education.map(eduItem => (
            <View wrap={false} style={styles.item} key={eduItem.title}>
              {eduItem.date && (
                <Text style={styles.itemDate}>
                  {getFormattedDateMMMYYYY(eduItem.date, lang)}
                </Text>
              )}
              <Text style={styles.itemTitle}>
                {eduItem.title} — {eduItem.subtitle}
              </Text>
              <Text style={styles.itemBody}>{eduItem.body}</Text>
            </View>
          ))}
          <SvgLine />
          <Text style={styles.subtitle}>{texts?.certificateTitle}</Text>
          {cvData.certificates.map(certItem => (
            <View wrap={false} style={styles.item} key={certItem.title}>
              {certItem.date && (
                <Text style={styles.itemDate}>
                  {getFormattedDateMMMYYYY(certItem.date, lang)}
                </Text>
              )}
              <Text style={styles.itemTitle}>{certItem.title}</Text>
              <Text style={styles.itemBody}>{certItem.body}</Text>
            </View>
          ))}
          <SvgLine />
          <Text style={styles.subtitle}>{texts?.languageSkillsTitle}</Text>
          {cvData.languageSkills.map(skill => (
            <View wrap={false} style={styles.flexItem} key={skill.name}>
              <Text style={styles.flexItemTitle}>{skill.name}</Text>
              <Text style={styles.flexItemBody}>
                {getLanguageSkillLevel(skill.level, languageSkillLevelTitles)}
              </Text>
            </View>
          ))}
          <SvgLine />
          <View wrap={false}>
            <Text style={styles.subtitle}>{texts?.techSkillsTitle}</Text>
            <View style={styles.tagWrapper}>
              {cvData.techSkills.map(skill => (
                <View style={styles.tag} key={skill.name}>
                  <Text style={styles.tagText}>{skill.name}</Text>
                </View>
              ))}
            </View>
          </View>
          <View wrap={false}>
            <Text style={styles.subtitle}>{texts?.designSkillsTitle}</Text>
            <View style={styles.tagWrapper}>
              {cvData.designSkills.map(skill => (
                <View style={styles.tag} key={skill.name}>
                  <Text style={styles.tagText}>{skill.name}</Text>
                </View>
              ))}
            </View>
          </View>
          <View wrap={false}>
            <Text style={styles.subtitle}>{texts?.coreSkillsTitle}</Text>
            <View style={styles.tagWrapper}>
              {cvData.coreSkills.map(skill => (
                <View style={styles.tag} key={skill.name}>
                  <Text style={styles.tagText}>{skill.name}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>
        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
          fixed
        />
      </Page>
    </Document>
  );
};
