const KEYBOARD_SVG_FADE_TIME = 150;

const possibleUriArgs = { //The name of the arg, and whether or not it is enabled
    printer: pageNoPrinterSetting != "true"
}

$('#mysidebar').height($(".nav").height());

$( document ).ready(function() {
    const validReqArgs = {};
    
    let reqArgs = window.location.href.split("?")[1];
    if (reqArgs) {
        reqArgs = reqArgs.split("&");
    } else {
        reqArgs = [];
    }

    for (arg of reqArgs) {
        let split = arg.split("=")

        if (split.length === 2) {
            if (possibleUriArgs[split[0]]) {
                validReqArgs[split[0]] = split[1];
            }
        }
    }

    if (document.getElementsByClassName("display-button-softkey").length > 0
    || document.getElementsByClassName("display-button-keypad").length > 0
    || document.getElementsByClassName("inline-display-button").length > 0) {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "json/key_names.js";
        document.head.appendChild(script)

        var script2 = document.createElement("script");
        script2.type = "text/javascript";
        script2.src = "js/svg_get_shape.js";
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

    if (validReqArgs["printer"] != "true") {
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
    }

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
        $("#pageFooterHR").hide()

        $(".container").css({width: "100%"});
        $(".tags").hide();
        $("#toc").hide();
        $(".navbar-static-top").hide();
        $(".console_command_tip").hide();

        $("#page-footer-logo").width("200");
        $("footer").css({"margin-top": "20px"});
        $(".footer").css({"text-align": "center"});
        $(".site-last-updated").hide()
        
        $(".page-url").show();
        $(".page-accessed").show();

        $(".post-header").after('<a target="_blank" rel="noopener" class="btn btn-default printButton" role="button" onclick=window.print();return false><i class="fa fa-print fa-lg"></i> Print</a>')

    } else {
        if (reqArgs.includes("printer=true")) {
            document.getElementsByClassName("post-header")[0].insertAdjacentHTML("afterend", "<div class=\"noPrinterView bs-callout bs-callout-danger\">Sorry! This page doesn't have a printer-friendly view.<br>You can still print normally and the page will try to remove unneeded elements.</div")
        }
    }
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

        ViewDoWork(View, pageObj, keyID, revertToSoftkey)
    } else {
        View = document.createElement("object")
        View.className = "keyboard-svg-graphic"
        View.data = "/images/svg/Keyboard Overlay Source ion xe.svg"
        View.type = "image/svg+xml"
        View.name = "Keyboard Graphic"
    
        pageObj.insertAdjacentElement("afterbegin", View)
        currentGraphic = View;

        View.addEventListener("load", () => {
            ViewDoWork(View, pageObj, keyID, revertToSoftkey)
        })
    }
}

function ViewDoWork(View, pageObj, keyID, revertToSoftkey) {
    if (currentKeys.length > 0) {
        for (let key of currentKeys) {
            getSvgShape(key).style = "fill:white;stroke:#000000"
        }
        currentKeys = []
    }

    keyID = keyID.toString().replace(/({|}|[|]| )/g, "").toLowerCase()

    //Returns a string, or array of strings
    let searchElement = parseHighlight(keyID)
    let simultaneousHighlight = [];

    //If the pageObj is a simultaneous key, we should highlight a bunch more stuff as well
    if (pageObj.parentElement?.classList.contains("display-button-simultaneous")) {
        const simultaneousButtons = pageObj.parentElement.querySelectorAll(".display-button");

        simultaneousButtons.forEach(button => {
            const buttonID = button.dataset.keyid.toString().replace(/({|}|[|]| )/g, "").toLowerCase();
            if (buttonID === keyID) {
                simultaneousHighlight.push(null);
                return;
            }

            const additionSearch = parseHighlight(buttonID);

            simultaneousHighlight = simultaneousHighlight.concat(additionSearch);
        })
    }

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
            return ViewDoWork(View, pageObj, "softkey")
        } else {
            targetKey = docElement.getElementById(searchElement)

            if (targetKey) {
                currentKeys.push(targetKey)
                getSvgShape(targetKey).style = "fill:lime;stroke:#000000"
            }
        }
    }

    if (simultaneousHighlight.length > 0) {
        let nullFound = false;
        let nullIndex = 0;
        let index = 0;
        const succeedingScale = [[0,255,255],[255,255,255]]  
        //                        r, g , b     r , g , b
        //                       [minBound  ,    MaxBound]

        for (let element of simultaneousHighlight) {
            if (element === null) {
                nullFound = true;
                continue;
            }
            let targetKey = docElement.getElementById(element);

            if (targetKey) {
                if (!nullFound) {
                    nullIndex += 1;
                }
                index += 1;

                currentKeys.push(targetKey);

                //Create colour - the closer it is to being the next key, the closer the colour is the min bound
                const SCALE_FACTOR = 1.3
                const red = succeedingScale[0][0] + (succeedingScale[1][0] - succeedingScale[0][0]) * (-(1 / ((SCALE_FACTOR * (index) - 1) - nullIndex)) + 1);
                const green = succeedingScale[0][1] + (succeedingScale[1][1] - succeedingScale[0][1]) * (-(1 / ((SCALE_FACTOR * (index) - 1) - nullIndex)) + 1)
                const blue = succeedingScale[0][2] + (succeedingScale[1][2] - succeedingScale[0][2]) * (-(1 / ((SCALE_FACTOR * (index) - 1) - nullIndex)) + 1)
                //https://www.desmos.com/calculator/lnh4xwvosi

                getSvgShape(targetKey).style = nullFound ? `fill:rgb(${Math.round(red)},${Math.round(green)},${Math.round(blue)});stroke:#000000` : "fill:#0088AA;stroke:#000000";
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
    text = text.replace(/  /g, " ").replace(/ /g, "_")

    if (!isNaN(text) && !isNaN(parseFloat(text))) {
        //This is a valid number. If the number is over 9, highlight all numbers present in the string

        let split = text.split("");

        split.forEach((element, index) => {
            try {
                if (LightingKeyboardAliases[element]) {
                    split[index] = LightingKeyboardAliases[element]
                }
            } catch(e) {
                //
            }
        });

        return split;
    }

    switch (text) {
        case "number":
        case "numbers":
            return getNumbers();

        case "softkey":
        case "softkeys":
            return getSoftkeyKeys();

        case "encoderpage":
        case "encoderpages":
            return getEncoderPages();

        case "encoderwheel":
        case "encoderwheels":
            return getEncoderWheels();
    }    
    //Edge cases dealt with, now we can remove slashes from others (like label/note)
    text = text.replace(/\//g, "")

    try {
        if (LightingKeyboardAliases[text]) {
            return LightingKeyboardAliases[text]
        }
    } catch(e) {
        //
    }

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
        "shutter_s4",
        "image_s5",
        "form_s6",
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