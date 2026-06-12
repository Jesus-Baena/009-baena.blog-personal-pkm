import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { FullSlug, resolveRelative } from "../util/path"
import { i18n, getEffectiveLocale } from "../i18n"

const ES_PREFIX = "es/"
const EN_HOME = "index" as FullSlug
const ES_HOME = "es/index" as FullSlug

function isSpanishSlug(slug: FullSlug): boolean {
  return slug === "es" || slug.startsWith(ES_PREFIX)
}

// Maps a slug to its counterpart in the other language by adding/stripping the `es/` prefix.
function counterpartSlug(slug: FullSlug): FullSlug {
  if (isSpanishSlug(slug)) {
    const stripped = slug.slice(ES_PREFIX.length)
    return stripped === "" ? EN_HOME : (stripped as FullSlug)
  }
  return slug === EN_HOME ? ES_HOME : ((ES_PREFIX + slug) as FullSlug)
}

const LangSwitcher: QuartzComponent = ({
  fileData,
  allFiles,
  displayClass,
  cfg,
}: QuartzComponentProps) => {
  const currentSlug = fileData.slug!
  const locale = getEffectiveLocale(cfg.locale, fileData.frontmatter?.lang)
  const t = i18n(locale).components.langSwitcher

  const onSpanish = isSpanishSlug(currentSlug)

  // Prefer the direct counterpart; fall back to the other language's home so it's never a dead link.
  const counterpart = counterpartSlug(currentSlug)
  const counterpartExists = allFiles.some((f) => f.slug === counterpart)
  const target = counterpartExists ? counterpart : onSpanish ? EN_HOME : ES_HOME
  const href = resolveRelative(currentSlug, target)

  const englishActive = !onSpanish
  return (
    <div class={classNames(displayClass, "lang-switcher")} aria-label={t.switchTo}>
      {englishActive ? (
        <span class="lang-option active" aria-current="true" title={t.english}>
          EN
        </span>
      ) : (
        <a class="lang-option" href={href} title={t.english} hreflang="en">
          EN
        </a>
      )}
      <span class="lang-divider">/</span>
      {englishActive ? (
        <a class="lang-option" href={href} title={t.spanish} hreflang="es">
          ES
        </a>
      ) : (
        <span class="lang-option active" aria-current="true" title={t.spanish}>
          ES
        </span>
      )}
    </div>
  )
}

LangSwitcher.css = `
.lang-switcher {
  display: flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 0.85rem;
  font-weight: 600;
}

.lang-switcher .lang-option {
  color: var(--gray);
  text-decoration: none;
  padding: 0.1rem 0.2rem;
  border-radius: 4px;
}

.lang-switcher a.lang-option:hover {
  color: var(--secondary);
}

.lang-switcher .lang-option.active {
  color: var(--secondary);
}

.lang-switcher .lang-divider {
  color: var(--lightgray);
}
`

export default (() => LangSwitcher) satisfies QuartzComponentConstructor
