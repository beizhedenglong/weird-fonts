import * as fs from "fs"
import * as path from "path"
import { serif } from "../src"


const originReademe = fs.readFileSync(
  path.join(__dirname, "..", "originReadme.md"),
  "utf8"
)

const output = originReademe
  .split("\n")
  .map((line = "") => {
    const escapePattern = /<!--\s+weird-disable-line\s+-->/
    if (escapePattern.test(line)) {
      return line.replace(escapePattern, "")
    }
    return serif(line, { fontStyle: "bold-italic" })
  })
  .join("\n")

fs.writeFileSync(
  path.join(__dirname, "..", "README.md"),
  output
)