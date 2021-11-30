let btn = document.getElementById('btn');
let output = document.getElementById('output');

let quotes = [
    '"You are the shuckiest shuck faced shuck in the world!" ― James Dashner, The Maze Runner',
    '“Her name badge read: Hello! My name is DIE, DEMIGOD SCUM!” ― Rick Riordan, The Son of Neptune',               
    '“Insane means fewer cameras!” ― Ally Carter, Only the Good Spy Young',
    '“Never ask an elf for help; they might decide your better off dead, eh?” ― Christopher Paolini, Eldest',
    '“What is my age again?” ― Blink-182',
    '“Act first, explain later.” ― Dan Brown, Digital Fortress',
  ];

btn.addEventListener('click', function(){
   var randomQuotes = quotes[Math.floor(Math.random() * quotes.length)]
    output.innerHTML = randomQuotes;
})