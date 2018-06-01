$(function () {
    // 点击弹窗，阻止事件冒泡
    $('.modal-panel').on('click',function (e) {
        e.stopPropagation()
    })
    // 点击遮罩
    $('.modal').on('click',function () {
        $(this).hide()
    })
    // 点击关闭按钮
    $('.confirm-close').on('click',function () {
        $('.modal').hide()
    })
    var location_failed = false  // 定位是否失败
    var outside = true   // 是否在范围外
    // 点击“去付款”
    $('.go-pay').on('click',function () {
        $('.modal').css({
            'display': 'box',
            'display': '-webkit-box'
        })
        // 1 ********** 在范围之外 ***********
        if (location_failed) {
            $('.confirm-title').html('未获取到定位')
            $('.js-confirm-distance').html('未获取到定位')
            $('.distance').text('定位失败').css('color','red')
            $('.item-tip1').hide()
            $('.outside-wrapper').hide()
            $('.inside-wrapper').show().html('重新定位')
        } else {
            if (outside) {
                $('.confirm-title').html('超出付款范围')
                $('.js-confirm-distance').html('超出1.00公里范围')
                $('.item-tip1').css({
                    'display': 'box',
                    'display': '-webkit-box'
                })
                $('.inside-wrapper').hide()
                $('.outside-wrapper').show()
            } else {
                // 2 ********** 在范围之内 *********
                $('.confirm-title').html('请再次确认')
                $('.js-confirm-distance').html('9.18公里')
                $('.item-tip1').hide()
                $('.outside-wrapper').hide()
                $('.inside-wrapper').show().html('确认加油')
            }
        }
    })
    // 点击“去这里”
    $('.go-here').on('click',function () {
        location.href = 'gps.html'
    })
    // 点击重新定位，重新加载本页面
    $('.relocation').on('click',function () {
        location.reload()
    })
    // 点击去油站
    $('.go-gas-station').on('click',function () {
        location.href = 'gps.html'
    })
    // 点击确认油站/重新定位
    $('.inside-wrapper').on('click',function () {
        if (location_failed) {
            location.reload()
        } else {
            location.href = 'buy-page.html'
        }
    })
})