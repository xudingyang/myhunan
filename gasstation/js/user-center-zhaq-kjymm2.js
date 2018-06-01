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
            $('.mask').hide()
            $('.keyboard-modal').show()
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
            console.log(123);
        }, 1000)
    })

    var pwdArr = []  // 存储密码的数组
    var pwdStr = ''  // 第一次输入的密码
    var pwdStr2 = '' // 第二次输入的密码
    var firstFlag = true  // 默认是第一次输入密码
    var pwdTabs = $('.pwd-con .pwd')
    var timer2 = null
    $('.tip-tx').text('请输入密码')
    // 数字 按钮
    $('.keyboard-container .num').on('click', function () {
        clearInterval(timer)
        if (pwdArr.length < 6) {
            var dataNum = $(this).data('num')
            if (typeof dataNum === 'number') {
                pwdArr.push(dataNum)
            }
        } else {
            return
        }
        for (var i = 0; i < pwdArr.length; i++) {
            pwdTabs.eq(i).text('●')
        }
        console.log(pwdArr);
        timer2 = setTimeout(function () {
            if (pwdArr.length === 6) {
                if (firstFlag) {
                    pwdStr = pwdArr.join('')
                    // 重置数据
                    pwdArr.length = 0
                    firstFlag = false
                    pwdTabs.text('')
                    $('.tip-tx').text('请再次输入密码')
                } else {
                    pwdStr2 = pwdArr.join('')
                    // 发送请求，提交密码
                    if (pwdStr2 !== pwdStr) {
                        alert('两次密码不一致，请重新输入')
                        pwdArr.length = 0
                        firstFlag = true
                        pwdTabs.text('')
                        $('.tip-tx').text('请输入密码')
                    } else {
                        // 两次密码输入一致
                        $('.mask').show()
                        alert(pwdStr2)
                        // 模拟网络请求  .....................
                        setTimeout(function () {
                            location.href = 'user-center-zhaq-kjymm-success.html'
                        },2000)
                    }
                }
            }
        },1000)
    })
    // 删除 按钮  ●
    $('.js-del').on('click', function () {
        if (pwdArr.length < 1) {
            return
        }
        pwdArr.pop()
        for (var i = 0; i < pwdArr.length; i++) {
            pwdTabs.eq(i).text('●')
        }
        for (var j = pwdArr.length; j < 6; j++) {
            pwdTabs.eq(j).text('')
        }
    })
})