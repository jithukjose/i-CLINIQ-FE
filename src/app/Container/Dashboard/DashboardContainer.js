import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import DashboardCountUI from './DashboardUI';

import {
  fetchAppointmentCount,
  fetchMedicineCount,
  fetchTestCount,
  fetchDoctorCount,
  fetchLabtechnicianCount,
} from './dux';

const DoctorContainer = () => {
  const appointmentCount = useSelector(
    (state) => state.dashboardReducer.appointmentCount
  );
  const medicineCount = useSelector(
    (state) => state.dashboardReducer.medicineCount
  );
  const testCount = useSelector((state) => state.dashboardReducer.testCount);
  const doctorCount = useSelector(
    (state) => state.dashboardReducer.doctorCount
  );
  const labtechnicianCount = useSelector(
    (state) => state.dashboardReducer.labtechnicianCount
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAppointmentCount);
    dispatch(fetchMedicineCount);
    dispatch(fetchTestCount);
    dispatch(fetchDoctorCount);
    dispatch(fetchLabtechnicianCount);
    // eslint-disable-next-line
  }, []);
  console.log(
    medicineCount &&
      medicineCount.metaData &&
      medicineCount.metaData.totalCount,
    'hereeee'
  );
  const appointmentTotalCount =
    appointmentCount &&
    appointmentCount.metaData &&
    appointmentCount.metaData.totalCount;
  const medicineTotalCount =
    medicineCount &&
    medicineCount.metaData &&
    medicineCount.metaData.totalCount;
  const testTotalcount =
    testCount && testCount.metaData && testCount.metaData.totalCount;
  const doctorTotaCount =
    doctorCount && doctorCount.metaData && doctorCount.metaData.totalCount;
  const labtechnicianTotalCount =
    labtechnicianCount &&
    labtechnicianCount.metaData &&
    labtechnicianCount.metaData.totalCount;
  return (
    <>
      <div className='content'>
        <DashboardCountUI
          appointmentTotalCount={appointmentTotalCount}
          medicineTotalCount={medicineTotalCount}
          testTotalcount={testTotalcount}
          doctorTotaCount={doctorTotaCount}
          labtechnicianTotalCount={labtechnicianTotalCount}
        />
      </div>
    </>
  );
};

export default DoctorContainer;
