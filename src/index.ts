import { hello } from "./ts/sub";

//CSSからSCSSに変更
//import "./css/style.css";
import "./scss/style.scss";

alert("TypeScript 変換成功");

hello();

window.addEventListener("load", () => {
  alert("IE11で表示されたらTypeScript Transpile成功");
});
