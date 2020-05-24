import React, { useEffect, useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import MedicineList from './MedicineUI';
import ModalModule from '../../components/Modal';
import ActionProceedModal from '../../components/ActionProceedModal';
import PaginationContainer from '../../components/Pagination';
import { fetchMedicineList, editMedicine, deleteMedicine } from './dux';

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

const MedicineContainer = () => {
  const [isModalopen, setModal] = useState(false);
  const [confirmModal, setConfirmModal] = useState(false);
  const [deleteId, setDeleteId] = useState();
  const [updatedName, setUpdatedName] = useState();
  const [medBeforeEdit, SetMedBeforeEdit] = useState();

  const medList = useSelector((state) => state.medicineReducer.MedicineList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMedicineList);
    // eslint-disable-next-line
  }, []);

  const onUpdateClick = useCallback(
    (event, id) => {
      setModal((prev) => !prev);

      const updatedItem =
        medList && medList.records.filter((listItem) => listItem.id === id);
      // dispatch(editMedicine(updatedItem[0].id));
      const medicineName = updatedItem[0].name;

      SetMedBeforeEdit(medicineName);
    },
    // eslint-disable-next-line
    [medList]
  );
  const onEditChangeHandler = useCallback((e) => {
    setUpdatedName(e.target.value);
    console.log(setUpdatedName, 'pppppp');
  }, []);

  //on delete button click
  const onDeleteClick = useCallback((event, id) => {
    setConfirmModal((prev) => !prev);
    setDeleteId(id);
  }, []);
  //conformation for delete click
  const onYesBtnClick = useCallback(
    () => {
      dispatch(deleteMedicine(deleteId));
      setConfirmModal((prev) => !prev);
    },
    // eslint-disable-next-line
    [deleteId] // add as a dependency here
  );

  const onCancelClick = () => {
    if (isModalopen === true) {
      setModal(!isModalopen);
    } else if (confirmModal === true) {
      setConfirmModal((prev) => !prev);
    }
  };

  const Children = () => {
    console.log(medBeforeEdit, 'pppppppppppppppp');
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
        <MedicineList
          medicineList={medList}
          onUpdateClick={onUpdateClick}
          onDeleteClick={onDeleteClick}
        />
        <PaginationContainer />
        <ModalModule
          Children={Children}
          setModal={isModalopen}
          onCancelClick={onCancelClick}
          onUpdateClick={onUpdateClick}
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

export default MedicineContainer;
