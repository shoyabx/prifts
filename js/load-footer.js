// load-footer.js — dynamically fetch footer.html and insert into #footer
window.addEventListener('DOMContentLoaded', ()=>{
  const placeholder = document.getElementById('footer');
  if(!placeholder) return;
  const pathPrefix = window.location.pathname.includes('/pages/') ? '../' : '';
  fetch(pathPrefix + 'footer.html')
    .then(r=> r.text())
    .then(html=>{
      placeholder.innerHTML = html;
      // append footer CSS
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = pathPrefix + 'css/footer-component.css';
      document.head.appendChild(link);
    })
    .catch(err=> console.error('Failed to load footer', err));
});
