const themeToggle = document.getElementById('change-theme');
const body = document.body;

themeToggle.addEventListener('change', () => {
    if (themeToggle.checked) {
        body.classList.add('dark-theme');
        body.classList.remove('light-theme');
    } else {
        body.classList.add('light-theme');
        body.classList.remove('dark-theme');
    }
})

const themeToggles = document.getElementById('change-theme');
const bodyy = document.body;
const sunIcon = document.getElementById('sun-icon');
const moonIcon = document.getElementById('moon-icon');

themeToggle.addEventListener('change', () => {
  if (themeToggle.checked) {
    body.classList.add('dark-theme');
    body.classList.remove('light-theme');
    sunIcon.style.display = 'none';
    moonIcon.style.display = 'inline';
  } else {
    body.classList.add('light-theme');
    body.classList.remove('dark-theme');
    sunIcon.style.display = 'inline';
    moonIcon.style.display = 'none';
  }
});






  
  
  