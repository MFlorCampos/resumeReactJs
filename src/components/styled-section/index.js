import React from 'react';
import { css } from '@emotion/react';
import media from '../../styles/media';

const StyledSection = ({ children, color, styles={}, classNames=""}) => {
  const themes = [];

  themes['grey'] = {
    main: '#16171b',
    text: '#F9FAFF',
  };

  themes['gradient-down'] = {
    main: 'linear-gradient(228deg, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)',
    text: '#FFC515',
  };

  themes['gradient-up'] = {
    main: 'linear-gradient(296deg, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)',
    text: '#FFC515',
  };

  themes['gradient'] = {
    main: 'linear-gradient(to right top, #fadcff, #f0dbff, #e6daff, #dbdaff, #d1d9ff, #ccdcff, #c8dfff, #c4e1ff, #c8e7ff, #cdecff, #d4f1ff, #dcf6ff);',
    text: '#FFC515',
  };

  const Style = css`
    position:relative;
    padding: 30px 0 100px;
    background: ${themes[color].main};

    h2 {
      font-size: 3rem;
      font-weight: 600;
      text-align: center;
      color: ${themes[color].text};
      width: 100%;
      padding-bottom: 80px;
    }

    h3 {
      font-size: 2rem;
      font-weight: 600;
      color: ${themes[color].text};
      width: 100%;
      padding: 20px 0;
    }

    ${media.medium} {
      padding: 50px 0 50px;
      h2 {
        font-size: 1.6em;
        text-align: center;
      }
      &.hidden-mobile {
        display: none;
      }
      &.nopadding-bot-mobile {
        padding: 0;
      }
      &.nopadding-bot-top-mobile {
        padding-top:0;
        padding-bottom:0;
      }

      h3 {
        font-size: 1.4rem;
      }
    }

    ${{...styles}}
  `;

  return (
    <section className={classNames} css={[Style]}>
      {children}
    </section>
  );
}

export default StyledSection;
