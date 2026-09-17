interface INavButton {
  text: string
  ref: string
  isClicked: boolean
  onClick: () => void
}

export function NavButton({ text, ref, isClicked, onClick }: INavButton) {
  return (
    <div className={`flex py-2 px-4 rounded-full text-sm ${isClicked ? "bg-primary text-black" : "text-muted"}`}>
      <a className="hover:text-white transition-all" href={ref} onClick={onClick}>{text}</a>
    </div>
  )
}