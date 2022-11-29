function hoverIn() {

    document.getElementById("titles").style.opacity = "1"
    document.getElementById("titles").style.marginTop = "0%"
    setTimeout(() => {
        document.getElementById("values").style.opacity = "1"
        document.getElementById("values").style.marginTop = "2%"
    }, 300);
    setTimeout(() => {
        document.getElementById("button").style.opacity = "1"
    }, 300);

}
function hoverOut() {

    document.getElementById("button").style.opacity = "0"
    setTimeout(() => {
        document.getElementById("titles").style.marginTop = "3%"
        document.getElementById("titles").style.opacity = "0"
    }, 300);
    setTimeout(() => {
        document.getElementById("values").style.marginTop = "3%"
        document.getElementById("values").style.opacity = "0"
    }, 300);


}