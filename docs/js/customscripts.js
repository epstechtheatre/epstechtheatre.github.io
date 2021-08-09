const KEYBOARD_SVG_FADE_TIME = 150;

$('#mysidebar').height($(".nav").height());

$( document ).ready(function() {

    if (document.getElementsByClassName("display-button-softkey").length > 0
    || document.getElementsByClassName("display-button-keypad").length > 0
    || document.getElementsByClassName("inline-display-button").length > 0) {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "json/keyNames.mjs";

        var script2 = document.createElement("script");
        script.type = "text/javascript";
        script.src = "js/svg_get_shape.js"

        document.head.appendChild(script)
        document.head.appendChild(script2)
    }

    //this script says, if the height of the viewport is greater than 800px, then insert affix class, which makes the nav bar float in a fixed
    // position as your scroll. if you have a lot of nav items, this height may not work for you.
    var h = $(window).height();
    //console.log (h);
    // if (h > 800) {
    //     $( "#mysidebar" ).attr("class", "nav affix");
    // }
    // activate tooltips. although this is a bootstrap js function, it must be activated this way in your theme.
    $('[data-toggle="tooltip"]').tooltip({
        placement : 'top'
    });

    /**
     * AnchorJS
     */
    anchors.add('h2,h3,h4,h5');

    // Activate button keypad display overlays
    $('.display-button-softkey')
    .mouseenter(function() {
        showNewKey(this, $(this).data('keyid'), true)
    })
    .mouseleave(function() {
        unShow()
    })

    $('.display-button-keypad')
    .mouseenter(function() {
        showNewKey(this, $(this).data('keyid'), false) //TODO: These currently don't have softkey support (maybe they should)
    })
    .mouseleave(function() {
        unShow()
    })

    $('.inline-display-button')
    .mouseenter(function() {
        showNewKey(this, $(this).data('keyid'), false) //TODO: These currently don't have softkey support (maybe they should)
    })
    .mouseleave(function() {
        unShow()
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
var currentGraphic;

function unShow() {
    if (currentGraphic !== undefined) {
        let work = currentGraphic;
        currentGraphic = undefined;
        visualAnimateOut(work).then(() => {
            work.remove()
        })
    }
}

function showNewKey(pageObj, keyID, revertToSoftkey, currentView = undefined) {
    unShow()

    // Create the keyboard graphic
    let View;

    if (currentView) {
        View = currentView

        ViewDoWork(View, keyID, revertToSoftkey)
    } else {
        View = document.createElement("object")
        View.className = "keyboard-svg-graphic"
        View.data = "/images/svg/Keyboard Overlay Source ion xe.svg"
        View.type = "image/svg+xml"
        View.name = "Keyboard Graphic"
    
        pageObj.insertAdjacentElement("afterbegin", View)
        currentGraphic = View;

        View.addEventListener("load", () => {
            ViewDoWork(View, keyID, revertToSoftkey)
        })
    }
}

function ViewDoWork(View, keyID, revertToSoftkey) {
    if (currentKeys.length > 0) {
        for (let key of currentKeys) {
            getSvgShape(key).style = "fill:white;stroke:#000000"
        }
        currentKeys = []
    }

    keyID = keyID.toString().replace("{", "").replace("}", "").replace("[", "").replace("]", "").replace(" ", "").toLowerCase()

    //Returns a string, or array of strings
    let searchElement = parseHighlight(keyID)

    const docElement = View.contentWindow.document.documentElement;
    if (Array.isArray(searchElement)) {
        for (let element of searchElement) {
            let targetKey = docElement.getElementById(element)

            if (targetKey) {
                currentKeys.push(targetKey)
                getSvgShape(targetKey).style = "fill:lime;stroke:#000000"
            }
        }
    } else {
        let targetKey = docElement.getElementById(searchElement)

        if (!targetKey && revertToSoftkey === true) {
            return this.showNewKey(pageObj, "softkey", View)
        } else {
            targetKey = docElement.getElementById(searchElement)

            if (targetKey) {
                this.currentKeys.push(targetKey)
                getSvgShape(targetKey).style = "fill:lime;stroke:#000000"
            }
        }
    }

    if (View.style.opacity !== 100) {
        View.style.transition = `opacity ${KEYBOARD_SVG_FADE_TIME}ms linear`;
        View.style.opacity = 100;
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
    try {
        if (LightingKeyboardAliases[text]) {
            return LightingKeyboardAliases[text]
        }
    } catch(e) {
        //
    }

    switch (text) {
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
        "intensity_s1",
        "focus_s2",
        "color_s3",
        "beam_s4",
        "form_s5",
        "shutter_s6",
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
        "shutter",
        "intensity_s1",
        "focus_s2",
        "color_s3",
        "beam_s4",
        "form_s5",
        "shutter_s6",
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

function visualAnimateOut(element) {
    return new Promise(resolve => {
        if (element.style.opacity != 100) {
            resolve()
            return;
        }

        element.style.opacity = 0;
    
        setTimeout(() => {
            resolve()
        }, KEYBOARD_SVG_FADE_TIME);
    })
}