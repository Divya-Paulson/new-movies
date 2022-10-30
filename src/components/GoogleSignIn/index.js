import React from 'react'
import jwtDecode from "jwt-decode";
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';



function GoogleSignIn({ onUserLoggedIn }) {

    return (
        <div>
            <GoogleOAuthProvider clientId="52051628065-qu411ot3u0c6ott46teruj0q5nh8cdt3.apps.googleusercontent.com">
                <GoogleLogin
                    onSuccess={ ({ credential }) => {
                        const userInfo = jwtDecode(credential);

                        onUserLoggedIn(userInfo);
                        // console.log(props.userName);
                    } }
                    onError={ () => {
                        console.log('Login Failed');
                    } }
                    useOneTap
                />

            </GoogleOAuthProvider>

        </div>
    )
}

export default GoogleSignIn