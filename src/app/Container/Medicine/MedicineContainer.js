import React, { useEffect, useCallback, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import MedicineList from './MedicineUI';
import { fetchMedicineList, editMedicine } from './dux';
import DeleteModalModule from '../../components/Modal';
import PaginationContainer from '../../components/Pagination';
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
  const [modal, setModal] = useState(false);

  const medList = useSelector((state) => state.medicineReducer.MedicineList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMedicineList);
    // eslint-disable-next-line
  }, []);

  const onEditClick = useCallback(
    (event, id) => {
      setModal(!modal);
      dispatch(editMedicine, id);
      console.log(medList, 'test');

      // medList && medList.records.map((list) => console.log(list, 'llll'));
    },
    // eslint-disable-next-line
    []
  );
  const onCancelClick = () => {
    setModal(!modal);
  };
  const children = () => {
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
                    defaultValue='Tim'
                    placeholder='Medicine Name'
                    type='text'
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
        <MedicineList medicineList={medList} onEditClick={onEditClick} />
        <PaginationContainer />
        <DeleteModalModule
          children={children}
          setModal={modal}
          onCancelClick={onCancelClick}
        />
      </div>
    </>
  );
};

export default MedicineContainer;
