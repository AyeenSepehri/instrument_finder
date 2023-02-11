import { configureStore } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

//datas of questions section 
const questionDatas = [
    // {
    //   id: Math.random(),
    //   number: 1,
    //   type: "INPUT",
    //   questionContent: "لطفا ایمیل خود را وارد کنید:",
    //   userAnswer: "",
    // } ,
    // {
    //   id: Math.random(),
    //   number: 2,
    //   type: "INPUT",
    //   questionContent: "لطفا شماره تماس خود را وارد کنید:",
    //   userAnswer: "",
    // },
    // {
    //   id: Math.random(),
    //   number: 4,
    //   type: "RADIO",
    //   questionContent: "لطفا جنسیت خود را تعیین کنید",
    //   answers: ["مرد"  , "زن" , "سایر"],
    //   userAnswer: "",
    // },
    // {
    //   id: Math.random(),
    //   number: 3,
    //   type: "DROP_DOWN",
    //   questionContent:"لطفا تاریخ تولد خود را وارد کنید",
    //   userAnswer: '' , 
    // },

    {
      id: Math.random(),
      number: 1,
      type: "Drop_Down",
      caption: "لطفا ساز مورد نظر خود را انتخاب کنید:",
      options: [{
        name: "گیتار",
        priceRange: [1 , 10]
      } , 
      {
        name: "ویولن",
        priceRange: [2 , 20]
      } , 
    {
      name: "پیانو",
      priceRange: [3 , 30]
    }],
      nextBtnDisable: true
    },
    {
      id: Math.random(),
      number: 2,
      type: "Range",
      caption: "لطفا حدود قیمت ساز مورد نظر خود را وارد کنید:" ,
      values:[],
    }
  ]
  

const initialState = {
    index: 0,
    datas: questionDatas,
    currensObject: {},
    currentInstrument: []
}

export const questionSlice = createSlice({
    name: "question",
    initialState,
    reducers: {
      nextButton(state) {
        state.index += 1
        console.log(state.index)
      },
      previewButton(state) {
        state.index -= 1
      },
      currentInstrument(state , action) {
        state.currentInstrument = action.payload
        console.log(state.currentInstrument)
      }
    }
})

export const { nextButton , previewButton , currentInstrument } = questionSlice.actions;

export const store = configureStore({
    reducer: {
        questions: questionSlice.reducer
    },
})