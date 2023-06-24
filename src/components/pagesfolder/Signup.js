import React from 'react';
import FacebookLogin from 'react-facebook-login';
import { GoogleLogin } from 'react-google-login';

const Signup = () => {
  const handleFacebookResponse = (response) => {
    // Handle Facebook sign-up response
    console.log('Facebook response:', response);
  };

  const handleGoogleResponse = (response) => {
    // Handle Google sign-up response
    console.log('Google response:', response);
  };

  return (
    <div>
      <h2>Sign Up</h2>
      {/* Your sign-up form fields */}
      
      {/* Facebook sign-up button */}
      <FacebookLogin
        appId="your-facebook-app-id"
        autoLoad={false}
        fields="name,email,picture"
        callback={handleFacebookResponse}
        render={(renderProps) => (
          <button onClick={renderProps.onClick}>Sign up with Facebook</button>
        )}
      />

      {/* Google sign-up button */}
      <GoogleLogin
        clientId="your-google-client-id"
        onSuccess={handleGoogleResponse}
        onFailure={handleGoogleResponse}
        cookiePolicy={'single_host_origin'}
        render={(renderProps) => (
          <button onClick={renderProps.onClick}>Sign up with Google</button>
        )}
      />
    </div>
  );
};

export default Signup;