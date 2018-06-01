$(function () {
    // 当前会员等级。若无等级或者未登录，则默认为白银
    var SILVER = 0        // 白银
    var GOLD = 1          // 黄金
    var PLATINUM = 2      // 铂金
    var DIAMOND = 3       // 钻石

    var level = 1
    var tabs = $('#tabs').find('li')
    var huiyuan = $('.js-hy')
    if (3 === level) {
        tabs.removeClass('active').eq(3).addClass('active')
        huiyuan.hide().eq(3).show()
    } else if (2 === level) {
        tabs.removeClass('active').eq(2).addClass('active')
        huiyuan.hide().eq(2).show()
    } else if (1 === level) {
        tabs.removeClass('active').eq(1).addClass('active')
        huiyuan.hide().eq(1).show()
    } else {
        tabs.removeClass('active').eq(0).addClass('active')
        huiyuan.hide().eq(0).show()
    }
    // 点击tabs
    tabs.on('click', function () {
        huiyuan.hide().eq(tabs.index($(this))).show()
        $(this).siblings().removeClass('active').end().addClass('active')
    })
    // 点击积分记录
    $('.scroe-record-container').on('click',function () {
        location.href = 'huiyuan-score-record.html'
    })
    // 点击会员说明
    $('.hy-desc').on('click',function () {
        location.href = 'huiyuan-explain.html'
    })
})