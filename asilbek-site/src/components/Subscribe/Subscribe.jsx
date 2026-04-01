import styles from "./Subscribe.module.css"
import { useTranslation } from "react-i18next"
import inst from "../../assets/images/inst.png"
import yt from "../../assets/images/yt.png"
import tg from "../../assets/images/tg.png"
import th from "../../assets/images/th.png"

function Subscribe(){

const { t } = useTranslation()

return(

<footer className={styles.footer}>

<div className={styles.container}>

<div className={styles.left}>

<h2 className={styles.logo}>
{t("footer.logo")}
</h2>

<p className={styles.copy}>
{t("footer.copy")}
</p>

<div className={styles.socials}>

  <a 
    href="https://www.instagram.com/asilbekielts?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
    target="_blank" 
    rel="noopener noreferrer"
    className={styles.social}
  >
    <img src={inst} alt="Instagram" />
  </a>

  <a 
    href="https://www.youtube.com/@asilbekielts" 
    target="_blank" 
    rel="noopener noreferrer"
    className={styles.social}
  >
    <img src={yt} alt="YouTube" />
  </a>

  <a 
    href="https://t.me/ieltsdelivered" 
    target="_blank" 
    rel="noopener noreferrer"
    className={styles.social}
  >
    <img src={tg} alt="Telegram" />
  </a>

  <a 
    href="https://www.threads.com/@asilbekielts" 
    target="_blank" 
    rel="noopener noreferrer"
    className={styles.social}
  >
    <img src={th} alt="Threads" />
  </a>

</div>

</div>


<div className={styles.links}>

  {/* COLUMN 1 */}
  <div className={styles.column}>
    <h4>{t("footer.columns.more.title")}</h4>

    {/* ВНУТРЕННИЕ */}
    <a href="/about">{t("footer.columns.more.about")}</a>
    <a href="/content">{t("footer.columns.more.jobs")}</a>

    {/* ВНЕШНИЕ */}
    <a 
      href="https://www.threads.com/@asilbekielts"
      target="_blank"
      rel="noopener noreferrer"
    >
      {t("footer.columns.more.contact")}
    </a>

    <a 
      href="https://www.instagram.com/asilbekielts?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
      target="_blank"
      rel="noopener noreferrer"
    >
      {t("footer.columns.more.account")}
    </a>
  </div>

  {/* COLUMN 2 */}
  <div className={styles.column}>
    <h4>{t("footer.columns.content.title")}</h4>

    <a 
      href="https://t.me/ieltsdelivered"
      target="_blank"
      rel="noopener noreferrer"
    >
      {t("footer.columns.content.newsletter")}
    </a>

    <a 
      href="https://www.threads.com/@asilbekielts"
      target="_blank"
      rel="noopener noreferrer"
    >
      {t("footer.columns.content.articles")}
    </a>

    <a 
      href="https://www.youtube.com/@asilbekielts"
      target="_blank"
      rel="noopener noreferrer"
    >
      {t("footer.columns.content.videos")}
    </a>
  </div>

  {/* COLUMN 3 */}
  <div className={styles.column}>
    <h4>{t("footer.columns.products.title")}</h4>

    <a 
      href="https://www.youtube.com/@asilbekielts"
      target="_blank"
      rel="noopener noreferrer"
    >
      {t("footer.columns.products.academy")}
    </a>

    <a 
      href="https://www.threads.com/@asilbekielts"
      target="_blank"
      rel="noopener noreferrer"
    >
    </a>
  </div>

</div>

</div>

</footer>

)

}

export default Subscribe