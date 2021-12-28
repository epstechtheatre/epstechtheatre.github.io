import {validReqArgs} from "./uriArgs.js"

const KEYBOARD_SVG_FADE_TIME = 150;
const EDGE_BUFFER = 5;

$( document ).ready(function() {
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
})

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

    keyID = keyID.toString().replace(/({|}|[|]| )/g, "").toLowerCase()

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
            return showNewKey(pageObj, "softkey", View)
        } else {
            targetKey = docElement.getElementById(searchElement)

            if (targetKey) {
                currentKeys.push(targetKey)
                getSvgShape(targetKey).style = "fill:lime;stroke:#000000"
            }
        }
    }

    const smallScreenCorrection = View.scrollWidth >= window.screen.width - 1

    if (smallScreenCorrection) {
        View.style.left = `${View.offsetLeft - (View.getBoundingClientRect().right - window.screen.width)}px`
    } else {
        if (View.getBoundingClientRect().right > window.screen.width ) {
            View.style.left = `${View.offsetLeft - (View.getBoundingClientRect().right - window.screen.width) - EDGE_BUFFER}px`
        } 
    
        if (View.getBoundingClientRect().left < 0) {
            View.style.left = `${View.offsetLeft - (View.getBoundingClientRect().left) + EDGE_BUFFER}px`
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