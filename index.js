// Your code goes here

document.addEventListener('DOMContentLoaded', function() {
    let text_p = document.getElementById('text');
    text_p.innerHTML = "This is really cool!";
});

console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
  );