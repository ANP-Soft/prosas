import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import validator from 'validator';
import GoogleLogin from 'react-google-login';
import { FacebookProvider, Login } from 'react-facebook';
// import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

// import { RecaptchaComponent } from './RecaptchaComponent';
import { startFacebookLogin, startGoogleLogin, startLogin } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';
import './style.css';


export const LoginScreen = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formLoginValues, handleLoginInputChange] = useForm({
      fEmail: '',
      fPassword: ''
  });

  const { fEmail, fPassword } = formLoginValues;

  const handleGoogleLogin = ( response ) => {
    // console.log(response);
    const { tokenId } = response;
    dispatch( startGoogleLogin(tokenId) );
  };

  const handleFacebookLogin = ( response ) => {
    // console.log(response);
    const { accessToken } = response.tokenDetail;
    const { name, email } = response.profile;
    dispatch( startFacebookLogin(accessToken, name, email) );
  };

  const handleRegister = () => {
    navigate('/register', { replace: true });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if( !validator.isEmail( fEmail ))
        return Swal.fire('Error', 'El correo es inválido', 'error')
        
    // const { ok, msg } = await checkReCaptchaV3(localStorage.getItem('reCaptchaToken'));
    // console.log(ok, msg);
    // if (!ok) {
    //   return Swal.fire('Error', 'Es muy probable que seas un robot, no puedes continuar', 'error'); 
    // }

    dispatch( startLogin( fEmail, fPassword ) );
  };


  return (
      <section className='vh-100 gradient-custom'>
        <div className='container py-5 h-100'>
          <div className='row d-flex justify-content-center align-items-center h-100'>
            <div className='col-12 col-md-8 col-lg-6 col-xl-5'>
            <div className='card bg-dark text-white' >
                <div className='card-body p-5 text-center'>

                  <div className='mb-md-5 mt-md-4 pb-5'>

                    <h2 className='fw-bold mb-2 text-uppercase'>Login</h2>
                    <p className='text-white-50 mb-5'>Por favor ingresa tu usuario y contraseña</p>
                    
                    <form onSubmit={handleLogin}>  
                      <div className='form-floating form-outline mb-4'>
                        <input
                          type='email'
                          className='form-control form-control-lg bg-dark text-white'
                          id='floatingEmail'
                          placeholder='name@example.com'
                        
                          name='fEmail'
                          value={ fEmail }
                          onChange={ handleLoginInputChange }
                        ></input>
                        <label htmlFor='floatingEmail'>Email</label>
                      </div>

                      <div className='form-floating form-outline mb-4'>
                        <input
                          type='password'
                          className='form-control form-control-lg bg-dark text-white'
                          id='floatingPassword'
                          placeholder='Password'

                          name='fPassword'
                          value={ fPassword }
                          onChange={ handleLoginInputChange }
                        ></input>
                        <label htmlFor='floatingPassword'>Contraseña</label>
                      </div>
                    {/* <div className='d-flex justify-content-center mb-3'>
                      <GoogleReCaptchaProvider reCaptchaKey={ process.env.REACT_APP_RECAPTCHAV3_CLIENT }>
                        <RecaptchaComponent />
                      </GoogleReCaptchaProvider>
                    </div> */}

                      <p className='small mb-4 pb-lg-2'><a className='text-white-50' href='#!'>¿Olvidaste tu contraseña?</a></p>
                      <button className='btn btn-outline-light btn-lg px-5' type='submit'>Ingresar</button>
                    </form>
                    
                    <p className='text-white-50 mt-4'>También puedes ingresar con RRSS</p>
                    <div className='d-flex justify-content-center text-center pt-1'>
                      <GoogleLogin 
                        clientId={ process.env.REACT_APP_GOOGLE_CLIENT }
                        buttonText="Login with Google"
                        onSuccess={ handleGoogleLogin }
                        onFailure={ handleGoogleLogin }
                        cookiePolicy={'single_host_origin'}
                        isSignedIn={ false }
                        render={renderProps => (
                          <div className='text-white mx-4 btn' onClick={renderProps.onClick}>
                            <i className='fab fa-google fa-lg'></i>
                          </div>
                        )}
                      />
                      
                      <FacebookProvider appId={ process.env.REACT_APP_FACEBOOK_CLIENT }>
                        <Login
                          scope="email"
                          onCompleted={ handleFacebookLogin }
                          onError={ handleFacebookLogin }
                        >
                          {({ loading, handleClick, error, data }) => (
                            <div className='text-white mx-4 btn' onClick={ handleClick }>
                              <i className='fab fa-facebook-f fa-lg'></i>
                            </div>
                          )}
                        </Login>
                      </FacebookProvider>
                      
                    </div>

                  </div>
                  <div>
                    <p className='mb-0 d-inline'>¿No tienes una cuenta? </p><div onClick={ handleRegister } className='text-white-50 fw-bold text-decoration-underline pointer d-inline'>Registrate</div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}
