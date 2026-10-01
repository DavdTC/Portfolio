interface INavButton {
  text: string
  href: string
  isClicked: boolean
  onClick: () => void
}

export function NavButton({ text, href, isClicked, onClick }: INavButton) {
  return (
    <div className={`flex py-2 px-4 rounded-full text-xs lg:text-sm ${isClicked ? "bg-primary text-black" : "text-muted"}`}>
      <a className="hover:text-white transition-all" href={href} onClick={onClick}>{text}</a>
    </div>
  )
}