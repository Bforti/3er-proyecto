var who = ['The dog', 'My grandma', 'His turtle', 'My bird'];
var action = ['ate', 'peed', 'crushed', 'broke'];
var what = ['my homework', 'the keys', 'the car'];
var when = ['before the class', 'right on time', 'when I finished', 'during my lunch', 'while I was praying'];
function onload(){
    var excusa=who[Math.floor(Math.random()* who.length)]+" "+action[Math.floor(Math.random()*action.length)]+""+
    what[Math.floor(Math.random()*what.length)]+""+when[Math.floor(Math.random()*when.length)];
    document.getElementById("excusa").innerHTML=excusa;




}
onload();