import kiwi from "./kiwi.png";

function addImage() {
    const img = document.createElement("img");
    img.alt = "Kiwi";
    img.width = 300;
    img.src = kiwi;

    document.body.appendChild(img);
    
}

export default addImage;
