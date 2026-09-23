export const dateFormatter = new Intl.DateTimeFormat("es", {
  year: "numeric",
  month: "long"
})

export const capitalize = (text: string) =>
  text.charAt(0).toUpperCase() + text.slice(1)
