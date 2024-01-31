import { createSlice } from "@reduxjs/toolkit";

export const LoadingSlice = createSlice({
  name: "salman",
  initialState: {
    Books:[
      {
        author:"salman",
        title:"DSA",
        isbn:"12345",
        status:"available"
      },
      {
        author:"hunain",
        title:"pyhton",
        isbn:"121111",
        status:"available"
      },
    ],
    CheckInBooks:[],
    foundEle : null,
    book_status : true,
    _:false
  },
  reducers: {
    setBooks: (state, action) => {
      state.Books.push(action.payload);
    },
    delBook: (state, action) => {
      state.Books.splice(action.payload, 1);
    },
    _searchBook: (state, action) => {
      
      state.Books.find((ele)=>{
        if(ele.title == action.payload ){
            state.foundEle = ele
        }
      })

    },
    setCheckIn:(state,action)=>{
      state.CheckInBooks.push(action.payload)
    },
    setAvailable:(state,action)=>{
        state.Books[action.payload.index].status = action.payload.status 
    },
    setCheckIn_book:(state,action)=>{
        state.CheckInBooks.splice(action.payload,1)
    }
  },
});

export const { setBooks, delBook, _searchBook, setAvailable, setCheckIn ,setCheckIn_book } = LoadingSlice.actions;

export default LoadingSlice.reducer;
