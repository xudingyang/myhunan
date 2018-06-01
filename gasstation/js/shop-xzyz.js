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
    // 点击油站列表
    $('.store').click(function () {
        $('.modal').css({
            'display': 'box',
            'display': '-webkit-box'
        })
    })

    var location_failed = true  // 定位是否失败
    if (location_failed) {
        $('.distance').text('定位失败').css('color','red')
        $('.js-confirm-distance').text('定位失败')
        $('.location-success').hide()
        $('.location-failed').show()
    } else {
        $('.distance').text('20.5公里')
        $('.location-failed').hide()
        $('.location-success').show()
    }
    // 点击重新定位，重新加载本页面
    $('.relocation-btn').on('click',function () {
        location.reload()
    })
    // 点击确认油站
    $('.btn-ok1').on('click',function () {
        location.href = 'shop-page.html'
    })
    $('.btn-ok').on('click',function () {
        location.href = 'shop-page.html'
    })
})