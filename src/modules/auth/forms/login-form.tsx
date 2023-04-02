import React from 'react'
import { MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit'

function LoginForm() {
  return (
    <MDBContainer fluid className='p-3 my-5 h-100'>
      <MDBRow>
        <MDBCol col='10' md='8'>
          <img
            src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg'
            className='img-fluid'
            alt='PhoneImage'
          />
        </MDBCol>

        <MDBCol className='d-flex flex-column justify-content-center align-items-center' col='4' md='4'>
          <MDBInput wrapperClass='mb-4 w-100' label='Email address' id='formControlLg' type='email' size='lg' />
          <MDBInput wrapperClass='mb-4 w-100' label='Password' id='formControlLg' type='password' size='lg' />

          <div className='d-flex justify-content-between mx-4 mb-4 w-100'>
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
            <a href='!#'>Forgot password?</a>
          </div>

          <MDBBtn className='mb-4 w-100' size='lg'>
            Sign in
          </MDBBtn>

          <div className='divider d-flex align-items-center my-4'>
            <p className='text-center fw-bold mx-3 mb-0'>OR</p>
          </div>

          <MDBBtn className='mb-4 w-100' size='lg' style={{ backgroundColor: '#3b5998' }}>
            <MDBIcon fab icon='facebook-f' className='mx-2' />
            Continue with facebook
          </MDBBtn>

          <MDBBtn className='mb-4 w-100' size='lg' style={{ backgroundColor: '#55acee' }}>
            <MDBIcon fab icon='twitter' className='mx-2' />
            Continue with twitter
          </MDBBtn>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}

export default LoginForm
