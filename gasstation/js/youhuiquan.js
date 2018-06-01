$(function () {
    // 点击底部“查看失效优惠券”
    $('.js-shixiao1').on('click',function () {
        location.href = 'youhuiquan-shixiao.html'
    })
    $('.js-shixiao2').on('click',function () {
        location.href = 'youhuiquan-shixiao.html'
    })
    // 点击已使用
    $('.js-shiyong1').on('click',function () {
        location.href = 'youhuiquan-yishiyong.html'
    })
    $('.js-shiyong2').on('click',function () {
        location.href = 'youhuiquan-yishiyong.html'
    })
    // 点击优惠券
    $('.youhuiquan').on('click',function () {
        location.href = 'youhuiquan-detail.html'
    })
})