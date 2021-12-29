import { checkIfPreference, deletePreference, getPreference, setPreference } from "./wrapperBoardOverlayCookie.js";
    import {validReqArgs} from "../uriArgs.js"

export const storeKeyToPath = {
    "ion": "/images/Lighting/svg/keyboard-overlay-source-ion.svg",
    "ion xe": "/images/Lighting/svg/keyboard-overlay-source-ion-xe.svg",
    "element i": "/images/Lighting/svg/keyboard-overlay-source-element-i.svg",
    "element ii": "/images/Lighting/svg/keyboard-overlay-source-element-ii.svg"
}

export const storeKeyToHumanName = {
    "ion xe": "ETC Ion XE",
    "ion": "ETC Ion",
    "element i": "ETC Element I",
    "element ii": "ETC Element II"
}

const DEFAULT_KEY = "ion xe";
const PREFERENCE_DROPDOWN_KEY = "lightingSelectBoardPreferenceDropdown"

function createPopover(title) {
    return `
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">${title}</h5>
                    <button class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <label for=${PREFERENCE_DROPDOWN_KEY}>Please select what board you are using from the dropdown</label>                
                    <select class="form-control" id=${PREFERENCE_DROPDOWN_KEY}>
                        <option value="ion xe">ETC Ion XE</option>
                        <option value="ion">ETC Ion</option>
                        <option value="element i">ETC Element I</option>
                        <option value="element ii">ETC Element II</option>
                        <option value="unset">Delete my Selection</option>
                    </select>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button class="btn btn-primary" data-dismiss="modal">Save changes</button>
                </div>
            </div>
        </div>
    `
}

export function run() {
    if (validReqArgs["printer"]) return;

    const EL_ID = "updateLightingBoardOverlayPreference"
    const updatePopover = document.createElement("div");
    updatePopover.classList.add("modal", "fade");
    updatePopover.id=EL_ID;
    updatePopover.tabIndex = "-1";
    updatePopover.role = "dialog";
    updatePopover.ariaHidden="true";
    updatePopover.innerHTML = createPopover("Lighting Overlay Preference");


    const activationButton = `<button class="btn btn-default" data-toggle="modal" data-target="#${EL_ID}">click here</button>`

    const prefNote = document.createElement("div")
    prefNote.classList.add("noLightingOverlayCookieWarning")
    prefNote.classList.add("bs-callout")

    if (!checkIfPreference()) {
        prefNote.classList.add("bs-callout-warning")
        prefNote.innerHTML = `<p><b>Note:</b> You haven't set what lighting board you use. For more tailored examples, please ${activationButton} to update this.<br>By default, the wiki will assume you use an ETC Ion XE console.</p>`
    } else {
        prefNote.classList.add("bs-callout-success")
        prefNote.innerHTML = `<p>Your lighting board is currently set to <i>${storeKeyToHumanName[getPreference()]}</i>. If you want to change this, ${activationButton}.`
    }

    document.querySelector(".page-content").prepend(prefNote)
    document.querySelector(".page-content").prepend(updatePopover)

    if (checkIfPreference()) {
        document.getElementById(PREFERENCE_DROPDOWN_KEY).value = getPreference();
    }

    document.querySelector(`#${EL_ID} .btn-primary`).addEventListener("click", () => {
        const value = document.getElementById(PREFERENCE_DROPDOWN_KEY).value;

        if (value === "unset") {
            deletePreference();
        } else {
            setPreference(value);
        }

        window.location.reload();
    })
}

export function getFileNameFromPreference(fallBackToDefault = true) {
    const result = getPreference();

    if ((result === undefined && fallBackToDefault) || storeKeyToPath[result] === undefined) {
        return storeKeyToPath[DEFAULT_KEY];
    }

    return storeKeyToPath[result];
}