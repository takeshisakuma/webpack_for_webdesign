import { hello } from "./js/sub";

alert("JavaScript 変換成功");

hello();

window.addEventListener("load", () => {
  alert("IE11で表示されたらJavaScript Transpile成功");
});
