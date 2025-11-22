// Dropdown click toggle for 'Jump at'
document.addEventListener('DOMContentLoaded', function() {
  var jumpLink = document.getElementById('jump-at-link');
  var jumpMenu = document.getElementById('jump-at-menu');
  if (jumpLink && jumpMenu) {
    jumpLink.addEventListener('click', function(e) {
      e.preventDefault();
      jumpMenu.style.display = (jumpMenu.style.display === 'block') ? 'none' : 'block';
    });
    // Optional: close dropdown when clicking outside
    document.addEventListener('click', function(e) {
      if (!jumpMenu.contains(e.target) && e.target !== jumpLink) {
        jumpMenu.style.display = 'none';
      }
    });
  }
});
