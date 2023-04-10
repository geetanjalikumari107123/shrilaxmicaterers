function hide(){
    let btnn = document.getElementById("btnn"); 
    let Veg = document.getElementById("Veg");
    if(Veg.style.display != 'none'){
        Veg.style.display = 'none';
    }
    else{
        Veg.style.display = 'block';
    }
}

function toggleHide(){
    let btnn1 = document.getElementById("btnn1"); 
    let NonVeg = document.getElementById("NonVeg");
    if(NonVeg.style.display != 'none'){
        NonVeg.style.display = 'none';
    }
    else{
        NonVeg.style.display = 'block';
    }
}

