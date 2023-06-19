var date = new Date();
var hour = date.getHours();
var greeting;

if (hour < 12) {
  greeting = 'Good morning';
} else if (hour < 18) {
  greeting = 'Good afternoon';
} else {
  greeting = 'Good evening';
}

document.getElementById('greeting').textContent = greeting + '. I am Esrom kidane, a web developer. Welocome to my portofilio website';