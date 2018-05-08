$(function () {

    // 是否注册了
    var hadRegistered = true
    // 是否激活会员了
    var hadActived = false

    // 如果没注册，直接跳到注册页面
    if (!hadRegistered) {
        location.href = 'user-register.html'
    } else {
        // 如果没激活会员，那就激活会员
        if (!hadActived) {

        } else {
            $('#xgkjymm').click(function () {
                location.href = 'user-center-zhaq-kjymm2.html'
            })
            $('#chongzhi_btn').click(function () {
                location.href = 'chong-zhi.html'
            })
            $('#jyjl').on('click',function () {

            })
        }
    }
})