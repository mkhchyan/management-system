import axios from "axios";
import { put, take, takeEvery } from 'redux-saga/effects'
import { setGroup } from "./groups/action";

const Axios = axios.create({
	withCredentials: true
})

function* getGroup({ navigate, location }) {
	// const result = yield Axios.post("http://localhost:5000/getGroup")

	// if ("group" in result.data) {
	// 	yield put(setGroup(result.data.group))
	// } 
	// console.log(result.data)
    console.log("Saga works")
}



export function* rootSaga(){
    // console.log('OK')
	yield takeEvery("GET_GROUP", getGroup)

}