$(function () {
    $('.back-btn').on('click',function () {
        location.href = 'member-card.html'
    })
    // 如果是充值，点击事件
    $('.item').eq(0).click(function () {
        location.href = 'chongzhi-desc.html'
    })
    // 如果是消费，点击事件
    $('.item').eq(1).click(function () {
        location.href = 'parking-record-detail.html'
    })
})