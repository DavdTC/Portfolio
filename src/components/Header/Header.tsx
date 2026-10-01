import { useEffect, useState } from "react";
import { NavButton } from "../NavButton/NavButton";
import { navItems } from "../../data/data";
import { useTranslation } from "react-i18next";

export function Header() {
  const { t } = useTranslation()
  const [activeNav, setActiveNav] = useState(navItems[0].id)

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleSection) {
          setActiveNav(visibleSection.target.id);
        }
      },
      {
        threshold: 0.3,
      }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [])

  return (
    <header className="flex items-center justify-center h-full sticky top-10 z-1">
      <nav className="w-75 sm:w-auto border rounded-full px-2 py-1 bg-background-secondary/80 border-border backdrop-blur-md">
        <ul className="flex flex-wrap justify-center lg:gap-4">
          {navItems.map((item) => (
            <NavButton
              key={item.id}
              text={t(item.label, item.label)}
              href={"#" + item.id}
              isClicked={activeNav === item.id}
              onClick={() => setActiveNav(item.id)}></NavButton>
          ))}
        </ul>
      </nav>
    </header>

  )
}