export const possibleUriArgs = { //The name of the arg, and whether or not it is enabled
    printer: pageNoPrinterSetting != "true"
}

export const validReqArgs = {};

export const rawReqArgs = {};
    
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

        rawReqArgs[split[0] = split[1]]
    }
}