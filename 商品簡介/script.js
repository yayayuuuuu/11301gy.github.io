window.addEventListener('scroll', function() {
    var picturee1 = document.getElementById('picturee1');
    var p1 = document.getElementById('p1');
    var oceanwords = document.getElementById('oceanwords');
    var threadsword = document.getElementById('threadsword');
    var lineeeee = document.getElementById('lineeeee');
    var rect = picturee1.getBoundingClientRect();
    
    // 檢查 #picturee1 是否進入視窗範圍
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        // 當 picturee1 進入視窗時，設置圖片為不透明
        p1.style.opacity = 1;
        lineeeee.style.opacity = 1;
      
        oceanwords.style.transform = 'translateX(0)';
        threadsword.style.transform = 'translateX(0)';
    } else {
        // 如果 picturee1 離開視窗，恢復圖片透明
        p1.style.opacity = 0;
        lineeeee.style.opacity = 1;
        oceanwords.style.transform = 'translateX(-100%)';
        threadsword.style.transform = 'translateX(100%)';
    }
});
