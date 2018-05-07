$(function () {
    // 如果没注册，直接跳到注册页面
    var hadRegistered = true
    if (!hadRegistered) {
        location.href = 'user-register.html'
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
})