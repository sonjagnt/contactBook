import s from "./SearchBox.module.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  changeNameFilter,
  changeNumberFilter,
} from "../../redux/filters/slice";
import { selectName, selectNumber } from "../../redux/filters/selectors";

function SearchBox() {
  const dispatch = useDispatch();
  const name = useSelector(selectName);
  const number = useSelector(selectNumber);

  const handleSearchNameChange = (event) => {
    dispatch(changeNameFilter(event.target.value));
  };

  const handleSearchNumberChange = (event) => {
    dispatch(changeNumberFilter(event.target.value));
  };
  return (
    <div className={s.container}>
      <label className={s.searchbox}>
        Find contacts by name
        <input type="text" value={name} onChange={handleSearchNameChange} />
      </label>
      <label className={s.searchbox}>
        Find contacts by number
        <input
          className={s.numberInput}
          type="number"
          value={number}
          onChange={handleSearchNumberChange}
        />
      </label>
    </div>
  );
}

export default SearchBox;
