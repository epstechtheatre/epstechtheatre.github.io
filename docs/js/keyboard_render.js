
var highlight = document.currentScript.getAttribute("highlightText")
var objectID = document.currentScript.getAttribute("objectID")

console.log(highlight)
//console.log(objectID)

var svg = document.getElementById(objectID)

if (svg) {
    console.log("has svg")
}

svg.addEventListener("load", function() {
    var svgDoc = svg.contentDocument.documentElement
    let elements = svgDoc.getElementsByTagName("title")

    for (let e in elements) {
        console.log(elements[e].textContent.toString().toLowerCase().replace(" ", ""))
        if (elements[e].textContent.toString().toLowerCase().replace(" ", "") == highlight.toString().toLowerCase().replace(" ", "")) {
            svgDoc.getElementById(elements[e].parentElement.id).children[1].style = "fill:lime" //Child 1 is always the rectangle element when saved from visio
            //Eventually this should probably set a class so the stylesheet can do the colour
            break;
        }
    }
}, false)