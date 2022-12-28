import { Link } from 'react-router-dom';
import { pages } from '../../context/PageIndex';
import imgURL from '/landing-background.jpg';

export function Landing(): JSX.Element {
    return (
        <div className='background-img' style={{
            backgroundImage: `url(${imgURL})`
        }}>
            <div className='title-container'>
                <Link className='login-link' to={pages.login}>Login to Spotify</Link>
            </div>
        </div>
    )
}