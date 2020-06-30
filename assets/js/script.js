
const menuicon = document.querySelector('.toggle-icon');

menuicon.addEventListener('click', function(){
  const nav = document.querySelector('.nav');
  nav.classList.toggle('navbar');
});
