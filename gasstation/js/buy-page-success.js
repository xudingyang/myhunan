$(function () {
    $('.btn').click(function () {
        location.href = 'success-page.index?op=' + encodeURIComponent('购买')
    })
    var score = 5
    $('.star').on('click', function () {
        $(this).addClass('icon-pingfen').removeClass('icon-xing').prevAll().addClass('icon-pingfen')
            .end().nextAll().addClass('icon-xing').removeClass('icon-pingfen')
        score = $('.icon-pingfen').length
        $('#score').text(score)
    })
})