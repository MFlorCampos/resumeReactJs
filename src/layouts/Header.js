import React from 'react';
import { useState } from 'react';
import { css } from '@emotion/react';
import { useParams } from 'react-router-dom';
import i18n from '../i18n';

import media from '../styles/media';
import { useThemeContext } from '../contexts/ThemeContext';
import { HashLink as Link } from 'react-router-hash-link';
import usLogo from '../../public/us.png';
import esLogo from '../../public/es.png';

const Header = () => {
  let { locale } = useParams();
  locale = locale || 'us';

  const { isLight } = useThemeContext();
  const [ menuOpened, setMenuOpened ]= useState(false);

  const handleToggleMenu = () => {
    setMenuOpened(!menuOpened);
  }
  const headerStyle = (isLight) => css`
    height: 70px;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    position:absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2;

    .menu-container a {
      color: #ffc515;
      padding: 10px 15px;
    }
    .menu {
      ul {
        display:flex;
        align-items: center;
        li {
          text-align: center;
          width: auto;
          display: inline;
          padding: 5px 10px;
          font-size: 16px;
          text-transform: uppercase;
          font-weight: bold;
          color: #F9FAFF;
          img {
            &.flag {
              height: 25px;
              width: 25px;
            }
          }
        }
      }
    }
    ${media.medium} {
      position:fixed;
      background: transparent;
      position: absolute;
      padding-left: 20px;
      height: 70px;
      z-index: 2;

      .menu {
        overflow: hidden;
        height: auto;
        max-height: ${ menuOpened ? '100%' : '0' };
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        width: 100%;
        background: #16171b;
        bottom: 0;
        display: flex;
        transition: all 0.5s;
        ul {
          flex-direction: column;
          margin: auto;
          li {
            padding:20px 50px;
            background: transparent;
            border-radius: 0;
            color: #F9FAFF;
            border-bottom: 1px solid #F9FAFF;
            width: 100%;

            a {
              background: transparent;
              line-height: 1.5;
            }
            &:last-child {
              border: 0;
            }
          }
        }
      }
    }
    }
  `;
  const StylesMenuMobile = css`

  display: none;
  ${media.medium} {
    display: block;
    position: fixed;
    right: 20px;
    top: 20px;
    z-index: 1;

    button {
      background: unset;
      display: flex;
      border:none;

      &.open {
        .container {
          display: inline-block;
          cursor: pointer;
        }

        .bar1, .bar2, .bar3 {
          width: 35px;
          height: 5px;
          background-color: #f9faff;
          margin: 6px 0;
          transition: 0.4s;
        }

        &.change .bar1 {
          -webkit-transform: rotate(-45deg) translate(-8px, 6px);
          transform: rotate(-45deg) translate(-8px, 6px);
        }

        &.change .bar2 {opacity: 0;}

        &.change .bar3 {
          -webkit-transform: rotate(45deg) translate(-8px, -8px);
          transform: rotate(45deg) translate(-8px, -8px);
        }
      }
    }
  }
`;



  return (
    <header css={[headerStyle(isLight)]}>
      <div className="container">
        <div css={[StylesMenuMobile]}>
          <button onClick={handleToggleMenu}
          className={`open ${menuOpened ? 'change' : ''}`}>
            <div className="container">
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
            </div>

          </button>
        </div>
        <nav className="menu">
          <ul>
            <li>
              <Link onClick={() => setMenuOpened(false)} to={`/${locale}/#about`} dangerouslySetInnerHTML={i18n(locale, 'about-me')} />
            </li>
            <li>
              <Link onClick={() => setMenuOpened(false)} to={`/${locale}/#work-exp`} dangerouslySetInnerHTML={i18n(locale, 'experience-menu')} />
            </li>
            <li>
              <Link  onClick={() => setMenuOpened(false)} to={`/${locale}/#education`} dangerouslySetInnerHTML={i18n(locale, 'education-menu')} />
            </li>
            { locale != 'es' && <li className="lenguaje">
              <Link onClick={() => setMenuOpened(false)} to="/es">
                <img src={esLogo} className="flag" />
              </Link>
              </li> }
            { locale != 'us' && <li className="lenguaje">
              <Link  onClick={() => setMenuOpened(false)} to="/">
                <img src={usLogo} className="flag" />
              </Link>
            </li> }
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
