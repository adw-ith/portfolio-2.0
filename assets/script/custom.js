function backtotop()
{
    const arr = document.getElementsByClassName("arrow");
    if (window.scrollY > 80){
        arr.style.opacity = '1'
    }
    else{
        arr.style.opacity = '0'
    }
}

backtotop();