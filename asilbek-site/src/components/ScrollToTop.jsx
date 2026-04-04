import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Мгновенно скроллим в самый верх при смене страницы
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",   // "smooth" тоже можно, но "instant" надёжнее
    });
  }, [pathname]); // срабатывает при каждом изменении пути

  return null; // компонент ничего не рендерит
}