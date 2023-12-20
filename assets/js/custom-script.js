// Header-drawer-Js::Start
$(document).on("click", ".header-menu-button", function () {
    $(".header-drawer-main").addClass("reveal");
    $(".drawer-overlay").show();
    $("body").addClass("body-fixed");
});
$(document).on("click", ".closeHeaderDrawer", function () {
    $(".header-drawer-main").removeClass("reveal");
    $(".drawer-overlay").hide();
    $("body").removeClass("body-fixed");
});
// Header-drawer-Js::End

// Calendar-filter-drawer-JS::Start
$(document).on("click", ".filter-btn", function () {
    $(".calendar-filter-drawer").addClass("reveal-filter-drawer");
    $(".filter-overlay").show();
    $("body").addClass("body-fixed");
});
$(document).on("click", ".closeCalendarDrawer", function () {
    $(".calendar-filter-drawer").removeClass("reveal-filter-drawer");
    $(".filter-overlay").hide();
    $("body").removeClass("body-fixed");
});
// Calendar-filter-drawer-JS::End
$(document).ready(function () {
    // Calendar-header-search-Js::Start
    $(".search-btn").on("click", function () {
        $(".calendar-search-input").toggleClass("show-element transform");
        $(".calendar-search-input").toggleClass("hide-element");
    });
    // Calendar-header-search-Js::End

    // Select-Js::Start
    $('.select-country').select2();
    $('.select-country-admin').select2();
    $('.select-city-admin').select2();
    $('.select-state').select2();
    $('.select-city').select2();
    // Select-Js::End


    // Calendar-modal-Js::Start
    $("#confirmDetails").on("show.bs.modal", function (e) {
        $("#appointmentList").modal("hide");
    });
    $("#confirmAppointment").on("show.bs.modal", function (e) {
        $("#confirmDetails").modal("hide");
    });
    $("#appointmentBooked").on("show.bs.modal", function (e) {
        $("#confirmAppointment").modal("hide");
    });
    // Calendar-modal-Js::End

    // Date-piker-Js::Start
    $("#datepicker-modal").datepicker({
        format: "dd.mm.yyyy",
    });
    // Date-piker-Js::End

    // Month-view-tab-JS::Start
    $(document).ready(function () {
        $("#weekTabOpen").click(function () {
            $('#pills-month-tab').removeClass('active');
            $('.tab-pane.month-calendar-top').removeClass('active').removeClass('show');
            $('#pills-week-tab').addClass('active');
            $('.tab-pane.week-calendar-top').addClass('active').addClass('show');
        });
    });
    // Month-view-tab-JS::End
});

// Single-location-drawer-JS::Start
$(".city-name-main").on("click", function () {
    $("#single-location").addClass("reveal-location-drawer");
    $(".location-overlay").show();
});
$(".closeLocationDrawer").on("click", function () {
    $(".location-drawer-main").removeClass("reveal-location-drawer");
    $(".location-overlay").hide();
});
// Single-location-drawer-JS::Start

// Single-location-drawer-JS::Start
$(".location-circle-main").on("click", function () {
    $("#single-location").addClass("reveal-location-drawer");
    $(".location-overlay").show();
});
$(".closeLocationDrawer").on("click", function () {
    $(".location-drawer-main").removeClass("reveal-location-drawer");
    $(".location-overlay").hide();
});
// Single-location-drawer-JS::Start

// More locations-drawer-Js::Start
$(".more-locations").on("click", function () {
    $("#all-locations").addClass("reveal-location-drawer");
    $(".location-overlay").show();
});
$(".closeLocationDrawer").on("click", function () {
    $(".location-drawer-main").removeClass("reveal-location-drawer");
    $(".location-overlay").hide();
});
// More locations-drawer-Js::End

// Body-scroll-hide-Js::Start
$(document).on("shown.bs.modal", ".modal", function () {
    $("body").addClass("body-fixed");
    $("body").addClass("modal-open");
});
$(document).on("hide.bs.modal", ".modal", function () {
    $("body").addClass("modal-open");
        $("body").removeClass("body-fixed");
});
// Body-scroll-hide-Js::End

$('.collapse').on('shown.bs.collapse', function () {
    $(this).parent().find('.btn i').addClass('rotate');
  }).on('hidden.bs.collapse', function () {
    $(this).parent().find('.btn i').removeClass('rotate');
  });