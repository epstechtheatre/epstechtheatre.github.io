var Svgholder;

if (!Svgholder) {
    Svgholder = class svgholder {
        constructor(highlight, objectID) {
            this.highlight = highlight
            this.objectID = objectID

            this.svgholder = document.getElementById(objectID)
            this.createCallbackEvent()
        }

        createCallbackEvent() {
            let Me = this
            function callbackRouter() {
                Me.loadHandler(this)
            }

            this.svgholder.addEventListener("load", callbackRouter, false)
        }
    
        loadHandler(doc) {
            let searchElement = this.parseHighlight()

            if (searchElement === "softkey") {
                for (let sk of getSoftkeys()) {
                    doc.contentDocument.getElementById(sk).children[1].style = "fill:lime"
                }
            } else {
                doc.contentDocument.getElementById(searchElement).children[1].style = "fill:lime"
            }
        }
    
        parseHighlight() {
            let text = this.highlight.toLowerCase()
            text = text.replace(" ", "").replace("_", "")
    
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

                case "softkey":
                    return "softkey"

                case "label":
                case "note":
                case "notelabel":
                    return "labelnote"

                default:
                    break;
            }    
            //Edge cases dealt with, now we can remove slashes from others (like label/note)
    
            text = text.replace("/", "")
    
            return text;
        }
    }
}

new Svgholder(document.currentScript.getAttribute("highlightText"), document.currentScript.getAttribute("objectID"))

function getSoftkeys() {
    return [
        "s1",
        "s2",
        "s3",
        "s4",
        "s5",
        "s6"
    ]
}