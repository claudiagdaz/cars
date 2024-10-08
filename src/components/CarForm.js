import { useDispatch, useSelector } from "react-redux";
import { changeName, changeCost, addCar } from "../store";

function CarForm() {
  const dispatch = useDispatch();
  const { name, cost } = useSelector((state) => {
    return state.form;
  });

  const handleNameChange = (event) => {
    dispatch(changeName(event.target.value));
  };

  const handleCostChange = (event) => {
    const carCost = parseInt(event.target.value) || 0;
    dispatch(changeCost(carCost));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      addCar({
        name,
        cost,
      })
    );
  };

  return (
    <div className='car-form panel'>
      <h4 className='subtitle is-3'>Añadir vehículo</h4>
      <form onSubmit={handleSubmit}>
        <div className='field-group'>
          <div className='field'>
            <label className='label'>Modelo</label>
            <input
              type='text'
              className='input is-expanded'
              value={name}
              onChange={handleNameChange}
            />
          </div>

          <div className='field'>
            <label className='label'>Precio</label>
            <input
              type='number'
              className='input is-expanded'
              value={cost || ""}
              onChange={handleCostChange}
            />
          </div>
        </div>
        <div className='field'>
          <button className='button is-link'>Añadir</button>
        </div>
      </form>
    </div>
  );
}

export default CarForm;
