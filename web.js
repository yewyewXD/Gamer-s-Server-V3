////Help Page
//clear msg
const clear = document.getElementById('clear-btn');
const msg = document.getElementById('msg');
try {
  clear.addEventListener('click', function (e) {
    e.preventDefault();
    msg.value = '';
  });
} catch (err) { }

//submit
const name = document.getElementById('fname');
const email = document.getElementById('email');
const nameA = document.getElementById('name-alert');
const emailA = document.getElementById('email-alert');
const submit = document.getElementById('submit-btn');
const emailT = document.getElementById('thank-email');


try {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    if (name.value == '' && email.value.includes("@", 1) === false) {
      nameA.style.display = 'block';
      emailA.style.display = 'block';
      setTimeout(() => (nameA.style.display = 'none', emailA.style.display = 'none'), 3000);
    } else if (name.value == '') {
      nameA.style.display = 'block';
      setTimeout(() => (nameA.style.display = 'none'), 3000);
    } else if (email.value.includes("@", 1) === false) {
      emailA.style.display = 'block';
      setTimeout(() => (nameA.style.display = 'none', emailA.style.display = 'none'), 3000);
    } else {
      localStorage.setItem("EMAIL", `"${email.value}"`);
      location.replace("thank.html");
    }
  })

}
catch (err) { }

////Thank Page
try { emailT.innerHTML = localStorage.getItem("EMAIL"); }
catch (err) { }


