$(function () {
    var $tabAll = $('.tab-all')
    var $tabNotPay = $('.tab-not-pay')
    var $tabNotUse = $('.tab-not-use')
    var $panelAll = $('.all-wrapper')
    var $panelNotPay = $('.not-pay-wrapper')
    var $panelNotUse = $('.not-use-wrapper')

    // 点击全部
    $tabAll.click(function () {
        $tabAll.addClass('active')
        $tabNotPay.removeClass('active')
        $tabNotUse.removeClass('active')
        $panelAll.show()
        $panelNotPay.hide()
        $panelNotUse.hide()
    })
    
    // 点击待付款
    $tabNotPay.click(function () {
        $tabAll.removeClass('active')
        $tabNotPay.addClass('active')
        $tabNotUse.removeClass('active')
        $panelAll.hide()
        $panelNotPay.show()
        $panelNotUse.hide()
    })
    // 点击待乘车
    $tabNotUse.click(function () {
        $tabAll.removeClass('active')
        $tabNotPay.removeClass('active')
        $tabNotUse.addClass('active')
        $panelAll.hide()
        $panelNotPay.hide()
        $panelNotUse.show()
    })

    // 点击待付款的订单
    $('.order-item.state-need-pay').on('click',function () {
        location.href = 'order-confirm.html'
    })
    // 点击其他订单
    $('.order-item:not(.state-need-pay)').on('click',function () {
        location.href = 'order-detail.html'
    })
})