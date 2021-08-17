var getSvgShape = (element) => {
    if (element.target) {
        if (element.target.tagName !== "g") {
            return element.target;
        }
        return element.target.children[1];
    }
    if (element.tagName !== "g") {
        return element;
    }
    return element.children[1];
}