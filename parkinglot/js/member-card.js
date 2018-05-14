$(function () {

    // 是否注册了
    var hadRegistered = true
    // 是否激活会员了
    var hadActived = true

    // 如果没注册，直接跳到注册页面
    if (!hadRegistered) {
        location.href = 'user-register.html'
    } else {
        // 如果没激活会员，那就激活会员
        if (!hadActived) {
            $('.active-modal').show()
        } else {
            // 点击默认车牌  查看汽车列表
            $('#mrcp').click(function () {
                location.href = 'car-list.html'
            })
            // 点击充值按钮
            $('#chongzhi_btn').click(function () {
                location.href = 'chong-zhi.html'
            })
            // 查看会员卡交易记录
            $('#jyjl').on('click', function () {
                location.href = 'member-card-record.html'
            })
        }
    }
    // 点击关闭按钮
    $('#close_img').on('click',function () {
        $('.active-modal').hide()
    })
    // 点击激活会员卡
    $('.modal-btn').on('click',function () {
        $('.mask').show()
        setTimeout(function () {
            $('.mask').hide()
            $('.active-modal').hide()
        },2000)
    })
    // 验证按钮的倒计时
    var timer = null
    var DELAYTIME = 90
    var delayTime = DELAYTIME
    $('.green-btn').on('click', function () {

        $('.green-btn').hide()
        $('.gray-btn').show()
        $('.gray-btn').text(delayTime + '秒后重试')

        // 在这里发送验证码请求
        // .......

        timer = setInterval(function () {
            delayTime--
            $('.gray-btn').text(delayTime + '秒后重试')
            if (delayTime < 1) {
                clearInterval(timer)
                $('.gray-btn').hide()
                $('.green-btn').show()
                delayTime = DELAYTIME
            }
        }, 1000)
    })
})