
import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';  // Import useNavigate

const PhoneSignin = () => {
  const navigate = useNavigate();  // Initialize navigate function

  return (
    <div>
      <GoogleOAuthProvider clientId="486340617177-627cq1s06j912ps9ot0lnrqube6b4vlp.apps.googleusercontent.com">
        <GoogleLogin
          onSuccess={credentialResponse => {
            const details = jwtDecode(credentialResponse.credential);
            console.log(details);
            
            // Redirect to another page (e.g., Dashboard)
            navigate('/dashboard'); 
          }}
          onError={() => {
            console.log('Login Failed');
          }}
        />
      </GoogleOAuthProvider>
    </div>
  );
};

export default PhoneSignin;
