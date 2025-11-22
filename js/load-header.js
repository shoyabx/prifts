// load-header.js — dynamically fetch header.html and insert into #header
window.addEventListener('DOMContentLoaded', ()=>{
  const placeholder = document.getElementById('header');
  if(!placeholder) return;
  // determine base path — if the page is in /pages/ we need ../
  const pathPrefix = window.location.pathname.includes('/pages/') ? '../' : '';
  fetch(pathPrefix + 'header.html')
    .then(r=> r.text())
    .then(html=>{
      placeholder.innerHTML = html;
      // rewrite relative paths inside the injected header so links and images resolve
      const injected = placeholder;
      if(pathPrefix){
        // update anchors
        injected.querySelectorAll('a').forEach(a=>{
          const href = a.getAttribute('href');
          if(!href) return;
          // leave absolute URLs and hashes alone
          if(href.startsWith('http') || href.startsWith('#') || href.startsWith('mailto:')) return;
          // if link already starts with '/' treat as root-relative
          if(href.startsWith('/')) return;
          a.setAttribute('href', pathPrefix + href);
        });
        // update images
        injected.querySelectorAll('img').forEach(img=>{
          const src = img.getAttribute('src');
          if(!src) return;
          if(src.startsWith('http') || src.startsWith('/')) return;
          img.setAttribute('src', pathPrefix + src);
        });
      }

      // inject component CSS (always use correct prefix)
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = pathPrefix + 'css/header-component.css';
      document.head.appendChild(link);


  // initialize behavior from site.js if present
  const s = document.createElement('script');
  s.src = pathPrefix + 'js/site.js';
  document.body.appendChild(s);

  // also load header.js for dropdown click logic
  const h = document.createElement('script');
  h.src = pathPrefix + 'js/header.js';
  document.body.appendChild(h);

      // accessibility: ensure Know Us dialog toggles are wired after site.js loads
    })
    .catch(err=>{ console.error('Failed to load header', err) });
});
