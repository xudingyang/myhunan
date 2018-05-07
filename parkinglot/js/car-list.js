$(function () {
    $("li em").on('click', function () {
        $('.modal').show()
    })

    // 点击取消
    $('.cancel-btn').on('click', function () {
        $('.modal').hide()
    })
    // 点击确定
    $('.ok-btn').on('click', function () {
        $('.modal').hide()
    })
})