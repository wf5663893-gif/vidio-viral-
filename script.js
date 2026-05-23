// Auto buka direct link sekali klik
let opened = false;

window.addEventListener('click', () => {
  if (!opened) {
    opened = true;
    window.open('https://your-direct-link.com', '_blank');
  }
});
