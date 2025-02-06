// Access elements using getElementById
document.getElementById("changeText").addEventListener("click", function () {
    const heading = document.getElementById("heading");
    heading.innerHTML = "New Text after modification";
});

// Access elements using getElementsByTagName
document.getElementById("changeStyle").addEventListener("click", function () {
    const paragraphs = document.getElementsByTagName("p");
    for (let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].style.color = "blue";
        paragraphs[i].style.fontSize = "18px";
    }
});

// Access elements using getElementsByClassName
document.getElementById("changeImage").addEventListener("click", function () {
    const image = document.getElementById("image");
    image.src = "/images.png";
});

// Add a text node
document.getElementById("addTextNode").addEventListener("click", function () {
    const container = document.getElementById("textNodeContainer");
    const newTextNode = document.createTextNode("New text");
    container.appendChild(newTextNode);
});

// Delete a node
document.getElementById("deleteNode").addEventListener("click", function () {
    const container = document.getElementById("textNodeContainer");
    if (container.lastChild.nodeType === 3) {
        container.removeChild(container.lastChild);
    }
});
