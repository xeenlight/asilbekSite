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
<div className={styles.social}>
    <img src={inst} alt="Instagram" />
</div>
<div className={styles.social}>
    <img src={yt} alt="YouTube" />
</div>
<div className={styles.social}>
    <img src={tg} alt="Telegram" />
</div>
<div className={styles.social}>
    <img src={th} alt="Threads" />
</div>
</div>

</div>


<div className={styles.links}>

<div className={styles.column}>
<h4>{t("footer.columns.more.title")}</h4>
<a href="/about">{t("footer.columns.more.about")}</a>
<a href="/content">{t("footer.columns.more.jobs")}</a>
<a href="https://www.threads.com/@asilbekielts">{t("footer.columns.more.contact")}</a>
<a href="https://www.instagram.com/asilbekielts?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">{t("footer.columns.more.account")}</a>
</div>

<div className={styles.column}>
<h4>{t("footer.columns.content.title")}</h4>
<a href="https://t.me/ieltsdelivered">{t("footer.columns.content.newsletter")}</a>
<a href="https://www.threads.com/@asilbekielts">{t("footer.columns.content.articles")}</a>
<a href="https://www.youtube.com/@asilbekielts">{t("footer.columns.content.videos")}</a>
</div>

<div className={styles.column}>
<h4>{t("footer.columns.products.title")}</h4>
<a href="https://www.youtube.com/@asilbekielts">{t("footer.columns.products.academy")}</a>
<a href="https://www.threads.com/@asilbekielts">{t("footer.columns.products.lifeos")}</a>
</div>

</div>

</div>

</footer>

)

}

export default Subscribe