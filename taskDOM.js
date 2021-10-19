const size =() => {
const head = document.querySelectorAll("h1");
head.forEach((element) =>
element.style.size = "100%" }
head.addEventListener("click",changestayl);

const font = document.querySelector("#JavaScript");
const p = () => font.style.fontFamily= "Tahoma";
const change = document.querySelector("#JavaScript");
change.addEventListener("click",p);

const back = document.querySelector("#p2");
const ground = (element) => back.style.backgroundColor= "#JavaScriptJavaScript";
const highlight = document.querySelector("#JavaScriptJavaScript");
highlight.addEventListener("click",ground);

const image = () => {
    const image = document.getElementById("imge");
    image.style.display = "none";
  };
  const hideImageButton = document.getElementById("imge");
  hideImageButton.addEventListener("click", HideImage);

  
  const originalBackground = () => {
    paragraphs.forEach((element) => {
      element.style.backgroundColor = "red";
    });
  };
  paragraphs.forEach((element) => {
    element.addEventListener("mouseover", changeBackground);
    element.addEventListener("mouseleave", originalBackground);
  });