$(function () {
    $('.pay-btn').click(function () {
        if (confirm('是否购买？')) {
            location.href = 'success-page.index?op=' + encodeURIComponent('积分兑换商品')
        }
    })
})