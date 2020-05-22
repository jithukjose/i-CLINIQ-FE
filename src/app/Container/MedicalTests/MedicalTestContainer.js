import React from 'react';

// reactstrap components
import { Card, CardHeader, Table, Row, Media, Button } from 'reactstrap';

class MedicalTestContainer extends React.Component {
  render() {
    return (
      <>
        <div className='content'>
          <div>
            {' '}
            <Button
              block
              color='primary'
              //   onClick={() => this.notify('tr')}
              style={{ width: '20%' }}
            >
              Add Medical Tests
            </Button>
          </div>
          <div>
            <Row>
              <div className='col'>
                <Card className='shadow'>
                  <CardHeader className='border-0'>
                    <h3 className='mb-0'>Medical Tests</h3>
                  </CardHeader>
                  <Table className='align-items-center table-flush' responsive>
                    <thead className='thead-light'>
                      <tr>
                        <th scope='col'>Name</th>

                        <th scope='col' />
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope='row'>
                          <Media className='align-items-center'>
                            <Media>
                              <span className='mb-0 text-sm'>
                                Argon Design System
                              </span>
                            </Media>
                          </Media>
                        </th>
                      </tr>
                    </tbody>
                  </Table>
                </Card>
              </div>
            </Row>
          </div>
        </div>
      </>
    );
  }
}
export default MedicalTestContainer;
