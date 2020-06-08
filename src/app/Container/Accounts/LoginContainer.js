import React, { useEffect, useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import SectionLogin from './LoginPage';
// import DoctorDetailModal from './DoctorDetailModal';
// import AddDoctorModal from './AddDoctorModal';
// // import ModalModule from '../../components/Modal';
// import ActionProceedModal from '../../components/ActionProceedModal';
// import PaginationContainer from '../../components/Pagination';
import { userLogin } from './dux';

const LoginContainer = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //   const [isModalopen, setModal] = useState(false);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(userLogin);
  //   // eslint-disable-next-line
  // }, []);
  const onLoginClick = (e) => {
    console.log('hereeee');
  };

  return (
    <>
      <div className='content'>
        <SectionLogin
          onLoginClick={onLoginClick}
          // onChangeHandler={onChangeHandler}s
          setPassword={setPassword}
          setEmail={setEmail}
        />
      </div>
    </>
  );
};
export default LoginContainer;
