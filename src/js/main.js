function change(){   
    if (document.body.style.backgroundColor == "rgb(32, 44, 55)") {
      document.querySelector(".title").style.color = "hsl(200, 15%, 8%)";
      return (document.body.style.backgroundColor = " hsl(0, 0%, 98%)");
    }
    document.querySelector(".title").style.color = "hsl(0, 0%, 100%)";
    document.body.style.backgroundColor = "hsl(207, 26%, 17%)";
}