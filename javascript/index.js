const toggleButton = document.getElementById("toggleButton")
const ulList = document.getElementById("navList")


toggleButton.addEventListener("click", () => {
    console.log("fuckery")
    ulList.classList.toggle('active');
})