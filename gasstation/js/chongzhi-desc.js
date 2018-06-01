$(function () {
    $('#tel_num').text($('#tel_num').text().replace(/(\d{3})\d{4}(\d{4})/, '$1****$2'))
})