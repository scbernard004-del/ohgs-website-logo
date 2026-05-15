
const loader=document.querySelector('.loader');
window.addEventListener('load',()=>{setTimeout(()=>loader?.classList.add('hide'),900);});
document.querySelectorAll('a[href$=".html"]').forEach(link=>{link.addEventListener('click',e=>{if(link.target==='_blank')return;e.preventDefault();if(loader){loader.classList.remove('hide');}setTimeout(()=>{window.location.href=link.href;},650);});});
const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('show');}});},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
function toggleMenu(){document.getElementById('navMenu').classList.toggle('open');}
let lang=localStorage.getItem('ohgs-lang')||'en';
function applyLang(){document.querySelectorAll('[data-en]').forEach(el=>{el.textContent=el.getAttribute('data-'+lang)||el.getAttribute('data-en');});}
function toggleLang(){lang=lang==='en'?'sw':'en';localStorage.setItem('ohgs-lang',lang);applyLang();}
applyLang();
function toggleTheme(){document.body.classList.toggle('light');}
function submitWhatsApp(e){e.preventDefault();const name=document.querySelector('#name')?.value||'';const phone=document.querySelector('#phone')?.value||'';const product=document.querySelector('#product')?.value||'';const msg=document.querySelector('#message')?.value||'';const text=`Hello OHGS, my name is ${name}. Phone: ${phone}. Product/Service: ${product}. Message: ${msg}`;window.open(`https://wa.me/255689528193?text=${encodeURIComponent(text)}`,'_blank');}

// Final dark / light mode memory
function applyTheme(){
  const savedTheme = localStorage.getItem('ohgs-theme') || 'dark';
  document.body.classList.toggle('light', savedTheme === 'light');
  const themeBtn = document.getElementById('themeToggle');
  if(themeBtn){
    themeBtn.textContent = savedTheme === 'light' ? '🌙' : '☀️';
  }
}

function switchTheme(){
  const isLight = document.body.classList.contains('light');
  localStorage.setItem('ohgs-theme', isLight ? 'dark' : 'light');
  applyTheme();
}

applyTheme();
