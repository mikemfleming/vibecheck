import { useState } from 'react';
import { Link } from 'react-router-dom'
import styles from './Nav.module.css'
import useDocumentScrollThrottled from '../../hooks/useDocumentScrollThrottled'
import { Auth } from 'aws-amplify'

const Nav = () => {
    const [shouldHideHeader, setShouldHideHeader] = useState(false);
    const [shouldShowShadow, setShouldShowShadow] = useState(false);
    const signout = async () => {
      await Auth.signOut()
      window.location.reload()
    }

    const MINIMUM_SCROLL = 80;
    const TIMEOUT_DELAY = 400;
  
    useDocumentScrollThrottled(callbackData => {
      const { previousScrollTop, currentScrollTop } = callbackData;
      const isScrolledDown = previousScrollTop < currentScrollTop;
      const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;
  
      setShouldShowShadow(currentScrollTop > 2);
  
      setTimeout(() => {
        setShouldHideHeader(isScrolledDown && isMinimumScrolled);
      }, TIMEOUT_DELAY);
    });
    
    const shadowStyle = shouldShowShadow ? styles.shadow : '';
    const hiddenStyle = shouldHideHeader ? styles.hidden : '';

    return (
        <header className={[styles.header, shadowStyle, hiddenStyle].join(' ')}>
            <h1>Vibecheck</h1>
            <ul>
              <li>
                <Link to="/v/cello-in-a-drain-pipe">/v/cello-in-a-drain-pipe</Link>
              </li>
              <li>
                <Link to="/u/sphynxie">/u/sphynxie</Link>
              </li>
            </ul>
            <button onClick={signout}>Sign Out</button>
        </header>
    )
}

export default Nav