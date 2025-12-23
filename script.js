function myFunction(){
    var x = document.getElementById("myInput1");
    if (x.type === "password") {
    x.type = "text";
    } else {
    x.type = "password";
    }
    var icon = document.getElementById("togglePassword1").getElementsByTagName("img")[0];
    if (x.type === "text") {
    icon.src = "Img/icon/eye-outline.svg";
    } else {
    icon.src = "Img/icon/eye-off-outline.svg";
    }
}
function myFunction1(){
    var y = document.getElementById("myInput2");
    if (y.type === "password") {
    y.type = "text";
    } else {
    y.type = "password";
    }
    var icon1 = document.getElementById("togglePassword2").getElementsByTagName("img")[0];
    if (y.type === "text") {
    icon1.src = "Img/icon/eye-outline.svg";
    } else {
    icon1.src = "Img/icon/eye-off-outline.svg";
    }
}