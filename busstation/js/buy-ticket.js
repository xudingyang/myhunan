$(function () {
    // 点击出发车站
    $('.js-start-station').click(function () {
        location.href = 'buy-ticket-start-station.html'
    })
    // 点击终点站
    $('.js-end-station').click(function () {
        location.href = 'buy-ticket-end-station.html'
    })
    // 点击出发日期
    $('.js-trip-date').click(function () {
        $('.date-modal-wrapper').show()
    })

    // 日期控件
    var mySchedule = new Schedule({
        el: '#schedule-box',
        //date: '2018-9-20'
        clickCb: function (y,m,d) {
            console.log()
            var dateStr = y + '-' + m + '-' + d
            var date = new Date(dateStr)
            var weeks = ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
            $('#date_str').text(dateStr)
            $('#week_str').text(weeks[date.getDay()])
            $('.date-modal-wrapper').hide()
        }
    });
})