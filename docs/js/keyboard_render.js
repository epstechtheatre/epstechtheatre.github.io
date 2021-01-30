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
            doc.contentDocument.getElementById(this.parseHighlight()).children[1].style = "fill:lime"
        }
    
        parseHighlight() {
            let text = this.highlight.toLowerCase()
            text = text.replace(" ", "").replace("_", "")
    
            if (text == ".") {
                return "dot"
            }
    
            if (text == "/") {
                return "slash"
            }
    
            if (text == "+") {
                return "plus"
            }
    
            if (text == "-") {
                return "minus"
            }
    
            //Edge cases dealt with, now we can remove slashes from others (like label/note)
    
            text = text.replace("/", "")
    
            return text;
        }
    }
}

new Svgholder(document.currentScript.getAttribute("highlightText"), document.currentScript.getAttribute("objectID"))
