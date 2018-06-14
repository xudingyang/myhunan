$(function () {

    $('.date-modal').on('click',function () {
        $('.date-modal-wrapper').hide()
    })
    $('#schedule-box').on('click',function (e) {
        e.stopPropagation()
    })

    var weeks = ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
    var tmpDate = new Date()
    $('#date_str').text(tmpDate.getFullYear() + '-' + (tmpDate.getMonth() + 1) + '-' + tmpDate.getDate())
    $('#week_str').text(weeks[tmpDate.getDay()])
    // 日期控件
    var mySchedule = new Schedule({
        el: '#schedule-box',
        //date: '2018-9-20'
        clickCb: function (y,m,d) {
            console.log()
            var dateStr = y + '-' + m + '-' + d
            var date = new Date(dateStr)
            $('#date_str').text(dateStr)
            $('#week_str').text(weeks[date.getDay()])
            $('.date-modal-wrapper').hide()
        }
    });
})