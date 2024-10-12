document.getElementById("dropdownHeader").addEventListener("click", function() {
    const content = document.getElementById("dropdownContent");
    const arrow = document.getElementById("arrow");

    // Переключаем видимость контента
    if (content.style.display === "block") {
        content.style.display = "none";
        arrow.classList.remove("up"); // Возвращаем стрелочку вниз
    } else {
        content.style.display = "block";
        arrow.classList.add("up"); // Поворачиваем стрелочку вверх
    }
});

var educationsText = document.getElementById("educationsText");
 if(educationsText) {
   educationsText.addEventListener("click", function () {
     var anchor = document.querySelector("[data-scroll-to='component22Container']");
 if(anchor) {
   anchor.scrollIntoView({"block":"start","behavior":"smooth"})
}
});
}
var component8Container = document.getElementById("component8Container");
if(component8Container) {
component8Container.addEventListener("click", function () {
var anchor = document.querySelector("[data-scroll-to='skillsText1']");
if(anchor) {
anchor.scrollIntoView({"block":"start","behavior":"smooth"})
}
});
}
var component7Container = document.getElementById("component7Container");
if(component7Container) {
component7Container.addEventListener("click", function () {
var anchor = document.querySelector("[data-scroll-to='skillsText1']");
if(anchor) {
anchor.scrollIntoView({"block":"start","behavior":"smooth"})
}
});
}
var component6Container = document.getElementById("component6Container");
if(component6Container) {
component6Container.addEventListener("click", function () {
var anchor = document.querySelector("[data-scroll-to='contactWithMe']");
if(anchor) {
anchor.scrollIntoView({"block":"start","behavior":"smooth"})
}
});
}
var backToMain = document.getElementById("backToMain");
if(backToMain) {
backToMain.addEventListener("click", function () {
var anchor = document.querySelector("[data-scroll-to='skillsText']");
if(anchor) {
anchor.scrollIntoView({"block":"start","behavior":"smooth"})
}
});
}
