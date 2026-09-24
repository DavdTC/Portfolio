import type { ChangeEvent } from "react"

interface IInputTextArea {
  title: string
  id: string
  name: string
  value: string
  placeholder: string
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
}

export function InputTextArea({ id, name, onChange, placeholder, title, value }: IInputTextArea) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-muted text-sm max-w-max">{title}</label>
      <textarea
        id={id}
        name={name}
        placeholder={placeholder}
        className="w-full h-40 overflow-auto p-2 resize-none rounded-lg focus:border-primary focus:outline-none border border-border bg-background-secondary scrollbar-border"
        onChange={onChange}
        value={value}
      ></textarea>
    </div>
  )
}