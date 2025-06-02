import { createSlice } from "@reduxjs/toolkit";

const MenuSlice = createSlice({
    name:"menu",
    initialState:{
        isMenuOpen: true
    },
    reducers: {
        ToggleMenu: (state,action) => {
            state.isMenuOpen = !state.isMenuOpen
        },
        CloseMenu:(state) => {
            state.isMenuOpen =false
        }
    }
})
export const {ToggleMenu , CloseMenu} = MenuSlice.actions
export default MenuSlice.reducer