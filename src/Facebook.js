import React from 'react';
import FacebookLogin from 'react-facebook-login';

export const Facebook = () => {
        const state = {
            isLoggedIn: false,
            userId: '',
            name: '',
            email: '',
            picture: ''
        }
        const responseFacebook = (response) => {
            state.isLoggedIn = true;
            state.userId = response.userId;
            state.name = response.name;
            state.email = response.email;
            state.picture = response.picture.data.url;

        }
        const componentClicked = () => console.log("clicked");


        let fbContent;
        if (state.isLoggedIn) {
            fbContent = null
        } else {
            fbContent = ( < FacebookLogin appId = '456455218825532'
                autoLoad = { true }
                fields = "name,email,picture"
                onclick = { componentClicked }
                callback = { responseFacebook }
                />);
            }
            return ( <
                div > { fbContent } < /div>
            )



        }