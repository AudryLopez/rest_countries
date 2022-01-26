function change(){   
    if (document.body.style.backgroundColor == "black") {
        document.querySelector(".title").style.color = "black";
        return document.body.style.backgroundColor = "white"
    }
    document.querySelector(".title").style.color = "white";
    document.body.style.backgroundColor = "black";
}