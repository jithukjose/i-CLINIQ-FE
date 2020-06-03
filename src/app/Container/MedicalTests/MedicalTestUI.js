import React from 'react';

// reactstrap components
import {
  Card,
  CardHeader,
  Table,
  Row,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Button,
} from 'reactstrap';

const MedicalTestList = ({ medicalTestList, onDeleteClick, onUpdateClick }) => {
  const renderMedicalTest =
    medicalTestList &&
    medicalTestList.records &&
    medicalTestList.records.map((list) => (
      <React.Fragment key={list.id}>
        <tr>
          <th scope='row'>
            <Media className='align-items-center'>
              <Media>
                <span className='mb-0 text-sm'>{list.name}</span>
              </Media>
            </Media>
          </th>
          <td> {list.createdAt}</td>
          <td className='text-right'>
            <UncontrolledDropdown>
              <DropdownToggle
                className='btn-icon-only text-light'
                role='button'
                size='sm'
                color=''
                // onClick={(e) => e.preventDefault()}
              >
                <i className='fas fa-ellipsis-v' />
              </DropdownToggle>
              <DropdownMenu className='dropdown-menu-arrow' right>
                <DropdownItem onClick={(e) => onUpdateClick(e, list.id)}>
                  Update
                </DropdownItem>
                <DropdownItem onClick={(e) => onDeleteClick(e, list.id)}>
                  Delete
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </td>
        </tr>
      </React.Fragment>
    ));
  return (
    <>
      <div>
        <Button
          block
          color='primary'
          //   onClick={() => this.notify('tr')}
          style={{ width: '20%' }}
          //   onClick={() => onAddMedicineClick()}
        >
          Add TESTS
        </Button>
      </div>
      <div>
        <Row>
          <div className='col'>
            <Card className='shadow'>
              <CardHeader className='border-0'>
                <h3 className='mb-0'>Medicines</h3>
              </CardHeader>
              <Table className='align-items-center table-flush' responsive>
                <thead className='thead-light'>
                  <tr>
                    <th scope='col'>Name</th>
                    <th scope='col'>Created At</th>
                    <th scope='col'></th>
                  </tr>
                </thead>
                <tbody>{renderMedicalTest}</tbody>
              </Table>
            </Card>
          </div>
        </Row>
      </div>
    </>
  );
};
export default MedicalTestList;
