

var calGer = $.calendars.instance();
var calHj = $.calendars.instance('ummalqura', 'ar');

$(function () {
    var pickCalGerID = document.getElementById('ContentPlaceHolder1_PageData_ucZawga_PersonDataControl1_ucBirthDate_pickCalGer').id;
    var pickCalHjID = document.getElementById('ContentPlaceHolder1_PageData_ucZawga_PersonDataControl1_ucBirthDate_pickCalHj').id;

    var maxDayGerg = 31;
    var maxMonthGerg = 12;
    var maxYearGerg = 2035;
    var maxDateGerg = maxDayGerg + '/' + maxMonthGerg + '/' + maxYearGerg;

    var maxDayHijri = 02;
    var maxMonthHijri = 11;
    var maxYearHijri = 1457;
    var maxDateHijri = maxDayHijri + '/' + maxMonthHijri + '/' + maxYearHijri;

    var miniDayGerg = 11;
    var miniMonthGerg = 11;
    var miniYearGerg = 1882;
    var miniDateGerg = miniDayGerg + '/' + miniMonthGerg + '/' + miniYearGerg;

    var miniDayHijri = 01;
    var miniMonthHijri = 01;
    var miniYearHijri = 1300;
    var miniDateHijri = miniDayHijri + '/' + miniMonthHijri + '/' + miniYearHijri;

    $('#' + pickCalGerID).calendarsPicker($.extend({
        calendar: calGer,
        onSelect: function (date) {
            convertDtFromGerToHijri(date, pickCalHjID);
        },
        showTrigger: '#calImg',
        dateFormat: 'dd/mm/yyyy',
        //maxDate: '31/12/2035',
        maxDate: maxDateGerg,
        //minDate: '11/11/1882',
        minDate: miniDateGerg,
        //yearRange: 'c-250:c+250',
        yearRange: '1882:2035',
    }));

    $('#' + pickCalHjID).calendarsPicker($.extend({
        calendar: calHj,
        onSelect: function (date) {
            convertDtFromHijriToGer(date, pickCalGerID);
        },
        showTrigger: '#calImg',
        dateFormat: 'dd/mm/yyyy',
        //maxDate: '02/11/1457',
        maxDate: maxDateHijri,
        //minDate: '01/01/1300',
        minDate: miniDateHijri,
        yearRange: '1300:1457',

    },
        $.calendarsPicker.regionalOptions['ar'])
    );

});

$(document).ready(function () {

    if ($('#ContentPlaceHolder1_PageData_ucZawga_PersonDataControl1_ucBirthDate_pickCalGer').val() != "") {
        var dateParts = $('#ContentPlaceHolder1_PageData_ucZawga_PersonDataControl1_ucBirthDate_pickCalGer').val().split('/');
        var calG = $.calendars.instance();
        var dtGer = calG.newDate(dateParts[2], dateParts[1], dateParts[0]);
        var arr = [dtGer];

        convertDtFromGerToHijri(arr, document.getElementById('ContentPlaceHolder1_PageData_ucZawga_PersonDataControl1_ucBirthDate_pickCalHj').id);
    }
    
});