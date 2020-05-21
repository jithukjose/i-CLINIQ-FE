import React, { useEffect, useCallback } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import MedicineList from './MedicineUI';
import { fetchMedicineList } from './dux';
import DeleteModalModule from '../../components/Modal';

const MedicineContainer = () => {
  const medList = useSelector((state) => state.medicineReducer.MedicineList);
  const dispatch = useDispatch();
  // const [medicineLists, setMedicineList] = useState([]);

  useEffect(() => {
    dispatch(fetchMedicineList);
    // eslint-disable-next-line
  }, []);

  const onEditClick = useCallback(
    (event, id) => {
      dispatch(fetchMedicineList, id);
    },
    [dispatch]
  );

  return (
    <>
      <MedicineList medicineList={medList} onEditClick={onEditClick} />
      <DeleteModalModule></DeleteModalModule>
    </>
  );
};

export default MedicineContainer;
