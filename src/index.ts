import { lookUp } from "./utils"

type fontWeight = "normal" | "bold" | "italic" | "bold-italic"

const fontWeightMap = {
  "normal": true,
  "bold": true,
  "italic": true,
  "bold-italic": true
}

const fontWeightHelper = (
  s = "",
  prefix = "serif",
  options: { fontWeight: fontWeight } = { fontWeight: "normal" }
) => {
  const suffix = fontWeightMap[options.fontWeight] ? options.fontWeight : "normal"
  const fontName = `${prefix}.${suffix}`
  return lookUp(fontName, s)
}

export const serif = (
  s?: string,
  options?: { fontWeight: fontWeight }
) => fontWeightHelper(s, "serif", options)

export const sansSerif = (
  s?: string,
  options?: { fontWeight: fontWeight }
) => fontWeightHelper(s, "sans-serif", options)

const scriptHelper = (
  s = "",
  prefix = "script",
  options: { fontWeight: "normal" | "bold" } = { fontWeight: "normal" }
) => {
  const suffix = options.fontWeight === "bold" ? "bold" : "normal"
  return lookUp(`${prefix}.${suffix}`, s)
}

export const script = (
  s = "",
  options: { fontWeight: "normal" | "bold" } = { fontWeight: "normal" }
) => scriptHelper(s, "script", options)

export const fraktur = (
  s = "",
  options: { fontWeight: "normal" | "bold" } = { fontWeight: "normal" }
) => scriptHelper(s, "script", options)

export const monoSpace = (
  s = "",
) => lookUp("mono-space.normal", s)

export const doubleStruck = (
  s = ""
) => lookUp("double-struck.bold", s)