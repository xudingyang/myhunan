$(function () {
    var hasPwd = false
    // 如果有密码
    if (hasPwd) {
        $('.btn').text('修改密码')
    } else {
        $('.btn').text('创建密码')
    }
    // 点击创建密码按钮
    $('.btn').on('click', function () {
        location.href = 'user-center-zhaq-kjymm2.html'
    })
})