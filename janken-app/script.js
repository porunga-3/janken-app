function showImage(imagePath) {

    const menu =
        document.getElementById("menu");

    const imageScreen =
        document.getElementById("imageScreen");

    const image =
        document.getElementById("jankenImage");


    image.src = imagePath;


    menu.style.display = "none";

    imageScreen.style.display = "block";
}


function backToMenu() {

    const menu =
        document.getElementById("menu");

    const imageScreen =
        document.getElementById("imageScreen");


    imageScreen.style.display = "none";

    menu.style.display = "flex";
}