const form = document.querySelector("#form")
.addEventListener("submit", function(event) {
    event.preventDefault()
    console.log(event.target)
})