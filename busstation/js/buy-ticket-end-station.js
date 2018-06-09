$(function () {
    // 点击省
    $('.provice').on('click',function () {
        $('.provice-con').hide()
        $('.city-con').show()
    })

    // 点击市
    $('.city').on('click',function () {
        $(this).addClass('city-active').siblings().removeClass('city-active')
    })

    // 点击车站
    $('.city-station').on('click',function () {
        $('.provice-con').show()
        $('.city-con').hide()
        location.href = 'buy-ticket.html'
    })
})