function change(){ 
  const nav = document.querySelector(".navbar");
  const input = document.querySelector(".text-input"); 
  if (document.body.style.backgroundColor == "rgb(32, 44, 55)") {
    nav.style.backgroundColor = "hsl(0, 0%, 100%)";
    input.style.backgroundColor = "hsl(0, 0%, 100%)";
    return (document.body.style.backgroundColor = "hsl(0, 0%, 90%)");
  }
  nav.style.backgroundColor = "hsl(209, 23%, 22%)";
  input.style.backgroundColor = "hsl(209, 23%, 22%)";
  document.body.style.backgroundColor = "hsl(207, 26%, 17%)";
}