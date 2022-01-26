function change(){   
    if (document.body.style.backgroundColor == "white") {
        document.querySelector(".title").style.color = "white";
        return document.body.style.backgroundColor = "black"
    }
    document.querySelector(".title").style.color = "black";
    document.body.style.backgroundColor = "white";
}