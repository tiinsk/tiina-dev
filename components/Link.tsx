import { usePageContext } from "vike-react/usePageContext";
import { Locale, defaultLocale } from '../locales'

type LinkProps = { href: string; locale?: Locale; children: string }

export const Link = ({ href, locale, ...props }: LinkProps) => {
  const pageContext = usePageContext()
  const { urlPathname } = pageContext;
  const isActive = href === "/" ? urlPathname === href : urlPathname.startsWith(href);
  locale = locale || pageContext.locale
  if (locale !== defaultLocale) {
    href = '/' + locale + href
  }
  return <a href={href} className={isActive ? "is-active" : undefined} {...props} />
}
