function size() {
    let elements = document.querySelectorAll("h1");
    elements.forEach((h1) => h1.style.fontSize = "40px")
}

function font() {
    let elements = document.querySelectorAll("p");
    elements.forEach((p) => p.style.fontFamily = "cursive"
    );
}

function Highlight() {
    let elements = document.getElementById("JavaScript")
    elements.style.backgroundColor = "grey";
}

function Hide() {
    let elements = document.getElementById("img1")
    elements.style.display = "none"
}

function Alternate() {
    const img1 = document.getElementById("img1");
    const img2 = document.getElementById("img2");
    const img = img1.src;
    img1.src = img2.src;
    img2.src = img;
}

image = document.getElementById("img1");
image.addEventListener("mouseover", function () {
    image.src = "java3.jpg";
});
image = document.getElementById("img2");
image.addEventListener("mouseover", function () {
    image.src = "java3.jpg";
});

img1.addEventListener("contextmenu", function () {
    alert("Alert");
});

const data = document.querySelectorAll("input").forEach((data) => {
    data.addEventListener("change", function () {
        alert("Your Data");
    });
});

function load() {
    alert("Please Wait for loaded");
}

let p = document.querySelectorAll("p").forEach((p) => {
    p.addEventListener("mouseover", function () {
        p.style.backgroundColor = "pink";
    });
    p.addEventListener("mouseout", function () {
        p.style.backgroundColor = "purple";
    });
});