$(function () {
    $('.tab-item').click(function () {
        $(this).addClass('tab-active').siblings().removeClass('tab-active')
    })
    // 所有
    $('.tab-all').click(function () {
        $('.youhuiquan-all').show()
        $('.youhuiquan-used').hide()
        $('.youhuiquan-outtime').hide()
    })
    // 已使用
    $('.tab-used').click(function () {
        $('.youhuiquan-all').hide()
        $('.youhuiquan-used').show()
        $('.youhuiquan-outtime').hide()
    })
    // 已过期
    $('.tab-outtime').click(function () {
        $('.youhuiquan-all').hide()
        $('.youhuiquan-used').hide()
        $('.youhuiquan-outtime').show()
    })
})