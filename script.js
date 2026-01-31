(function(){
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  const btn = document.getElementById('menuBtn');
  const nav = document.getElementById('mobileNav');
  if (!btn || !nav) return;

  const toggle = () => {
    const isOpen = !nav.hasAttribute('hidden');
    if (isOpen){
      nav.setAttribute('hidden','');
      btn.setAttribute('aria-expanded','false');
      btn.textContent = '☰';
    } else {
      nav.removeAttribute('hidden');
      btn.setAttribute('aria-expanded','true');
      btn.textContent = '✕';
    }
  };

  btn.addEventListener('click', toggle);
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    if (!nav.hasAttribute('hidden')) toggle();
  }));
})();
