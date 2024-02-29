import format from "date-fns/format"
import parseISO from "date-fns/parseISO"
import { isEmpty } from "~/util"

export function formatShortDate(dateString, formatString) {
  if (isEmpty(dateString)) {
    return
  }

  try {
    return format(parseISO(dateString), formatString)
  } catch(error) {
    console.error(error)
    return dateString
  }
}

export function formatLongDate(dateString, formatString) {
  if (isEmpty(dateString)) {
    return
  }

  try {
    return format(parseISO(dateString), formatString)
  } catch {
    return dateString
  }
}

export function formatMoney(value = 0) {
  if (isEmpty(value)) {
    return
  }

  const formatter = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" })
  return formatter.format(value)
}

export function formatPhoneNumber(value) {
  if (isEmpty(value)) {
    return
  }

  const format = number => {
    const areaCode = number.slice(0, 3)
    const firstThree = number.slice(3, 6)
    const lastFour = number.slice(-4)

    return `(${areaCode}) ${firstThree}-${lastFour}`
  }

  const cleanValue = value.replace(/[+\-()\s]/g, "")

  return format(cleanValue.startsWith("1") ? cleanValue.slice(1) : cleanValue)
}
