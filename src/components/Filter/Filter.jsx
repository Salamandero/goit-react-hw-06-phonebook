import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { FindByName, FilterInput } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);
  const onChange = e => {
    dispatch(setFilter(e.target.value));
  };
  return (
    <FindByName>
      Find contact by name:
      <FilterInput type="text" value={filter} onChange={onChange} />
    </FindByName>
  );
};

export default Filter;
