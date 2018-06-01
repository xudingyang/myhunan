$(function () {
    var $oilModal = $('.oil-modal')
    var $correctOil = $('#cor_oil')
    $('#ch_oil').click(function () {
        $oilModal.show()
    })
    $('#goods_desc').click(function () {
        $('.goods-modal').show()
    })
    // 点击油
    var currentOil = ''
    $('.oil-m-item').click(function () {
        currentOil = $(this).text()
        $(this).addClass('active').siblings().removeClass('active')
    })
    // 点击取消按钮
    $('.oil-btn-cancel').on('click', function () {
        $oilModal.hide()
    })
    // 点击确定按钮
    $('.oil-btn-ok').on('click', function () {
        $correctOil.text(currentOil)
        $oilModal.hide()
    })
    // 点击确认商品按钮
    $('.goods-btn-ok').on('click',function () {
        $('.goods-modal').hide()
    })
})