$(document).ready(function () {
    const elements = [
      { id: "#sustainability", animation: "animate__bounce" },
      { id: "#createnew", animation: "animate__bounce" },
      { id: "#socialre", animation: "animate__bounce" },
    ];
  
    $(window).on("scroll", function () {
      elements.forEach((element, index) => {
        const $el = $(element.id);
        const elTop = $el.offset().top;
        const elBottom = elTop + $el.outerHeight();
        const scrollTop = $(window).scrollTop();
        const windowBottom = scrollTop + $(window).height();
  
        // 檢查是否滑到區域
        if (scrollTop < elBottom && windowBottom > elTop) {
          if (!$el.hasClass("animate__animated")) {
            setTimeout(() => {
              $el.addClass(`animate__animated ${element.animation}`);
              // 動畫執行後移除類別，避免重複觸發
            //   setTimeout(() => {
            //     $el.removeClass(`animate__animated ${element.animation}`);
            //   }, 1000); // 1 秒後移除動畫類別
            }, index * 300); // 每個項目延遲 300ms 依序觸發
          }
        }
      });
    });
  });
  
  