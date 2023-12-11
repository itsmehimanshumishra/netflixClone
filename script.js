const btn = document.getElementById("viewSite");

btn.addEventListener("click",()=>{
    let container = document.getElementById("container");
    let enter_page = document.querySelector(".enter-page");
    container.style.display = "block";
    enter_page.style.display = "none";
})
