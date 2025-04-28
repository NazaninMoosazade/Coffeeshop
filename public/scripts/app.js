// موقع لود صفحه: اگر تم ذخیره شده بود، اعمال کن
if (localStorage.theme === "dark") {
    document.documentElement.classList.add("dark");
  } else if (localStorage.theme === "light") {
    document.documentElement.classList.remove("dark");
  }
  
  // همه دکمه های تغییر تم رو انتخاب کن
  const toggleThemeBtns = document.querySelectorAll(".toggle-theme");
  
  toggleThemeBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      }
    });
  });
  

  const menuToggle = document.getElementById('menu-toggle');
  const menuClose = document.getElementById('menu-close');
  const mobileMenu = document.getElementById('mobile-menu');
  const overlay = document.getElementById('overlay');

  menuToggle.addEventListener('click', () => {
    mobileMenu.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });

  menuClose.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    overlay.classList.add('hidden');
  });

  overlay.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    overlay.classList.add('hidden');
  });  

  const cartToggle = document.getElementById('cart-toggle');
  const cartClose = document.getElementById('cart-close');
  const cartMenu = document.getElementById('cart-menu');

  cartToggle.addEventListener('click', () => {
    cartMenu.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });

  cartClose.addEventListener('click', () => {
    cartMenu.classList.add('hidden');
    overlay.classList.add('hidden');
  });

  overlay.addEventListener('click', () => {
    cartMenu.classList.add('hidden');
    overlay.classList.add('hidden');
  });