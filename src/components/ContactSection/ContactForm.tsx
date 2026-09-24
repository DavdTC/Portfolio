import { useState, type ChangeEvent } from "react"
import { InputText } from "../InputText/InputText"

export function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(form)
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex gap-2">
        <InputText
          id="name"
          name="name"
          title="Nombre"
          type="text"
          placeholder="Tu nombre"
          value={form.name}
          onChange={handleChange}
        />

        <InputText
          id="email"
          name="email"
          title="Email"
          type="email"
          placeholder="Tu email"
          value={form.email}
          onChange={handleChange}
        />

      </div>


      <button type="submit">Enviar</button>
    </form>
  )
}