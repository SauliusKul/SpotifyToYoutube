import { useState } from 'react';
import { Link } from 'react-router-dom';
import { pages } from '../../context/PageIndex';
import imgURL from '/Compressed-landing-background.jpg';

export function Landing(): JSX.Element {

    const fetchSpotifyAuthPage = async function () {
        const response = await fetch('http://localhost:8080/api/getSpotifyToken', {
            method : "GET",
            mode: 'cors',
            headers: {
                'Accept': 'text/html',
              },
        });

        if (response.ok) {
            const uri = await response.text();
            window.location.replace(uri);
        }   else {
            console.log('HTTP request failed: ', response.status);
        }
    }

    return (
        <div className='background-img' style={{
            backgroundImage: `url(${imgURL})`
        }}>
            <div className='title-container'>
                <Link className='login-link' onClick={fetchSpotifyAuthPage} to={pages.home}>Login to Spotify</Link>
            </div>
        </div>
    )
}