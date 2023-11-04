import {createSlice} from '@reduxjs/toolkit'

const configSlice = createSlice({ 
    name: 'config', 
    initialState: { 
        lang: 'en'
    }, 
    reducers: { 
        changeLaungage: (state, action)  => { 
            state.lang = action.payload
        }
    }
})

export const {changeLaungage} = configSlice.actions
export default configSlice.reducer