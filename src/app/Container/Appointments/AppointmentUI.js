import React from 'react';

import {
  Card,
  CardHeader,
  Table,
  Row,
  Badge,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Button,
} from 'reactstrap';

const AppointmentList = ({ appointmentList, onDetailClick, onDeleteClick }) => {
  const renderAppointment =
    appointmentList &&
    appointmentList.records &&
    appointmentList.records.map((list) => (
      <React.Fragment key={list.id}>
        <tr>
          <th scope='row'>
            <Media className='align-items-center'>
              <Media>
                <span className='mb-0 text-sm'>{list.patient.firstName}</span>
              </Media>
            </Media>
          </th>
          <td> {list.patient.user.firstName}</td>
          <td>
            <Badge color='' className='badge-dot mr-4'>
              <i className='bg-warning' />
              {list.createdAt}
            </Badge>
          </td>
          <td>{list.status}</td>

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
                <DropdownItem onClick={(e) => onDetailClick(e, list.id)}>
                  More details
                </DropdownItem>
                <DropdownItem onClick={(e) => e.preventDefault()}>
                  Edit
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
      <div className='content'>
        <div>
          <Button
            block
            color='primary'
            //   onClick={() => this.notify('tr')}
            style={{ width: '20%' }}
          >
            Create Appointment
          </Button>
        </div>
        <div>
          <Row>
            <div className='col'>
              <Card className='shadow'>
                <CardHeader className='border-0'>
                  <h3 className='mb-0'>Appointments</h3>
                </CardHeader>
                <Table className='align-items-center table-flush' responsive>
                  <tbody></tbody>
                  <thead className='thead-light'>
                    <tr>
                      <th scope='col'>Patient Name</th>
                      <th scope='col'>Assigned To</th>
                      <th scope='col'>Created At</th>
                      <th scope='col'>Status</th>

                      <th scope='col' />
                    </tr>
                  </thead>
                  <tbody>{renderAppointment}</tbody>
                </Table>
              </Card>
            </div>
          </Row>
        </div>
      </div>
    </>
  );
};

export default AppointmentList;
