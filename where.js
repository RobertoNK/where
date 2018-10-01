function findIt(evt){
    document.getElementById("xcoor1").value = evt.clientX;
    document.getElementById("ycoor1").value = evt.clientY;
    document.getElementById("xcoor2").value = evt.screenX;
    document.getElementById("ycoor2").value = evt.screenY;
}