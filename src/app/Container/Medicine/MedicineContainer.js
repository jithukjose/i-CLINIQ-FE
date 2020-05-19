import React, { useState, useEffect } from 'react';

import MedicineList from './MedicineUI';

const MedicineContainer = () => {
  const [medicineLists, setMedicineList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/medicines')
      .then((response) => response.json())
      .then((medicineList) => {
        console.log(medicineList.records[0].name, '22222222');

        setMedicineList(medicineList);
      });
  }, []);
  return <MedicineList medicineList={medicineLists} />;
};
export default MedicineContainer;
