import { put, takeEvery } from 'redux-saga/effects';
import getByCustomAPI from '../fetchAPI/GetByCustomAPI';
import * as type from '../constants';

function* getListFolder(param) {
      try {
            let res1 = yield getByCustomAPI(param.payload);
            yield put({
                  type: type.GET_LIST_FOLDER_SUCSESS,
                  payload: res1
            })
      } catch (error) {
            yield put({
                  type: type.GET_API_RFAILURE,
                  payload: {
                        errorMessage: error.Message
                  }
            })
      }
}



function* clickNewTag(param) {
      try {
            let res1 = yield getByCustomAPI(type.URL_TAG_CLOUDIARY+param.payload+".json");
            yield put({
                  type: type.CLICK_NEW_TAG_SUCSESS,
                  payload: res1
            })
      } catch (error) {
            yield put({
                  type: type.GET_API_RFAILURE,
                  payload: {
                        errorMessage: error.Message
                  }
            })
      }
}


export const HomeSaga = [

      takeEvery(type.GET_LIST_FOLDER_REQUEST, getListFolder),
      takeEvery(type.CLICK_NEW_TAG_REQUEST, clickNewTag),

];   