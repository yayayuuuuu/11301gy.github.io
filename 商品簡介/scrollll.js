$(document).ready(function () {
    // GSAP ScrollTrigger 插件已經註冊
    gsap.registerPlugin(ScrollTrigger);

    // 創建搖晃動畫
    function startShaking(element) {
        gsap.to(element, {
            transform: "translateY(0)", // 從下方滑入
            animation: "shake 1s ease-in-out infinite", // 開始搖晃
            duration: 1
        });
    }

    function stopShaking(element) {
        gsap.to(element, {
            transform: "translateY(100%)", // 從視窗下方移開
            animation: "none", // 停止搖晃
            duration: 1
        });
    }

    // 使用 GSAP ScrollTrigger 為每個元素啟動搖晃動畫
    gsap.utils.toArray("#fish1, #fish2, #fish3").forEach(function(fish) {
        ScrollTrigger.create({
            trigger: fish,
            start: "top 100%", // 當元素進入視窗時觸發
            end: "bottom top", // 當元素完全進入視窗
            onEnter: function() {
                startShaking(fish);  // 啟動搖晃
            },
            onLeave: function() {
                stopShaking(fish);  // 停止搖晃
            },
            onEnterBack: function() {
                startShaking(fish);  // 進入視窗時再次啟動搖晃
            },
            onLeaveBack: function() {
                stopShaking(fish);  // 離開視窗時再次停止搖晃
            }
        });
    });
});