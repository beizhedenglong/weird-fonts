import * as fs from "fs"
import * as path from "path"
import { serif } from "../src"


const originReademe = fs.readFileSync(
  path.join(__dirname, "..", "originReadme.md"),
  "utf8"
)

fs.writeFileSync(
  path.join(__dirname, "..", "README.md"),
  serif(originReademe, { fontStyle: "italic" })
)