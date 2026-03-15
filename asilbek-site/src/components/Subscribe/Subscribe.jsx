import styles from "./Subscribe.module.css"
import { useTranslation } from "react-i18next"

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
<div className={styles.social}></div>
<div className={styles.social}></div>
<div className={styles.social}></div>
<div className={styles.social}></div>
<div className={styles.social}></div>
</div>

</div>


<div className={styles.links}>

<div className={styles.column}>
<h4>{t("footer.columns.more.title")}</h4>
<a>{t("footer.columns.more.about")}</a>
<a>{t("footer.columns.more.jobs")}</a>
<a>{t("footer.columns.more.contact")}</a>
<a>{t("footer.columns.more.account")}</a>
</div>

<div className={styles.column}>
<h4>{t("footer.columns.content.title")}</h4>
<a>{t("footer.columns.content.newsletter")}</a>
<a>{t("footer.columns.content.articles")}</a>
<a>{t("footer.columns.content.podcast")}</a>
<a>{t("footer.columns.content.videos")}</a>
<a>{t("footer.columns.content.notes")}</a>
</div>

<div className={styles.column}>
<h4>{t("footer.columns.products.title")}</h4>
<a>{t("footer.columns.products.book")}</a>
<a>{t("footer.columns.products.academy")}</a>
<a>{t("footer.columns.products.lifeos")}</a>
</div>

</div>

</div>

</footer>

)

}

export default Subscribe