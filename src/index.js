import { hello } from "./js/sub";

console.log("JavaScript 変換成功");

hello();

window.addEventListener("load", () => {
  console.log("IE11で表示されたらJavaScript Transpile成功");
});
