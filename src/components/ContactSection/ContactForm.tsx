import { useState, type ChangeEvent } from "react"
import { InputText } from "../InputText/InputText"
import { InputTextArea } from "../InputTextArea/InputTextArea"
import { SendIcon } from "../../icons/SendIcon"

export function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [info, setInfo] = useState({
    text: "",
    type: "info" as "info" | "error" | "success"
  }) 

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const [isLoading, setIsLoading] = useState<boolean>(false)


  const handleSubmit = async (e) => {
    e.preventDefault()
    if (form.name.trim() == "" || form.email.trim() == "" || form.message.trim() == "") {
      setInfo({text: "¡Hay campos vacíos en el formulario!", type: "error"})
      setTimeout(() => {
        setInfo({text: "", type: "error"})
      }, 3000)

      return
    }

    try {
      setIsLoading(true)
      await new Promise((resolve) => setTimeout(resolve, 2000))
      console.log(form)

    } catch (e) {
      setInfo({text: "Ha ocurrido un info inesperado. Vuelva a intentarlo", type: "error"})
      setTimeout(() => {
        setInfo({text: "", type: "error"})
      }, 3000)
    } finally {
      setIsLoading(false)
    }

  }


  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex flex-col gap-4">
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

        <InputTextArea
          id="message"
          name="message"
          title="Mensaje"
          placeholder="Escribe aquí el mensaje"
          value={form.message}
          onChange={handleChange}
        />

        <div className="flex flex-col gap-2">
          <button type="submit" disabled={isLoading} className="bg-primary w-full flex gap-2 items-center justify-center rounded-lg p-2 text-black cursor-pointer hover:opacity-80 transition-all">
            {isLoading ? (
              <>
                <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                <span>Enviando...</span>
              </>
            ) : (
              <>
                <SendIcon className="w-4 h-4" />
                <span>Enviar mensaje</span>
              </>
            )}

          </button>
          {info && (
            <span className="text-center text-red-500">
              {info}
            </span>
          )}

        </div>


      </div>


    </form>
  )
}