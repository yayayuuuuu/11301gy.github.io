window.addEventListener('scroll', function () {
  // 元素選取
  var backg = document.getElementById('backg');
  var backg2 = document.getElementById('backg2');
  // var p1 = document.getElementById('p1');
  var oceanwords = document.getElementById('oceanwords');
  var threadsword = document.getElementById('threadsword');
  var lineeeee = document.getElementById('lineeeee');
  var product21 = document.getElementById('product21');
  var product22 = document.getElementById('product22');
  // const fish32 = document.getElementById('fish32');
  // const fish33 = document.getElementById('fish33');
  // const fish34 = document.getElementById('fish34');
  const designword = document.getElementById('designword');
  const and = document.getElementById('and');
  const awarenessword = document.getElementById('awarenessword');
  
  // 取得 #backg 和 #backg2 的視窗位置
  var rectBackg = backg.getBoundingClientRect();
  var rectBackg2 = backg2.getBoundingClientRect();
  const rectDesignword = designword.getBoundingClientRect(); // 獲取 designword 的位置
  const rectAnd = and.getBoundingClientRect();
  const rectAwarenessword = awarenessword.getBoundingClientRect();

  // 檢查 #backg 是否進入視窗範圍
  if (rectBackg.top <= window.innerHeight && rectBackg.bottom >= 0) {
    // p1.style.opacity = 1;
    lineeeee.style.opacity = 1;
    oceanwords.style.transform = 'translateX(0)';
    threadsword.style.transform = 'translateX(0)';
  } else {
    // p1.style.opacity = 0;
    lineeeee.style.opacity = 1;
    oceanwords.style.transform = 'translateX(-100%)';
    threadsword.style.transform = 'translateX(100%)';
  }

  // 檢查 #backg2 是否進入視窗範圍
  if (rectBackg2.top <= window.innerHeight && rectBackg2.bottom >= 0) {
    product21.style.opacity = 1;
    product22.style.opacity = 1;
  } else {
    product21.style.opacity = 0;
    product22.style.opacity = 0;
  }

  // 當 designword 進入視窗時觸發動畫
  if (rectDesignword.top >= 0 && rectDesignword.bottom <= window.innerHeight) {
    designword.classList.add('animate__bounceIn'); // 添加動畫
    designword.style.opacity = 1; // 顯示元素

    // 當動畫結束後移除動畫類名（以便未來可以重新觸發）
    // designword.addEventListener('animationend', () => {
    //   designword.classList.remove('animate__bounceIn');
    // }, { once: true });
  }
  if (rectAnd.top >= 0 && rectAnd.bottom <= window.innerHeight) {
    and.classList.add('animate__bounceIn'); // 添加動畫
    and.style.opacity = 1; // 顯示元素

    // 當動畫結束後移除動畫類名（以便未來可以重新觸發）
    // designword.addEventListener('animationend', () => {
    //   designword.classList.remove('animate__bounceIn');
    // }, { once: true });
  }
  if (rectAwarenessword.top >= 0 && rectAwarenessword.bottom <= window.innerHeight) {
    awarenessword.classList.add('animate__bounceIn'); // 添加動畫
    awarenessword.style.opacity = 1; // 顯示元素

    // 當動畫結束後移除動畫類名（以便未來可以重新觸發）
    // awarenessword.addEventListener('animationend', () => {
    //   awarenessword.classList.remove('animate__bounceIn');
    // }, { once: true });
  }

  // 檢查 fish32 是否進入視窗
  // if (isElementInView(fish32)) {
  //   fish32.classList.add('in-view');
  //   fish32.classList.remove('out-of-view');
  // } else {
  //   fish32.classList.add('out-of-view');
  //   fish32.classList.remove('in-view');
  // }

  // 檢查 fish33 是否進入視窗
  // if (isElementInView(fish33)) {
  //   fish33.classList.add('in-view');
  //   fish33.classList.remove('out-of-view');
  // } else {
  //   fish33.classList.add('out-of-view');
  //   fish33.classList.remove('in-view');
  // }

  // 檢查 fish34 是否進入視窗
//   if (isElementInView(fish34)) {
//     fish34.classList.add('in-view');
//     fish34.classList.remove('out-of-view');
//   } else {
//     fish34.classList.add('out-of-view');
//     fish34.classList.remove('in-view');
//   }
});

// 判斷元素是否在視窗內
function isElementInView(el) {
const rect = el.getBoundingClientRect();
return rect.top >= 0 && rect.bottom <= window.innerHeight;
}
  
  document.addEventListener("DOMContentLoaded", () => {
 
      // 第二個 IntersectionObserver 相關的變數和邏輯 (處理 shrimps)
    const backg = document.getElementById("backg");
    const shrimps = document.getElementById("shrimps");
  
    const shrimpsObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          shrimps.classList.add("show");
          shrimpsObserver.unobserve(backg); // 動畫執行一次後停止監聽
        }
      });
    }, { threshold: 0.1 });
  
    shrimpsObserver.observe(backg);
  
    // 第一個 IntersectionObserver 相關的變數和邏輯 (處理 ecofriendly)
    const backg2 = document.getElementById("backg2");
    const ecofriendly = [
      "ee-2", "cc", "oo", "dishh", "ff", 
      "rr", "ii", "ee", "nn", "dd", "ll", "yy"
    ];
  
    const ecofriendlyObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          ecofriendly.forEach((id, index) => {
            setTimeout(() => {
              const element = document.getElementById(id);
              if (element) {
                element.classList.add("show");
              }
            }, index * 200);
          });
          ecofriendlyObserver.unobserve(backg2);
        }
      });
    }, { threshold: 0.05 });
  
    ecofriendlyObserver.observe(backg2);
  
    // 監聽 trash2 的邏輯
    const trash2 = document.getElementById("trash2");
    const productword22 = document.getElementById("productword22");
    const paper = document.getElementById("paper");
  
    const trash2observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          productword22.classList.add("show");
          paper.classList.add("show");
          trash2observer.unobserve(trash2);
        }
      });
    }, { threshold: 0.1 });
  
    trash2observer.observe(trash2);
  
    // 添加監聽 product31~product43 的邏輯
    const productElements = [
      "p1","product31", "product32", "product33", 
      "product41", "product42", "product43"
    ];
  
    const productObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const target = entry.target;
        if (entry.isIntersecting) {
          target.classList.add("fade-in");
        } else {
          target.classList.remove("fade-in");
        }
      });
    }, { threshold: 0.1 });
  
    // 觀察所有的產品元素
    productElements.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        productObserver.observe(element);
      }
    });

    const fish32 = document.getElementById("fish32");
    const fish33 = document.getElementById("fish33");
    const fish34 = document.getElementById("fish34");

    // 設置動畫樣式
    fish32.style.animation = "move-left 10s linear infinite";
    fish32.style.animationDelay = "0s";

    fish33.style.animation = "move-left 10s  linear infinite";
    fish33.style.animationDelay = "1s";

    fish34.style.animation = "move-left 10s linear infinite";
    fish34.style.animationDelay = "2s";

  });
  
  
  
  


  
