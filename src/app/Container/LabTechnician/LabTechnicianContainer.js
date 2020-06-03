import React, { useEffect, useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import LabTechnicianDetail from './LabTechnicianUI';
import LabTechnicianDetailModal from './LabTechnicianDetailsModal';
// import ModalModule from '../../components/Modal';
import ActionProceedModal from '../../components/ActionProceedModal';
import PaginationContainer from '../../components/Pagination';
import { fetchLabAppointment, deleteLabTechnician } from './dux';

const DoctorContainer = () => {
  const [isModalopen, setModal] = useState(false);
  const [filteredDetail, setFilteredDetail] = useState([{}]);
  const [confirmModal, setConfirmModal] = useState(false);
  const [deleteId, setDeleteId] = useState();

  // const [updatedName, setUpdatedName] = useState();
  // const [medBeforeEdit, SetMedBeforeEdit] = useState();

  const labTechnicianAppointmentList = useSelector(
    (state) => state.labtechnicianReducer.labTechnicianDetails
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLabAppointment);
    // eslint-disable-next-line
  }, []);

  const onDetailClick = useCallback(
    (event, id) => {
      setModal((prev) => !prev);
      const details =
        labTechnicianAppointmentList &&
        labTechnicianAppointmentList.records.filter(
          (listItem) => listItem.id === id
        );
      setFilteredDetail(details);
    },
    // eslint-disable-next-line
    [labTechnicianAppointmentList]
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
      dispatch(deleteLabTechnician(deleteId));
      setConfirmModal((prev) => !prev);
      dispatch(fetchLabAppointment);
    },
    // eslint-disable-next-line
    [deleteId, fetchLabAppointment] // add as a dependency here
  );

  // const onAddMedicineClick = () => {
  //   setModal((prev) => !prev);
  // };

  return (
    <>
      <div className='content'>
        <LabTechnicianDetail
          labTechnicianAppointmentList={labTechnicianAppointmentList}
          onDetailClick={onDetailClick}
          onDeleteClick={onDeleteClick}
        />

        <LabTechnicianDetailModal
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
