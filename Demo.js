






// Assignment1
var Assignment1 = document.getElementById('myAssignment1');
// Get the button that opens the modal
var btnAssignment1 = document.getElementById("myBtnAssignment1");
var startpageContent = document.getElementsByClassName("startpageContent")[0];
var span = document.getElementsByClassName("close1")[0];
var assigmentSwitching = document.getElementsByClassName("asc")[0];
// When the user clicks on <span> (x), close the modal

span.onclick = function () {
    Assignment1.style.display = "none";
    startpageContent.style.display = "block";
    
}
btnAssignment1.onclick = function () {
    Assignment1.style.display = "block";
    startpageContent.style.display = "none";
    assigmentSwitching.style.dislpay = "none";

}
var obj, xmlhttp, myObj, txt = "";
var xhr = new XMLHttpRequest();
xhr.open('GET', "https://ipinfo.io/json", true);
xhr.send();

xhr.addEventListener("readystatechange", proccessRequest, false);

function proccessRequest(e) {
    if (xhr.readyState == 4 && xhr.status == 200) {
        var myObj = JSON.parse(xhr.responseText);
        //   document.getElementById("demo").innerHTML = obj.ip + ", " + obj.country + ", " + obj.org; 
        myObj = JSON.parse(this.responseText);
        txt += "<table border='3'>"
        {
            txt += "<tr><th>Ip</th>" + "<th>Country</th>" + "<th>Org</th> </tr>" + "<tr><td>" + myObj.ip + "</td>" + "<td>" + myObj.country + "</td>" + "<td>" + myObj.org + "</td></tr>"
        }

        document.getElementById("demo").innerHTML = txt;
    }
}

// Assignment2
var Assignment2 = document.getElementById('myAssignment2');
var btnAssignment2 = document.getElementById("myBtnAssignment2");
var span = document.getElementsByClassName("close2")[0];
span.onclick = function () {
    Assignment2.style.display = "none";
    startpageContent.style.display = "block";
}
btnAssignment2.onclick = function () {
    Assignment2.style.display = "block";
    startpageContent.style.display = "none";
}

// Assignment3
var Assignment3 = document.getElementById('myAssignment3');
var btnAssignment3 = document.getElementById("myBtnAssignment3");
var span = document.getElementsByClassName("close3")[0];

span.onclick = function () {
    Assignment3.style.display = "none";
    startpageContent.style.display = "block";
}
btnAssignment3.onclick = function () {
    Assignment3.style.display = "block";
    startpageContent.style.display = "none";
}

// Assignment4
var Assignment4 = document.getElementById('myAssignment4');
var btnAssignment4 = document.getElementById("myBtnAssignment4");
var span = document.getElementsByClassName("close4")[0];
span.onclick = function () {
    Assignment4.style.display = "none";
    startpageContent.style.display = "block";
}
btnAssignment4.onclick = function () {
    Assignment4.style.display = "block";
    startpageContent.style.display = "none";
}
var Assignment4Background = document.getElementById("Assignment4Background");

function clickOption(value) {
    Assignment4Background.style.backgroundColor = value;
    Assignment4Background.innerHTML = "You have selected the " + value;
}

//  Assignment5
var Assignment5 = document.getElementById('myAssignment5');
var btnAssignment5 = document.getElementById("myBtnAssignment5");
var span = document.getElementsByClassName("close5")[0];
span.onclick = function () {
    Assignment5.style.display = "none";
    startpageContent.style.display = "block";
}
btnAssignment5.onclick = function () {
    Assignment5.style.display = "block";
    startpageContent.style.display = "none";
}

var img = document.getElementById("image");

var text = document.getElementById("text");

document.getElementById("imgList").onchange = function (e) {
    var select = e.target;
    img.src = select.options[select.selectedIndex].value;
    text.innerHTML = select.options[select.selectedIndex].dataset.description;
    return false;
}
