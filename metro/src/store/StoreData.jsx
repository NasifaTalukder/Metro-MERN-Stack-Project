import {create} from "zustand";

const ProductStore = create((set)=>(
    {
        product:[],
        AddProduct:(data)=>{
            set((state)=>({
                product:data
            }))
        }
    }
))

export {ProductStore};