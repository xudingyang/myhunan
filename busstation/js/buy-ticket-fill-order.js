$(function () {

    // 点击添加乘客按钮
    $('.add-passenger-btn').click(function () {
        location.href = 'buy-ticket-add-passenger.html'
    })

    // 点击保险
    $('.js-buy-insurance').click(function () {
        location.href = 'insurance.html'
    })

    // 点击提交订单按钮
    $('.submit-order-btn').click(function () {
        $('.mask').show()
        setTimeout(function () {
            $('.mask').hide()
            location.href = 'order-confirm.html'
        },2000)
    })

    // 展开明细弹窗
    $('.js-show-modal').on('click',function () {
        $('.detail-modal-wrapper').show()
    })
    // 关闭明细弹窗
    $('.js-close-modal').on('click',function () {
        $('.detail-modal-wrapper').hide()
    })
})