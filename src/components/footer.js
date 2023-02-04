import React from 'react';
import insta from '../images/instagram_50.png'
import facebook from '../images/facebook_50.png'


export default function Footer(){
    return(
        <footer class="App-footer">
            <img src={insta} />
            <img src={facebook} />
        </footer>
    );
}

