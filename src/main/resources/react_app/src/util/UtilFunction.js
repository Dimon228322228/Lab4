export function getHeightText( font ){

    let text = document.createElement("span");
    text.append("Hg");
    text.style.cssText = ` { fontFamily: font } `
    let block = document.createElement("div");
    block.style.cssText = `{
        display: inline-block;
        width: 1px;
        height: 0;
        }`;

    let div = document.createElement("div");
    div.append(text, block);

    let body = document.getElementsByTagName("body")[0];
    body.appendChild(div);

    let result;
    try {
        result = {};
        block.style.cssText = ` { verticalAlign: 'baseline' } `
        result.ascent = block.offsetTop - text.offsetTop;
        block.style.cssText = `{ verticalAlign: 'bottom' }`
        result.height = block.offsetTop - text.offsetTop;
        result.descent = result.height - result.ascent;
    } finally {
        div.remove();
    }
    return result;
}

export const isNumeric = str => {
    if (typeof str != "string") return false; // we only process strings!
    return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
        !isNaN(parseFloat(str)); // ...and ensure strings of whitespace fail
}