import React from 'react';
import insta from '../images/instagram_50.png'
import facebook from '../images/facebook_50.png'
import bandcamp from '../images/bandcamp_50.jpg'

export default function Footer(){
    return(
        <footer class="App-footer">
            <a target="_blank" href="https://www.instagram.com/samholladayofficial/"><img id="insta" src={insta} /></a>
            <a target="_blank" href="https://www.facebook.com/samholladayofficial/"><img id="fb" src={facebook} /></a>
            <a target="_blank" href="https://samholladay.bandcamp.com/"><img src={bandcamp} /></a>
        </footer>
    );
}