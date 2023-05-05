(function() {
    'use strict';
    const timerId = setInterval(function() {
        try {
            var element = document.getElementById("watermark-wrapper");
            if (element) { // 检查元素是否存在
                element.style.display = "none";
                clearInterval(timerId); // 成功就停止定时器
            }
            var el = document.getElementsByClassName('date-tip');
             if (el){
                 el[0].style.display='none'
                 clearInterval(timerId); // 成功就停止定时器
             }
        } catch (error) {
            console.error(error);
        }
    }, 100);

    // 阻止开发者屏蔽控制台
    Object.defineProperty(window, "console", {
        value: console,
        writable: false,
        configurable: false
    });
})();
