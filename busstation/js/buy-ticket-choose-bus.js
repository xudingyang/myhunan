$(function () {

    var weeks = ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
    var dateString = '2018-06-21'
    var weekString = '星期四'
    var currentDate = new Date(dateString)
    var currentDateSting = ''
    // 初始化日期和星期
    $('#date_str').text(dateString)
    $('#week_str').text(weekString)

    $('.js-date_week').click(function () {
        $('.date-modal-wrapper').show()
    })
    $('.date-modal').on('click',function () {
        $('.date-modal-wrapper').hide()
    })
    $('#schedule-box').on('click',function (e) {
        e.stopPropagation()
    })
    // 点击前一天
    $('.js-pre-day-btn').click(function () {
        currentDate.setDate(currentDate.getDate() - 1)
        currentDateSting = currentDate.getFullYear() + '-' + (currentDate.getMonth() + 1) + '-' + currentDate.getDate()
        $('#date_str').text(currentDateSting)
        $('#week_str').text(weeks[currentDate.getDay()])

    })
    // 点击后一天
    $('.js-next-day-btn').click(function () {
        currentDate.setDate(currentDate.getDate() + 1)
        currentDateSting = currentDate.getFullYear() + '-' + (currentDate.getMonth() + 1) + '-' + currentDate.getDate()
        $('#date_str').text(currentDateSting)
        $('#week_str').text(weeks[currentDate.getDay()])

    })

    // 点击车票
    $('.ticket').click(function () {
        location.href = 'buy-ticket-fill-order.html'
    })

    // 日期控件初始化
    var mySchedule = new Schedule({
        el: '#schedule-box',
        // date: '2018-06-21',
        clickCb: function (y,m,d) {
            var dateStr = y + '-' + m + '-' + d
            var date = new Date(dateStr)
            $('#date_str').text(dateStr)
            $('#week_str').text(weeks[date.getDay()])
            $('.date-modal-wrapper').hide()
            currentDate = date
        }
    });
})