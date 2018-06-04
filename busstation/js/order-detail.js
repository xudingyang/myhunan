$(function () {

    var state = 2
    if (1 === state) {
        // 已支付
        $('.state-had-pay').show()
        $('.state-had-cancel').hide()
        $('.operate-wrapper').show()
    } else {
        // 已过期
        $('.state-had-pay').hide()
        $('.state-had-cancel').show()
        $('.operate-wrapper').hide()
    }
})