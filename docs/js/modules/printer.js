import {validReqArgs, rawReqArgs} from "./uriArgs.js"

$( document ).ready(function() {
    //Printer View
    if (validReqArgs["printer"] == "true") { //Client requested printer view, time to break some stuff
        $("#tg-sb-sidebar").hide();
        $("#tg-sb-content").toggleClass('col-md-9');
        $("#tg-sb-content").toggleClass('col-md-12');
        $("#tg-sb-icon").toggleClass('fa-toggle-on');
        $("#tg-sb-icon").toggleClass('fa-toggle-off');

        $("#search-input").hide();
        $(".githubEditButton").hide();
        $(".printerViewButton").hide();
        $(".navbar-right").hide();
        $("#pageFooterHR").hide();

        $(".container").css({width: "100%"});
        $(".tags").hide();
        $("#toc").hide();
        $(".navbar-static-top").hide();
        $(".console_command_tip").hide();

        $("#page-footer-logo").width("200");
        $("footer").css({"margin-top": "20px"});
        $(".footer").css({"text-align": "center"});
        $(".site-last-updated").hide();
        
        $(".page-url").show();
        $(".page-accessed").show();

        $(".post-header").after('<a target="_blank" rel="noopener" class="btn btn-default printButton" role="button" onclick=window.print();return false><i class="fa fa-print fa-lg"></i> Print</a>')

    } else {
        if (rawReqArgs["printer"] && rawReqArgs["printer"] === "true") {
            document.getElementsByClassName("post-header")[0].insertAdjacentHTML("afterend", "<div class=\"noPrinterView bs-callout bs-callout-danger\">Sorry! This page doesn't have a printer-friendly view.<br>You can still print normally and the page will try to remove unneeded elements.</div")
        }
    }
})