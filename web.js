////Help Page
//clear msg
const clear = document.getElementById('clear-btn');
const msg = document.getElementById('msg');
clear.addEventListener('click', function (e) {
  e.preventDefault();
  msg.value = '';
});

