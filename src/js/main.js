function mouseover(){
    document.getElementById("nosaltres").classList.toggle("show");
}

window.onmouseover = function(e){
    if(!e.target.classList.matches("nosaltres")){
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
            }
        }
    }
}