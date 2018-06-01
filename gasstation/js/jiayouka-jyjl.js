$(function () {
    $('.back-btn').on('click',function () {
        location.href = 'jiayouka-wdjyk.html'
    })
    // 如果是充值
    $('.item').eq(0).click(function () {
        location.href = 'chongzhi-desc.html'
    })
    // 如果是消费
    $('.item').eq(1).click(function () {
        location.href = 'user-center-xfjl-desc.html'
    })
})