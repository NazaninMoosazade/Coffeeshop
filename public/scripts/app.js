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
  