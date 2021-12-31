import {validReqArgs} from "./uriArgs.js";
import {KeyNameAliasDict} from "../../json/key_names_aliases.js";
import { getSvgShape } from "./svg_get_shape.js";
import { getFileNameFromPreference } from "./lighting/apiBoardPref.js";

const KEYBOARD_SVG_FADE_TIME = 150;
const EDGE_BUFFER = 5;

$( document ).ready(function() {
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

        ViewDoWork(pageObj, View, keyID, revertToSoftkey)
    } else {
        View = document.createElement("object")
        View.className = "keyboard-svg-graphic"
        View.data = getFileNameFromPreference(true);
        View.type = "image/svg+xml"
        View.name = "Keyboard Graphic"
    
        pageObj.insertAdjacentElement("afterbegin", View)
        currentGraphic = View;

        View.addEventListener("load", () => {
            ViewDoWork(pageObj, View, keyID, revertToSoftkey)
        })
    }
}

function ViewDoWork(pageObj, View, keyID, revertToSoftkey) {
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
        const simultaneousButtons = pageObj.parentElement.querySelectorAll([".display-button", ".inline-display-button"]);

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

    if (simultaneousHighlight.length > 0) {
        let nullFound = false;
        let nullIndex = 0;
        let index = 0;

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

                const succeedingScale = [[0,255,255],[255,255,255]]  
                //                        r, g , b     r , g , b
                //                       [minBound  ,    MaxBound]

                const red = simultaneousButtonColourGradient(succeedingScale[0][0], succeedingScale[1][0], nullIndex, index);
                const green = simultaneousButtonColourGradient(succeedingScale[0][1], succeedingScale[1][1], nullIndex, index);
                const blue = simultaneousButtonColourGradient(succeedingScale[0][2], succeedingScale[1][2], nullIndex, index);

                // getSvgShape(targetKey).style = nullFound ? `fill:rgb(${red},${green},${blue});stroke:#000000` : "fill:#0088AA;stroke:#000000";
                getSvgShape(targetKey).style = nullFound ? `fill:rgb(${red},${green},${blue});stroke:#000000` : "fill:blue;stroke:#000000";
            }
        }
    }

    if (View.style.opacity !== 100) {
        View.style.transition = `opacity ${KEYBOARD_SVG_FADE_TIME}ms linear`;
        View.style.opacity = 100;
    }
}

function simultaneousButtonColourGradient(minBound, maxBound, asymptoteOffset, index) {
    //https://www.desmos.com/calculator/akipfecugm
    const SCALE_FACTOR = 1.3;
    return Math.round(minBound + (maxBound - minBound) * (-(1 / ((SCALE_FACTOR * (index) - 1) - SCALE_FACTOR * asymptoteOffset + 1)) + 1));
}

function parseHighlight(text) {
    text = text.toString().toLowerCase()
    text = text.replace(/  /g, " ").replace(/ /g, "_")

    if (!isNaN(text) && !isNaN(parseFloat(text))) {
        //This is a valid number. If the number is over 9, highlight all numbers present in the string

        let split = text.split("");

        return split;
    } else {
        text = text.replace(/\//g, "")

        //We might have a situation where we need to do an alias replacement, this can be checked super easily
        let working = text;
        try {
            while (KeyNameAliasDict[working]) {
                //Incase theres something like "colour", which would go
                // "colour" --> "color" --> ["color_s3", "color"]
                working = KeyNameAliasDict[working]
            }
        } catch(e) {
            //
        }

        return working;
    }
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