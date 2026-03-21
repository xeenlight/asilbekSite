// src/components/Navbar/Navbar.jsx

import styles from "./Navbar.module.css";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar(){

  const { t, i18n } = useTranslation();

  const [activeLang,setActiveLang] = useState(i18n.language || "ru");
  const [langOpen,setLangOpen] = useState(false);
  const [menu,setMenu] = useState(false);
  const [scrolled,setScrolled] = useState(false);

  const languages = ["ru","uz","en"];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);

    // блокируем вертикальный скролл при открытом меню
    document.body.style.overflow = menu ? "hidden" : "auto";

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "auto";
    };
  }, [menu]);

  const changeLanguage = (lng)=>{
    i18n.changeLanguage(lng);
    setActiveLang(lng);
    setLangOpen(false);
    setMenu(false);
  };

  return(
    <>
      {/* NAVBAR */}
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
        <div className={styles.container}>

          <div className={styles.logo}>Asilbek IELTS</div>

          {/* DESKTOP LINKS */}
          <div className={styles.linksDesktop}>
            <Link to="/">{t("nav.home")}</Link>
            <Link to="/about">{t("nav.about")}</Link>
            <Link to="/content">{t("nav.content")}</Link>
          </div>

          <div className={styles.right}>

            {/* LANGUAGE */}
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

            {/* BURGER */}
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
      </nav>

      {/* MOBILE MENU (ВНЕ NAVBAR) */}
      <div className={`${styles.mobileMenu} ${menu ? styles.showMenu : ""}`}>
        <Link onClick={()=>setMenu(false)} to="/">{t("nav.home")}</Link>
        <Link onClick={()=>setMenu(false)} to="/about">{t("nav.about")}</Link>
        <Link onClick={()=>setMenu(false)} to="/content">{t("nav.content")}</Link>
      </div>

      {/* OVERLAY */}
      {menu && (
        <div 
          className={styles.overlay} 
          onClick={()=>setMenu(false)}
        ></div>
      )}
    </>
  );
}

export default Navbar;