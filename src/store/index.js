import { configureStore } from '@reduxjs/toolkit';
import { changeName, changeCost, formReducer } 
from './slices/formSlice';
import { changeSearchTerm, addCar, removeCar, carsReducer } from './slices/carSlice';

const store = configureStore({
    reducer: {
        form: formReducer,
        cars: carsReducer
    }
});

export { 
    store, 
    changeCost, 
    changeName, 
    changeSearchTerm, 
    addCar, 
    removeCar
}