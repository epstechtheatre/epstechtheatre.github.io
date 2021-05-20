$('#mysidebar').height($(".nav").height());

$( document ).ready(function() {

    //this script says, if the height of the viewport is greater than 800px, then insert affix class, which makes the nav bar float in a fixed
    // position as your scroll. if you have a lot of nav items, this height may not work for you.
    var h = $(window).height();
    //console.log (h);
    if (h > 800) {
        $( "#mysidebar" ).attr("class", "nav affix");
    }
    // activate tooltips. although this is a bootstrap js function, it must be activated this way in your theme.
    $('[data-toggle="tooltip"]').tooltip({
        placement : 'top'
    });

    /**
     * AnchorJS
     */
    anchors.add('h2,h3,h4,h5');

    // Activate button keypad display overlays
    $('.display-button-softkey').mouseenter(function() {
        showNewKey(this, $(this).data('keyid'), true)
    })

    $('.display-button-keypad').mouseenter(function() {
        showNewKey(this, $(this).data('keyid'))
    })

    $('.inline-display-button').mouseenter(function() {
        showNewKey(this, $(this).data('keyid'))
    })
});

// needed for nav tabs on pages. See Formatting > Nav tabs for more details.
// script from http://stackoverflow.com/questions/10523433/how-do-i-keep-the-current-tab-active-with-twitter-bootstrap-after-a-page-reload
$(function() {
    var json, tabsState;
    $('a[data-toggle="pill"], a[data-toggle="tab"]').on('shown.bs.tab', function(e) {
        var href, json, parentId, tabsState;

        tabsState = localStorage.getItem("tabs-state");
        json = JSON.parse(tabsState || "{}");
        parentId = $(e.target).parents("ul.nav.nav-pills, ul.nav.nav-tabs").attr("id");
        href = $(e.target).attr('href');
        json[parentId] = href;

        return localStorage.setItem("tabs-state", JSON.stringify(json));
    });

    tabsState = localStorage.getItem("tabs-state");
    json = JSON.parse(tabsState || "{}");

    $.each(json, function(containerId, href) {
        return $("#" + containerId + " a[href=" + href + "]").tab('show');
    });

    $("ul.nav.nav-pills, ul.nav.nav-tabs").each(function() {
        var $this = $(this);
        if (!json[$this.attr("id")]) {
            return $this.find("a[data-toggle=tab]:first, a[data-toggle=pill]:first").tab("show");
        }
    });
});

var currentKeys = [];

function showNewKey(pageObj, keyID, revertToSoftkey = false) {
    if (currentKeys.length > 0) {
        for (let key of currentKeys) {
            key.children[1].style = "fill:white"
        }
        currentKeys = []
    }

    keyID = keyID.toString().replace("{", "").replace("}", "").replace("_", "").replace("[", "").replace("]", "").toLowerCase()

    //Returns a string, or array of strings
    let searchElement = parseHighlight(keyID)

    if (Array.isArray(searchElement)) {
        for (let element of searchElement) {
            let targetKey = pageObj.querySelector(".keyboard-svg-graphic")
            if (!targetKey) targetKey = pageObj.parentElement.querySelector(".keyboard-svg-graphic")

            if (!targetKey) continue

            targetKey = targetKey.contentDocument.documentElement.getElementById(element)

            if (targetKey) {
                currentKeys.push(targetKey)
                targetKey.children[1].style = "fill:lime"
            }
        }
    } else {
        let targetKey = pageObj.querySelector(".keyboard-svg-graphic")
        if (!targetKey) targetKey = pageObj.parentElement.querySelector(".keyboard-svg-graphic")

        if (!targetKey && revertToSoftkey === true) {
            return this.showNewKey(pageObj, "softkey")
        } else {
            targetKey = targetKey.contentDocument.documentElement.getElementById(searchElement)

            if (targetKey) {
                this.currentKeys.push(targetKey)
                targetKey.children[1].style = "fill:lime"
            }
        }
    }
}

function parseHighlight(text) {
    text = text.toString().toLowerCase()
    text = text.replace("  ", " ").replace(" ", "_")

    if (!isNaN(text) && !isNaN(parseFloat(text))) {
        //This is a valid number. If the number is over 9, highlight all numbers present in the string

        return text.split("")
    }

    //Theres a few edge cases that make designing more intuitive
    switch (text) {
        case ".":
            return "dot"

        case "/":
            return "slash"

        case "+":
            return "plus"

        case "-":
            return "minus"

        case "number":
            return getNumbers();

        case "softkey":
            return getSoftkeyKeys();

        case "encoderpage":
        case "encoderpages":
            return getEncoderPages();

        case "encoderwheel":
        case "encoderwheels":
            return getEncoderWheels();

        case "label":
        case "note":
        case "notelabel":
            return "labelnote"

        case "stop":
        case "back":
        case "stopback":
            return "stopback"

        default:
            break;
    }    
    //Edge cases dealt with, now we can remove slashes from others (like label/note)

    text = text.replace("/", "")

    return text;
}

function getSoftkeyKeys() {
    return [
        "s1",
        "s2",
        "s3",
        "s4",
        "s5",
        "s6",
        "moresk"
    ]
}

function getEncoderPages() {
    return [
        "focus",
        "color",
        "intensity",
        "form",
        "image",
        "shutter"
    ]
}

function getEncoderWheels() {
    return [
        "encoder1",
        "encoder2",
        "encoder3",
        "encoder4"
    ]
}

function getNumbers() {
    return [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "0"
    ]
}