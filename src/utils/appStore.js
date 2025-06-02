import { configureStore } from "@reduxjs/toolkit";
import MenuSlice from "./MenuSlice"
import SearchSlice from "./SearchSlice"
import ChatSlice from "./ChatSlice"

const appStore = configureStore({
    reducer:{
        menu : MenuSlice,
        search: SearchSlice,
        chat: ChatSlice,
    }
})

export default appStore