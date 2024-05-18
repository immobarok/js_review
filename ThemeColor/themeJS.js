const select = document.querySelector("select");
const html = document.querySelector("html");

document.body.style.padding = "15px";

//passing parameter in function 
function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}

select.addEventListener("change", () => {
     /* select.value === "black"
     // passing function value 
     ? update("#000", "#fff")
     : update("#fff", "#000"); */

     if(select.value === "black"){
          update("#000", "#fff");
     }
     else if(select.value === "white"){
          update("#fff", "#000");
     }
     else{
          update("teal", "#fff");
     }
});
