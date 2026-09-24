import type { ChangeEvent, InputHTMLAttributes } from "react"

interface IInputText {
  id: string
  name: string
  title: string
  type: InputHTMLAttributes<HTMLInputElement>["type"]
  value: string
  placeholder: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export function InputText({ id, name, title, type, value, placeholder, onChange }: IInputText) {


  return (
    <div className="w-full flex flex-col gap-2">
      <label htmlFor={id} className="text-sm text-muted">
        {title}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        className="bg-background-secondary text-sm border border-border rounded-lg p-2 focus:border-primary"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      >
      </input>

    </div>

  )
}