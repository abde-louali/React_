const { createSlice, configureStore } = require("@reduxjs/toolkit");


const prdslice = createSlice({
    name:'produit',
    initstate:[
        {code:1,libelle:'telaja'},
        {code:2,libelle:'telfaza'},
        {code:3,libelle:'feraan'}
    ],
    reducer:{
        addProduct:(state,action)=>state.push(action.payload),
        delProduct:(state,action)=>state,
        updateProduct:(state,action)=>state
    }
})


const stor = configureStore({
    reducer:{
        reducer:prdslice.reducer
    }
   
})

