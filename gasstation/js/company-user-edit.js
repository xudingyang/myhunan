$(function () {
    // 验证按钮的倒计时
    var timer = null
    var DELAYTIME = 6
    var delayTime = DELAYTIME
    var $yzBtn = $('.get-btn')
    var $tipBtn = $('.tip-btn')
    $yzBtn.on('click',function () {
        $yzBtn.hide()
        $tipBtn.show().text(delayTime + '秒后重发')
        timer = setInterval(function () {
            delayTime--
            $tipBtn.text(delayTime + '秒后重试')
            if (delayTime < 1) {
                clearInterval(timer)
                $yzBtn.show()
                $tipBtn.hide()
                delayTime = DELAYTIME
            }
        },1000)
    })
})