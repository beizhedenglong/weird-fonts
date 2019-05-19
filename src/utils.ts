import fonts from "./fonts"

type fontMap = {
  [key: string]: string | undefined
}

export const toFontMap = (xs: string[]): fontMap =>
  fonts["serif.normal"].reduce((acc, key, index) => {
    if (xs[index]) {
      acc[key] = xs[index]
    }
    return acc
  }, {})

export const strMap = (f: (c: string) => string, s = ""): string => {
  let res = ""
  for (let character of s) {
    res += f(character)
  }
  return res
}

export const lookUp = (fontName: string, s = ""): string => {
  const fontMap = toFontMap(fonts[fontName] || {})
  return strMap(c => fontMap[c] ? fontMap[c] : c, s)
}
