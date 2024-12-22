window.addEventListener('scroll', function() {
    var picturee1 = document.getElementById('picturee1');
    var p1 = document.getElementById('p1');
    var rect = picturee1.getBoundingClientRect();
    
    // 檢查 #picturee1 是否進入視窗範圍
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        // 當 picturee1 進入視窗時，設置圖片為不透明
        p1.style.opacity = 1;  
    } else {
        // 如果 picturee1 離開視窗，恢復圖片透明
        p1.style.opacity = 0;  
    }
});

