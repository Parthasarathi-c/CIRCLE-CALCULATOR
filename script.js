let cir = document.getElementById("cir");

let area = document.getElementById("area");

function work()
{   
    let rad = document.getElementById("radius"); 
    let r = Number(rad.value);

    if( r == NaN || r<0 )  {   window.alert("PLEASE ENTER A VALID N.O"); return;  }
    else   {  console.log(`${r}`);   }

   
    let pi = Math.PI ;
    let a = 2 * pi * r ;
    let b = pi * r * r ;
    cir.textContent = `CIRCUMFERENCE : ${Number(a).toFixed(2)} CM` ;
    area.textContent = `AREA : ${Number(b).toFixed(2)} CM SQUARE` ;
}

document.getElementById("btn").onclick = work;
