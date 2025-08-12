import { pathToRoot, joinSegments } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)
  const logoPath = joinSegments(baseDir, "static/jbaena-logo-length.png")
  return (
    <div class={classNames(displayClass, "page-title-container")}>
      <a href={baseDir} class="page-title-link">
        <img src={logoPath} alt="Logo" class="page-logo" />
        <h2 class="page-title">{title}</h2>
      </a>
    </div>
  )
}

PageTitle.css = `
.page-title-container {
  margin: 0;
  text-align: center;
}

.page-title-link {
  text-decoration: none;
  color: inherit;
  display: block;
}

.page-title-link:hover {
  text-decoration: none;
}

.page-logo {
  max-width: 200px;
  height: auto;
  margin: 0 auto 0.5rem auto;
  display: block;
}

.page-title {
  font-size: 1.75rem;
  margin: 0;
  font-family: var(--titleFont);
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
