$(document).ready(function () {

    $('.sn-accordion-item.active-item .sn-accordion-item-content').slideDown(200);
    $('.sn-accordion-item.active-item').find('.sn-accordion-item-content').slideDown(200);
    $(".sn-accordion-item .accordion").on("click", function (e) {
        e.preventDefault()
        var flag = false
        if($(this).closest('.sn-accordion-item').hasClass("active-item")) {
            flag = true
        } else {
            flag = false
        }
        $('.sn-accordion-item').find('.sn-accordion-item-content').slideUp(200);
        $('.sn-accordion-item').removeClass("active-item");
        if (!flag) {
            $(this).closest('.sn-accordion-item').addClass("active-item").find('.sn-accordion-item-content').slideDown(200);
        }

    });
});


$("#files").change(function() {
    filename = this.files[0].name
    console.log(filename);
});

$("#tab-two-label").on("click", function (e) {
// document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialDate: '2020-06-12',
        initialView: 'timeGridWeek',
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
        },
        height: 'auto',
        navLinks: true, // can click day/week names to navigate views
        editable: true,
        selectable: true,
        selectMirror: true,
        nowIndicator: true,
        events: [
            {
                title: 'All Day Event',
                start: '2020-06-01',
            },

            {
                groupId: 999,
                title: 'Repeating Event',
                start: '2020-06-09T16:00:00'
            },
            {
                groupId: 999,
                title: 'Repeating Event',
                start: '2020-06-16T16:00:00'
            },

            {
                title: 'Meeting',
                start: '2020-06-12T10:30:00',
                end: '2020-06-12T12:30:00'
            },
            {
                title: 'Lunch',
                start: '2020-06-12T12:00:00'
            },
            {
                title: 'Meeting',
                start: '2020-06-12T14:30:00'
            },
            {
                title: 'Happy Hour',
                start: '2020-06-12T17:30:00'
            },
            {
                title: 'Dinner',
                start: '2020-06-12T20:00:00'
            },
            {
                title: 'Birthday Party',
                start: '2020-06-13T07:00:00'
            },
            {
                title: 'Click for Google',
                url: 'http://google.com/',
                start: '2020-06-28'
            }
        ]
    });
    setTimeout(function () {
        calendar.render();
    },100)


// });

});
