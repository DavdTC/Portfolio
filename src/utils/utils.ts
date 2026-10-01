export const dateFormatter = (date: Date, language: string) =>
  new Intl.DateTimeFormat(language, {
    year: "numeric",
    month: "long",
  }).format(date);

export const capitalize = (text: string) =>
  text.charAt(0).toUpperCase() + text.slice(1)
