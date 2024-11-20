import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";

// action return promise
// createAsyncThunk
export const fetchProducts =createAsyncThunk("products/fetchProducts",async ()=>{
    const result = await axios.get("https://dummyjson.com/products")
   // console.log(result.data.products);
   sessionStorage.setItem("allProducts",JSON.stringify(result.data.products))
    return result.data.products
})


const productSlice = createSlice({
  name :'products',
  initialState:{
     allProducts:[],
     dummyAllProducts :[],
     loading:false,
     errorMsg:""
  },
  reducers:{
   searchProduct : (state,actionByHeader)=>{
   state.allProducts= state.dummyAllProducts.filter(item=>item.title.toLowerCase().includes(actionByHeader.payload))
   }
  },
  extraReducers:(builder)=>{
    builder.addCase(fetchProducts.fulfilled,(state,apiResult)=>{
      // reducer function - promise fst case
      state.allProducts = apiResult.payload
      state.dummyAllProducts = apiResult.payload
      state.loading=false
      state.errorMsg=""
    })
    builder.addCase(fetchProducts.pending,(state)=>{
     // promise secnd case pending case doesnt return output
    // loading alwys true when pending cse done
      state.allProducts = []
      state.dummyAllProducts = []
      state.loading=true
      state.errorMsg=""
    })
    builder.addCase(fetchProducts.rejected,(state)=>{
      // promise thrd case rejected case doesnt return output
       state.allProducts = []
       state.dummyAllProducts = []
       state.loading=false
       state.errorMsg="API called failed"
     })
  }
})
export const {searchProduct}= productSlice.actions
export default productSlice.reducer