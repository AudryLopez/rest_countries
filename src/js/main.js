function change(){ 
  const nav = document.querySelector(".navbar");
  //const title = document.getElementsByClassName(".title"); 
  if (document.body.style.backgroundColor == "rgb(32, 44, 55)") {
    nav.style.backgroundColor = "hsl(0, 0%, 100%)";
    
    //change(title, "black");
    return (document.body.style.backgroundColor = "hsl(0, 0%, 90%)");
  }
   nav.style.backgroundColor = "red";
  //change(title, "hsl(0, 0%, 100%)");
  document.body.style.backgroundColor = "hsl(207, 26%, 17%)";
}