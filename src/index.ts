import { hello } from "./ts/sub";

//CSSからSCSSに変更
//import "./css/style.css";
import "./scss/style.scss";

console.log("TypeScript 変換成功");

hello();

window.addEventListener("load", () => {
  console.log("IE11で表示されたらTypeScript Transpile成功");
});
