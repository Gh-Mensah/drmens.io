function openCity(evt, infoText) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tabcontent.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(infoText).style.display = "block";
    evt.currentTarget.className += " active";
}