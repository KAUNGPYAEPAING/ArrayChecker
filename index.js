
var guestlist = ["Kaung Pyae","Oakkar","Hnin Hnin", "Kyaw Kyaw"];

var name = prompt("What is your name?");

if (guestlist.includes(name)){
    alert("Welcome " + name);
}else {
    alert("Get the hell out of here " + name);
}
