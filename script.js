document.getElementById('resultForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const form = this;
  form.style.opacity = '0.6';
  form.querySelector('button').textContent = 'Loading...';
  setTimeout(() => {
    form.classList.add('hidden');
    document.getElementById('errorScreen').classList.remove('hidden');
  }, 800);
});
