<script>
function toggleMenu() 
  const navbar = document.querySelector('.navbar');
  navbar.classList.toggle('active');

</script>

const toggle = document.querySelector('.menu-toggle');
const navbar = document.querySelector('.navbar');

toggle.addEventListener('click', () => {
  navbar.classList.toggle('active');
});
