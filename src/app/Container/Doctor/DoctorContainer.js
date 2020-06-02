import React, { useEffect, useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import DoctorDetail from './DoctorUI';
import DoctorDetailModal from './DoctorDetailModal';
// import ModalModule from '../../components/Modal';
import ActionProceedModal from '../../components/ActionProceedModal';
import PaginationContainer from '../../components/Pagination';
import { fetchDoctorAppointment, deleteDoctorDetail } from './dux';

const DoctorContainer = () => {
  const [isModalopen, setModal] = useState(false);
  const [filteredDetail, setFilteredDetail] = useState([{}]);
  // const [isModalopen, setModal] = useState(false);
  const [confirmModal, setConfirmModal] = useState(false);
  const [deleteId, setDeleteId] = useState();
  // const [updatedName, setUpdatedName] = useState();
  // const [medBeforeEdit, SetMedBeforeEdit] = useState();

  const doctorAppointmentList = useSelector(
    (state) => state.doctorReducer.doctorAppointment
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDoctorAppointment);
    // eslint-disable-next-line
  }, []);

  const statusCount =
    doctorAppointmentList &&
    doctorAppointmentList.records &&
    doctorAppointmentList.records.map((list) => {
      if (list.user_test.length === 0) {
        const count = 0;
        return count;
      } else {
        var pendingCount = 0;
        list.user_test.map((appointmentList) => {
          if (appointmentList.status === 'pending') {
            pendingCount = pendingCount + 1;
          }
          return pendingCount;
        });
      }
      return pendingCount;
    });
  const onDetailClick = useCallback(
    (event, id) => {
      setModal((prev) => !prev);
      const details =
        doctorAppointmentList &&
        doctorAppointmentList.records.filter((listItem) => listItem.id === id);
      setFilteredDetail(details);
    },
    // eslint-disable-next-line
    [doctorAppointmentList]
  );
  const onCancelClick = () => {
    if (isModalopen === true) {
      setModal(!isModalopen);
    } else if (confirmModal === true) {
      setConfirmModal((prev) => !prev);
    }
  };
  // const onUpdateClick = useCallback(
  //   (event, id) => {
  //     setModal((prev) => !prev);

  //     const updatedItem =
  //       medList && medList.records.filter((listItem) => listItem.id === id);
  //     // dispatch(editMedicine(updatedItem[0].id));
  //     const medicineName = updatedItem[0].name;

  //     setUpdatedName(medicineName);
  //   },
  //   // eslint-disable-next-line
  //   [medList]
  // );
  // const onEditChangeHandler = useCallback((e) => {
  //   setUpdatedName(e.target.value);
  //   console.log(setUpdatedName, 'ppppppp');
  // }, []);

  //on delete button click
  const onDeleteClick = useCallback((event, id) => {
    setConfirmModal((prev) => !prev);
    setDeleteId(id);
  }, []);
  //conformation for delete click
  const onYesBtnClick = useCallback(
    () => {
      dispatch(deleteDoctorDetail(deleteId));
      setConfirmModal((prev) => !prev);
      dispatch(fetchDoctorAppointment);
    },
    // eslint-disable-next-line
    [deleteId, fetchDoctorAppointment] // add as a dependency here
  );

  // const onAddMedicineClick = () => {
  //   setModal((prev) => !prev);
  // };

  return (
    <>
      <div className='content'>
        <DoctorDetail
          doctorAppointmentList={doctorAppointmentList}
          statusCount={statusCount}
          onDetailClick={onDetailClick}
          onDeleteClick={onDeleteClick}
        />
        <DoctorDetailModal
          setModal={isModalopen}
          onCancelClick={onCancelClick}
          filteredDetail={filteredDetail}
        />

        <PaginationContainer />
        {/* <ModalModule
          Children={Children}
          setModal={isModalopen}
          onCancelClick={onCancelClick}
          onUpdateClick={onUpdateClick}
          onAddMedicineClick={onAddMedicineClick}
        /> */}
        <ActionProceedModal
          setModal={confirmModal}
          onCancelClick={onCancelClick}
          onYesBtnClick={onYesBtnClick}
        />
      </div>
    </>
  );
};

export default DoctorContainer;
