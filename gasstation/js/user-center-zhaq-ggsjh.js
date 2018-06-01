$(function () {
    // 手机号中间4位换成星号
    var $telNum = $('#tel_num')
    var telNumStr = $telNum.text().replace(/(\d{3})\d{4}(\d{4})/, '$1****$2')
    $telNum.text(telNumStr)

    // 监听验证码输入框事件
    $('#yz_code').on('input', function () {
        var yz_code = $.trim($('#yz_code').val())
        if (yz_code.length === 6) {
            $('#sub_btn').addClass('active')
            $('#sub_btn').removeAttr('disabled')
        } else {
            $('#sub_btn').removeClass('active')
            $('#sub_btn').attr('disabled', 'disabled')
        }
    })
    // 点击提交按钮
    $('#sub_btn').on('click', function () {
        // 获得验证码并提交
        var yzCode = $.trim($('#yz_code').val())
        $('.mask').show()
        // 模拟网络请求  $.ajax()  .....................
        setTimeout(function () {
            location.href = 'user-center-zhaq-ggsjh-xgsjh.html'
        },2000)
    })

    var timer = null
    var DELAYTIME = 60
    var delayTime = DELAYTIME
    var $yzBtn = $('.yz-btn')
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
            }
        }, 1000)
    })
})