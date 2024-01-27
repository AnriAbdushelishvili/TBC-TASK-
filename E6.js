function burgeri() {
    var navigacia = document.getElementById("myNavbar");
    if (navigacia.className === "navbar") {
        navigacia.className = navigacia.className + " responsive";
    } else {
        navigacia.className = "navbar";
    }
  }
  var counter = 1;	

setInterval(function(){
document.getElementById('radio' + counter).checked = true;
counter++;
if(counter > 3){
counter =1;
}
}, 3500); 
document.addEventListener('DOMContentLoaded', () => {
  const dropdowns = document.querySelectorAll('.dropdown');
  dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelectorAll('.menu-item');
    const selected = dropdown.querySelector('.selected');

    select.addEventListener('click', () => {
      select.classList.toggle('select-clicked');
      caret.classList.toggle('caret-rotate');
      menu.classList.toggle('menu-open');
    });

    options.forEach(option => {
      option.addEventListener('click', () => {
        selected.innerText = option.innerText;
        select.classList.remove('select-clicked');
        caret.classList.remove('caret-rotate');
        menu.classList.remove('menu-open');
        options.forEach(item => {
          item.classList.remove('active');
        });
        option.classList.add('active');
      });
    });

    document.addEventListener('click', (event) => {
      if (!dropdown.contains(event.target)) {
        select.classList.remove('select-clicked');
        caret.classList.remove('caret-rotate');
        menu.classList.remove('menu-open');
      }
    });
  });
});

