import * as React from "react"
import ReactDOM from "react-dom"
import {
  serif, sansSerif,
  circle, monoSpace, doubleStruck,
  script, fraktur, square,
} from "../src"

const Demo = () => {
  const [value, setValue] = React.useState("I love you three thousand.")
  return <div
    style={{
      padding: 20,
    }}
  >
    <h1>Weird Fonts Demo</h1>
    <input
      type="text"
      placeholder="Type here..."
      style={{
        width: 500,
        height: 50,
        fontSize: 16
      }}
      value={value}
      onChange={e => setValue(e.target.value)}
    />
    <ul style={{ fontSize: 20 }}>
      <li>serif italic: {serif(value, { fontStyle: "italic" })}</li>
      <li>serif bold: {serif(value, { fontStyle: "bold" })}</li>
      <li>serif bold-italic: {serif(value, { fontStyle: "bold-italic" })}</li>
      <hr />
      <li>sans-serif normal: {sansSerif(value)}</li>
      <li>sans-serif italic: {sansSerif(value, { fontStyle: "italic" })}</li>
      <li>sans-serif bold: {serif(value, { fontStyle: "bold" })}</li>
      <li>sans-serif bold-italic: {serif(value, { fontStyle: "bold-italic" })}</li>
      <hr />
      <li>mono-space: {monoSpace(value)}</li>
      <li>double-struck: {doubleStruck(value)}</li>
      <li>circle: {circle(value)}</li>
      <li>square: {square(value)}</li>
      <hr />
      <li>script normal: {script(value)}</li>
      <li>script bold: {script(value, { fontStyle: "bold" })}</li>
      <li>fraktur normal: {fraktur(value)}</li>
      <li>fraktur bold: {fraktur(value, { fontStyle: "bold" })}</li>
    </ul>
  </div>
}

ReactDOM.render(
  <div>
    <Demo />
  </div>,
  document.getElementById("app")
)
