import { delay, put, takeEvery, all } from "redux-saga/effects";
function* changeCardContentHandler() {
  console.log("redux-saga works and execute the generator");
  // 模擬 call api 兩秒後資料回來
  yield delay(2000);

  // disptach an action to reducer
  yield put({
    type: "changeCardContent",
    payload: {
      name: "Charlie",
      age: 13,
      habbit: "Play ball"
    }
  });
}

function* watchChangeCardContentHandlerSaga() {
  yield takeEvery("CHANGE_CARD_CONTENT", changeCardContentHandler);
}

export function* rootSaga() {
  yield all([watchChangeCardContentHandlerSaga()]);
}
