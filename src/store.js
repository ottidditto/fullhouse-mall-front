import { configureStore, createSlice } from '@reduxjs/toolkit'

/*
- store.js에서 state생성
    - createSlice()로 state생성
    - configureStore()안에 등록
*/

// 이거 안씀 사용 금지
let currentPage = createSlice({
    name: 'currentPage',
    initialState : 'home',
    reducers : {
        changePage(state) {
            return state;
        }
    }
})
export let {changePage} = currentPage.actions;

export default configureStore({
    reducer: { 
        currentPage : currentPage.reducer
    }
})