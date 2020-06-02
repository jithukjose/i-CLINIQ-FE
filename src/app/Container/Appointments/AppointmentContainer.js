import React, { useEffect, useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import AppointmentList from './AppointmentUI';
// import ModalModule from '../../components/Modal';
import AppointmentDetailModal from '../Appointments/AppointmentDetailModal';
import ActionProceedModal from '../../components/ActionProceedModal';
import PaginationContainer from '../../components/Pagination';
import { fetchAppointmentList, deleteAppointment } from './dux';

import // CardHeader,
// CardTitle,
// Row,
// Form,
// Input,
// FormGroup,
// CardBody,
// Col,
// ModalBody,
'reactstrap';

const AppointmentContainer = () => {
  const [isModalopen, setModal] = useState(false);
  const [confirmModal, setConfirmModal] = useState(false);
  const [filteredDetail, setFilteredDetail] = useState([{}]);
  const [deleteId, setDeleteId] = useState();
  // const [updatedName, setUpdatedName] = useState();
  // // const [medBeforeEdit, SetMedBeforeEdit] = useState();

  const appointmentList = useSelector(
    (state) => state.appointmentReducer.appointmentList
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAppointmentList);
    // eslint-disable-next-line
  }, []);
  const onDetailClick = useCallback(
    (event, id) => {
      setModal((prev) => !prev);
      const details =
        appointmentList &&
        appointmentList.records.filter((listItem) => listItem.id === id);

      setFilteredDetail(details);
    },
    // eslint-disable-next-line
    [appointmentList]
  );

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

  // //on delete button click
  const onDeleteClick = useCallback((event, id) => {
    setConfirmModal((prev) => !prev);
    setDeleteId(id);
  }, []);
  // //conformation for delete click
  const onYesBtnClick = useCallback(
    () => {
      dispatch(deleteAppointment(deleteId));
      setConfirmModal((prev) => !prev);
      dispatch(fetchAppointmentList);
    },
    // eslint-disable-next-line
    [deleteId, fetchAppointmentList] // add as a dependency here
  );

  const onCancelClick = () => {
    if (isModalopen === true) {
      setModal(!isModalopen);
    } else if (confirmModal === true) {
      setConfirmModal((prev) => !prev);
    }
  };
  // const onAddMedicineClick = () => {
  //   setModal((prev) => !prev);
  // };

  return (
    <>
      <div className='content'>
        <AppointmentList
          appointmentList={appointmentList}
          onDetailClick={onDetailClick}
          onDeleteClick={onDeleteClick}
        />
        <AppointmentDetailModal
          setModal={isModalopen}
          onCancelClick={onCancelClick}
          filteredDetail={filteredDetail}
          appointmentList={appointmentList}
        />
        {/* <MedicineList
          appointmentList={appointmentList}
          onUpdateClick={onUpdateClick}
          onDeleteClick={onDeleteClick}
          onAddMedicineClick={onAddMedicineClick}
        /> */}
        <PaginationContainer />
        {/* <ModalModule
          Children={Children}
          setModal={isModalopen}
          // onCancelClick={onCancelClick}
          // onUpdateClick={onUpdateClick}
          // onAddMedicineClick={onAddMedicineClick}
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

export default AppointmentContainer;
