import { Helmet } from 'react-helmet-async'
import type { SeoMetaProps } from '../../types/shared.types'
import { SEO_DEFAULTS } from '../../constants/seo-defaults.constants'

const SeoMetaTags = ({ title, description, keywords, ogImage, canonical }: Partial<SeoMetaProps>) => {
  const t = title ?? SEO_DEFAULTS.title
  const d = description ?? SEO_DEFAULTS.description
  const k = keywords ?? SEO_DEFAULTS.keywords
  const img = ogImage ?? SEO_DEFAULTS.ogImage
  const c = canonical ?? SEO_DEFAULTS.canonical

  return (
    <Helmet>
      <title>{t}</title>
      <meta name="description" content={d} />
      {k && <meta name="keywords" content={k} />}
      <link rel="canonical" href={c} />
      <meta property="og:title" content={t} />
      <meta property="og:description" content={d} />
      <meta property="og:type" content="website" />
      {img && <meta property="og:image" content={img} />}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={t} />
      <meta name="twitter:description" content={d} />
    </Helmet>
  )
}

export default SeoMetaTags