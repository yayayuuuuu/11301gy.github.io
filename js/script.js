document.addEventListener("DOMContentLoaded", () => {
    const elements = [
      document.getElementById("homefish1"),
      document.getElementById("homefish2"),
      document.getElementById("homefish3"),
      document.getElementById("homefish4"),
      document.getElementById("homefish5"),
    ];
  
    const handleScroll = () => {
      elements.forEach(element => {
        if (!element) return; // 確保元素存在
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;
  
        // 當元素進入視窗範圍
        if (rect.top < windowHeight && rect.bottom > 0) {
          element.style.opacity = "1";
          element.style.transform = "translateX(0)";
          element.style.transition = "all 0.5s ease-out";
        } else {
          element.style.opacity = "0";
          element.style.transform = "translateX(100%)";
        }
      });
    };
  
    // 初始化樣式
    elements.forEach(element => {
      if (element) {
        element.style.opacity = "0";
        element.style.transform = "translateX(100%)";
      }
    });
  
    // 初始化檢查和滾動事件
    window.addEventListener("scroll", handleScroll);
    handleScroll();
  });


  
  // 讓 navbar 在滑動到頂部時固定
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('fixed-top');
    } else {
      navbar.classList.remove('fixed-top');
    }
  });
  
  