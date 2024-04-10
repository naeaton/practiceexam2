let images = document.querySelectorAll(".thumbnail");
let display = document.querySelector("#display");
var img = document.createElement("img");
for(let i = 0; i < images.length; i++)
{
    images[i].addEventListener("mouseover", function(){
        this.style.opacity = 0;
        img.src = this.src;
        img.alt = this.alt;
        display.appendChild(img);
    });
}