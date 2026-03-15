import styles from "./Navbar.module.css"
import { useTranslation } from "react-i18next"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
function Navbar(){

  const { t, i18n } = useTranslation()

  const [activeLang,setActiveLang] = useState(i18n.language || "ru")
  const [langOpen,setLangOpen] = useState(false)
  const [menu,setMenu] = useState(false)
  const [scrolled,setScrolled] = useState(false)

  const languages = ["ru","uz","en"]

  useEffect(()=>{

    const handleScroll = ()=>{
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll",handleScroll)

    if(menu){
      document.body.style.overflow = "hidden"
    }else{
      document.body.style.overflow = "auto"
    }

    return ()=>window.removeEventListener("scroll",handleScroll)

  },[menu])

  const changeLanguage = (lng)=>{
    i18n.changeLanguage(lng)
    setActiveLang(lng)
    setLangOpen(false)
    setMenu(false)
  }

  return(

    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>

      <div className={styles.container}>

        <div className={styles.logo}>B9 Lab</div>

        <div className={`${styles.links} ${menu ? styles.showMenu : ""}`}>
          <Link to="/">{t("nav.home")}</Link>
<Link to="/about">{t("nav.about")}</Link>
<Link to="/content">{t("nav.content")}</Link>
        </div>

        <div className={styles.right}>

          <div className={`${styles.languageSwitcher} ${langOpen ? styles.open : ""}`}>
            {!langOpen && (
              <button className={styles.circle} onClick={()=>setLangOpen(true)}>
                {activeLang.toUpperCase()}
              </button>
            )}

            {langOpen && languages.map((lang)=>(
              <button
                key={lang}
                className={`${styles.langBtn} ${activeLang===lang ? styles.active : ""}`}
                onClick={()=>changeLanguage(lang)}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>

          <div
            className={`${styles.burger} ${menu ? styles.activeBurger : ""}`}
            onClick={()=>setMenu(!menu)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

        </div>

      </div>

      {/* OVERLAY */}
      {menu && <div className={styles.overlay} onClick={()=>setMenu(false)}></div>}

    </nav>

  )

}

export default Navbar