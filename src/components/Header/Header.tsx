import { useState } from "react";
import { NavButton } from "../NavButton/NavButton";
import { navItems } from "../../data/data";

export function Header() {
  const [activeNav, setActiveNav] = useState(navItems[0].id)

  return (
    <header className="flex items-center justify-center h-full sticky top-10 z-1">
      <nav className="border rounded-full px-2 py-1 bg-background-secondary/80 border-border backdrop-blur-md">
        <ul className="flex gap-4">
          {navItems.map((item) => (
            <NavButton
              key={item.id}
              text={item.label}
              href={item.id}
              isClicked={activeNav === item.id}
              onClick={() => setActiveNav(item.id)}></NavButton>
          ))}
        </ul>
      </nav>
    </header>

  )
}