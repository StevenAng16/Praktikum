import {createSlice} from '@reduxjs/toolkit'
import { v4 as uuidv4} from 'uuid';

const initialValue = [
    {
        id: uuidv4(),
        title: "Mengerjakan Exercise",
        completed: true
    },
    {
        id: uuidv4(),
        title: "Mengerjakan Assignment",
        completed: false
    },
]

export const JudulSlice = createSlice ({
    name: "judul",
    initialState: {
        Judul: initialValue
    },
    reducers:{
        hapusJudul: (state, action) => {
            state.Judul = state.Judul.filter((item) => {
                return item.id !== action.payload
            })
        },
        tambahJudul: (state, action) => {
            const newData = {
                id: uuidv4(),
                ...action.payload,
            }
            state.Judul = [...state.Judul,newData]
        }
    }
})

export const {hapusJudul, tambahJudul, incrementByAmount} =JudulSlice.actions;
export default JudulSlice.reducer