import React, { useEffect, useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import MedicineTestList from './MedicalTestUI';
import ModalModule from '../../components/Modal';
import ActionProceedModal from '../../components/ActionProceedModal';
import PaginationContainer from '../../components/Pagination';
import { fetchMedicineTestList, deleteTests } from './dux';

import {
  CardHeader,
  CardTitle,
  Row,
  Form,
  Input,
  FormGroup,
  CardBody,
  Col,
  ModalBody,
} from 'reactstrap';

const MedicalTestContainer = () => {
  const [isModalopen, setModal] = useState(false);
  const [confirmModal, setConfirmModal] = useState(false);
  const [deleteId, setDeleteId] = useState();
  const [updatedName, setUpdatedName] = useState();
  const [medBeforeEdit, SetMedBeforeEdit] = useState();

  const medicalTestList = useSelector(
    (state) => state.testsReducer.medicalTestList
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMedicineTestList);
    // eslint-disable-next-line
  }, []);

  const onUpdateClick = useCallback(
    (event, id) => {
      setModal((prev) => !prev);

      const updatedItem =
        medicalTestList &&
        medicalTestList.records.filter((listItem) => listItem.id === id);
      // dispatch(editMedicine(updatedItem[0].id));
      const medicineName = updatedItem[0].name;

      SetMedBeforeEdit(medicineName);
    },
    // eslint-disable-next-line
    [medicalTestList]
  );
  const onEditChangeHandler = useCallback((e) => {
    setUpdatedName(e.target.value);
  }, []);

  //on delete button click
  const onDeleteClick = useCallback((event, id) => {
    setConfirmModal((prev) => !prev);
    setDeleteId(id);
  }, []);
  //conformation for delete click
  const onYesBtnClick = useCallback(
    () => {
      dispatch(deleteTests(deleteId));
      setConfirmModal((prev) => !prev);
      dispatch(fetchMedicineTestList);
    },
    // eslint-disable-next-line
    [deleteId, fetchMedicineTestList] // add as a dependency here
  );

  const onCancelClick = () => {
    if (isModalopen === true) {
      setModal(!isModalopen);
    } else if (confirmModal === true) {
      setConfirmModal((prev) => !prev);
    }
  };
  const onAddMedicineClick = () => {
    setModal((prev) => !prev);
  };

  const Children = () => {
    return (
      <ModalBody style={{ fontFamily: 'Varela Round' }}>
        <CardHeader>
          <CardTitle tag='h3'> Update Medicine Name</CardTitle>
        </CardHeader>
        <CardBody>
          <Form>
            <Row>
              <Col className='pr-1' md='10'>
                <FormGroup>
                  <label>Medicine Name </label>
                  <Input
                    defaultValue={medBeforeEdit}
                    placeholder='Medicine Name'
                    type='text'
                    onChange={(e) => onEditChangeHandler(e)}
                    // key={index}
                  />
                </FormGroup>
              </Col>
            </Row>
          </Form>
        </CardBody>
      </ModalBody>
    );
  };

  return (
    <>
      <div className='content'>
        <MedicineTestList
          medicalTestList={medicalTestList}
          onUpdateClick={onUpdateClick}
          onDeleteClick={onDeleteClick}
          onAddMedicineClick={onAddMedicineClick}
        />
        <PaginationContainer />
        <ModalModule
          Children={Children}
          setModal={isModalopen}
          onCancelClick={onCancelClick}
          onUpdateClick={onUpdateClick}
          onAddMedicineClick={onAddMedicineClick}
        />
        <ActionProceedModal
          setModal={confirmModal}
          onCancelClick={onCancelClick}
          onYesBtnClick={onYesBtnClick}
        />
      </div>
    </>
  );
};

export default MedicalTestContainer;
