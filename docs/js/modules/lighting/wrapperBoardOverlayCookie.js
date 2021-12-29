import { checkIfCookieExists, deleteCookie, getCookie, setCookie } from "../cookie.js";

const COOKIE_NAME = "lightingBoardOverlayPreference"
export function checkIfPreference() {
    return checkIfCookieExists(COOKIE_NAME)
}

export function getPreference() {
    return getCookie(COOKIE_NAME)
}

export function setPreference(value) {
    return setCookie(COOKIE_NAME, value, 30)
}

export function deletePreference() {
    return deleteCookie(COOKIE_NAME)
}