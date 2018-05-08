$(function () {

    // 手机输入框
    var $telInput = $('#tel_num')
    // 验证码输入框
    var $yzInput = $('#yz_code')
    // 验证码按钮
    var $yzBtn = $('.yz-btn')
    // 提交按钮
    var $subBtn = $('#sub_btn')
    // 监听手机输入框事件
    $telInput.on('input', function () {
        var tel_num = $.trim($telInput.val())
        if (tel_num.length === 11) {
            if ($yzBtn.html().indexOf('秒后重试') < 0) {
                $yzBtn.addClass('active').removeClass('disable')
                $yzBtn.removeAttr('disabled')
            }
            if ($.trim($yzInput.val()).length === 6) {
                $subBtn.addClass('active')
                $subBtn.removeAttr('disabled')
            } else {
                $subBtn.removeClass('active')
                $subBtn.attr('disabled', 'disabled')
            }
        } else {
            $yzBtn.attr('disabled', 'disabled')
            $yzBtn.addClass('disable').removeClass('active')
            $subBtn.removeClass('active')
            $subBtn.attr('disabled', 'disabled')
        }
    })
    // 监听验证码输入框事件
    $yzInput.on('input', function () {
        var yz_code = $.trim($yzInput.val())
        if (yz_code.length === 6 && $.trim($telInput.val()).length === 11) {
            $subBtn.addClass('active')
            $subBtn.removeAttr('disabled')
        } else {
            $subBtn.removeClass('active')
            $subBtn.attr('disabled', 'disabled')
        }
    })
    // 点击下一步按钮
    $subBtn.on('click', function () {
        // 获得验证码并提交
        var yzCode = $.trim($yzInput.val())
        $('.mask').show()
        // 模拟网络请求  $.ajax()  .....................
        setTimeout(function () {
            location.href = 'user-center.html'
        }, 2000)
    })
    // 验证按钮的倒计时
    var timer = null
    var DELAYTIME = 6
    var delayTime = DELAYTIME
    $yzBtn.on('click', function () {
        $yzBtn.html(delayTime + '秒后重试')
        $yzBtn.addClass('disable')
        $yzBtn.attr('disabled', 'disabled')
        // 在这里发送验证码请求
        // $.ajax()  .......。。。。。。。。。。。。。。。。。。
        timer = setInterval(function () {
            delayTime--
            $yzBtn.html(delayTime + '秒后重试')
            if (delayTime < 1) {
                clearInterval(timer)
                $yzBtn.attr('disabled', 'disabled')
                $yzBtn.removeClass('disable')
                $yzBtn.text('获取验证码')
                $yzBtn.removeAttr('disabled')
                delayTime = DELAYTIME
                if ($telInput.val().length === 11) {
                    $yzBtn.addClass('active').removeClass('disable')
                    $yzBtn.removeAttr('disabled')
                }
            }
        }, 1000)
    })
})