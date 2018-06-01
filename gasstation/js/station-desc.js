$(function () {
    var mySwiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        autoplay: 2000,
        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
        }
    })

    // 点击导航
    $('.location-btn').click(function () {
        location.href = 'gps.html'
    })
    // 点击立即付款
    $('.pay-btn').click(function () {
        location.href = 'buy-page.html'
    })
    // 点击查看会员卡
    $('.card-con').click(function () {
        location.href = 'user-center.html'
    })
})