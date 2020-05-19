import React, { useState, useEffect } from 'react';
import useFetch from '../../Helpers/Custom useFetch()';

import MedicineList from './MedicineUI';

const MedicineContainer = () => {
  const { response, error, loading } = useFetch(
    'http://localhost:5000/api/medicines',
    {}
  );

  if (loading) {
    return <div>Loading...</div>;
  }
  return <MedicineList medicineList={response} />;
};

export default MedicineContainer;
