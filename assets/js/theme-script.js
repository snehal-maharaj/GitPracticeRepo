
$(document).ready(function () {

    //////////////////////////////////////////
    // console.log("hhjh");
    var lang = localStorage.getItem('lang');
    if (localStorage.getItem("lang") === null) {
        $('#en').addClass('active-lang');
    }
    data(lang);
    // console.log(lang,'lang');
    $('#'+lang).removeClass('active-lang');
    $('#'+lang).addClass('active-lang');

    $('.select-language').on('click', function () {
        if ($(this).attr('id') == 'en') {
            var lang = 'en';
        } else {
            var lang = 'de';
        }
        localStorage.setItem('lang', lang); 
        $('.select-language').removeClass('active-lang');
        $(this).addClass('active-lang');
        data(lang);
    });
    function data(lang) {
        var url = 'https://planner2.drivenscan.app/new-theme/lang.json';
        // var url = 'http://localhost/DNS-planner-app/planner-calendar/dns-calendar-app-layouts/v3/Planner-app-new/lang.json';
        $.getJSON(url, function (data) {
            let att = $(document.getElementsByTagName('*'));
            att.map((r) => {
                
                if (att[r].hasAttribute("data-key")) {
                    // console.log("if");
                    // console.log($(att[r]).text(data[att[r].getAttribute('data-key')]?.[lang]));
                    $(att[r]).text(data[att[r].getAttribute('data-key')]?.[lang]);
                }
                if (att[r].hasAttribute("placeholder")) {
                    // console.log("else");
                    let setplace = data[att[r].getAttribute('data-key')]?.[lang];
                    $(att[r]).attr('placeholder', setplace);
                }
            })
        });
    }

});

