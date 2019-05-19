import { lookUp } from "./utils"

type fontStyle = "normal" | "bold" | "italic" | "bold-italic"

const fontStyleMap = {
  "normal": true,
  "bold": true,
  "italic": true,
  "bold-italic": true
}

const fontStyleHelper = (
  s = "",
  prefix = "serif",
  options: { fontStyle: fontStyle } = { fontStyle: "normal" }
) => {
  const suffix = fontStyleMap[options.fontStyle] ? options.fontStyle : "normal"
  const fontName = `${prefix}.${suffix}`
  return lookUp(fontName, s)
}

export const serif = (
  s?: string,
  options?: { fontStyle: fontStyle }
) => fontStyleHelper(s, "serif", options)

export const sansSerif = (
  s?: string,
  options?: { fontStyle: fontStyle }
) => fontStyleHelper(s, "sans-serif", options)

const scriptHelper = (
  s = "",
  prefix = "script",
  options: { fontStyle: "normal" | "bold" } = { fontStyle: "normal" }
) => {
  const suffix = options.fontStyle === "bold" ? "bold" : "normal"
  return lookUp(`${prefix}.${suffix}`, s)
}

export const script = (
  s = "",
  options: { fontStyle: "normal" | "bold" } = { fontStyle: "normal" }
) => scriptHelper(s, "script", options)

export const fraktur = (
  s = "",
  options: { fontStyle: "normal" | "bold" } = { fontStyle: "normal" }
) => scriptHelper(s, "fraktur", options)

export const monoSpace = (
  s = "",
) => lookUp("mono-space.normal", s)

export const doubleStruck = (
  s = ""
) => lookUp("double-struck.bold", s)