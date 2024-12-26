// 讓 navbar 在滑動到頂部時固定
function pieAnimation(){
  let pie_el = document.querySelectorAll(".pie:not(.ani)");
  pie_el.forEach((item, i) => {
    //console.log( item.getBoundingClientRect().top - window.innerHeight );
    // d: 螢幕的底部 到 圓圈的頂部 的距離
    let d = item.getBoundingClientRect().top - window.innerHeight;
    if(d < 0){
      item.classList.add("ani");
    }
  });
}

window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('fixed-top');
    } else {
      navbar.classList.remove('fixed-top');
    }

    pieAnimation();
  });

  