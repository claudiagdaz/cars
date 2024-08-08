import { createSlice, nanoid } from "@reduxjs/toolkit";

const carsSlice = createSlice({
    name: 'cars',
    initialState: {
        searchTerm: '',
        carList: []
    },
    reducers: {
        changeSearchTerm(state, action){
            state.searchTerm = action.payload
        },
        addCar(state, action){
          //Assumption: action.payload === {name: 'xyz', cost: 123}
            state.carList.push({ 
                name: action.payload.name,
                cost: action.payload.cost,
                id: nanoid()
            });
        },
        removeCar(state, action){
            const index = state.carList.indexOf(action.payload.id)
            state.carList.splice(index, 1)
            // const updated = state.carList.filter((car) => {
            //     return car.id !== action.payload
            // });
            // state.carList = updated;

        }
    }
});

export const { changeSearchTerm, addCar, removeCar } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
