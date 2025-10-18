// Shared site JS: search (basic filter), Know Us dialog, cart placeholder
document.addEventListener('DOMContentLoaded', ()=>{
  // Know Us dialog
  const knowButtons = document.querySelectorAll('.know-us-btn');
  const dialog = document.getElementById('site-knowus');
  if(knowButtons && dialog){
    knowButtons.forEach(btn=> btn.addEventListener('click', e=>{e.preventDefault(); dialog.classList.add('open')}));
    dialog.querySelector('.close').addEventListener('click', ()=> dialog.classList.remove('open'));
    dialog.addEventListener('click', e=>{ if(e.target===dialog) dialog.classList.remove('open')});
  }
  // Search (page-level items with .product-item and h3 name)
  const search = document.querySelector('.search-input');
  if(search){
    search.addEventListener('input', e=>{
      const q = e.target.value.toLowerCase();
      document.querySelectorAll('.product-item').forEach(it=>{
        const t = (it.querySelector('h3')?.textContent||'').toLowerCase();
        it.style.display = t.includes(q)?'block':'none';
      })
    })
  }
})
