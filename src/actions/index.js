import * as type from './../constants';

export function getListFolder(payload) {
    return ({ type: type.GET_LIST_FOLDER_REQUEST, payload })
}
export function clickNewTag(payload) {
    return ({ type: type.CLICK_NEW_TAG_REQUEST, payload })
}
export function propToDefault(payload) {
    return ({ type: type.PROP_TO_DEFAULT, payload })
}
