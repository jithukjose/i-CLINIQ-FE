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

const MedicineList = ({ medicineList, onEditClick }) => {
  const renderMedicine =
    medicineList &&
    medicineList.records &&
    medicineList.records.map((list) => (
      <tr>
        <th scope='row'>
          <Media className='align-items-center'>
            <Media>
              <span className='mb-0 text-sm'>{list.name}</span>
            </Media>
          </Media>
        </th>
        <td className='text-right'>
          <UncontrolledDropdown>
            <DropdownToggle
              className='btn-icon-only text-light'
              href='#pablo'
              role='button'
              size='sm'
              color=''
              onClick={(e) => e.preventDefault()}
            >
              <i className='fas fa-ellipsis-v' />
            </DropdownToggle>
            <DropdownMenu className='dropdown-menu-arrow' right>
              <DropdownItem onClick={(e) => onEditClick(e, list.id)}>
                Update
              </DropdownItem>
              <DropdownItem onClick={(e) => e.preventDefault()}>
                Delete
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </td>
      </tr>
    ));
  return (
    <>
      <div>
        <Button
          block
          color='primary'
          //   onClick={() => this.notify('tr')}
          style={{ width: '20%' }}
        >
          Add Medicine
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

                    <th scope='col' />
                  </tr>
                </thead>
                <tbody>{renderMedicine}</tbody>
              </Table>
            </Card>
          </div>
        </Row>
      </div>
    </>
  );
};
export default MedicineList;
