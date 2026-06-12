import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
import { i18n, getEffectiveLocale } from "../i18n"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  const Footer: QuartzComponent = ({ displayClass, cfg, fileData }: QuartzComponentProps) => {
    const links = opts?.links ?? {}
    const locale = getEffectiveLocale(cfg.locale, fileData.frontmatter?.lang)

    return (
      <footer class={`${displayClass ?? ""}`}>
        <ul>
          <li>
            <a
              href="#"
              data-email-user="jesus"
              data-email-domain="jbaena.net"
              class="footer-email-link"
              title={i18n(locale).components.footer.emailTitle}
            >
              Email
            </a>
          </li>

          {Object.entries(links).map(([text, link]) => (
            <li>
              <a href={link}>{text}</a>
            </li>
          ))}
        </ul>
        <p class="quartz-attribution">{i18n(locale).components.footer.createdWith}</p>
      </footer>
    )
  }

  Footer.afterDOMLoaded = `
    document.addEventListener("nav", () => {
      const emailLink = document.querySelector("a.footer-email-link")
      if (emailLink) {
        emailLink.addEventListener("click", (e) => {
          e.preventDefault()
          const user = emailLink.getAttribute("data-email-user")
          const domain = emailLink.getAttribute("data-email-domain")
          window.location.href = \`mailto:\${user}@\${domain}\`
        })
      }
    })
  `

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor
