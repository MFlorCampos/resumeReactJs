import React from 'react';
import { css } from '@emotion/react';
import media from '../../styles/media';
import { useParams } from 'react-router-dom';
import i18n from '../../i18n';
import sparkle from '../../../public/sparkle.png';
import profile from '../../../public/profile.png';

const Styles = css`
  .highlight {
    border:1px solid #000;
    border-radius: 30px;
    padding: 5px 15px;
    align-items: center;
    display: flex;
  }
  z-index: 1;
  position: relative;

  .flex {
    display: flex;
  }
  .list {
    justify-content: space-between;
    margin-top: 30px;
    align-items: baseline;

    li {
      border-top: 3px solid #fff;
    }

    p {
      text-transform: uppercase;
      font-size: 20px;
      font-weight: bold;
    }
    a {
      font-size: 20px;
    }
  }
  .white-container {
    border: 1px solid #000;
    padding:100px;
    border-radius: 30px;
  }

  p {
    margin-top: 20px;
  }

  .tag {
    background: #000;
    color: #fff;
    border-radius: 60px;
    padding: 5px 10px;
    font-size: 1.2rem;
  }

  .content-right {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    .profile-img {
      height: 200px;
      border-radius: 100%;
    }
  }

  .content-left {
    width: 50%;
    font-size: 2rem;
    line-height: 3rem;
    .blue-line { color: blue; }
    .star-icon {
      height: 50px;
      width: 50px;
      margin-right: 20px;
    }
    h2 {
      color: #000;
      text-align: left;
      font-weight: 600;
      font-size: 2.8rem;
      line-height: 3.5rem;
      padding-bottom: 0;
    }
  }

  ${media.medium} {
    padding: 40px;
    .container {
      display: block;
    }
    .white-container {
      padding: 0px;
    }
    .flex {
      display: block;
    }
    .list {
      padding: 40px;
      text-align: center;
      p {
        font-size: 1.3rem;
        a {
          font-size: 1.5rem;
        }
      }
    }
    .tag {
      font-size: 1.4rem;
      padding: 10px 20px;
    }
    .content-left {
      font-size: 1.5rem;
      line-height: 2rem;
      width: 100%;
      padding: 40px;
      .star-icon {
        margin-right: 0px;
      }
    }
    .content-right {
      width: 100%;
    }
    .gray-background-round {
      display: block;
      margin:-100px 20px;
      padding:100px 10px;
      border-radius: 0;
      &:after{
        content: none;
        width: 100%;
      }
    }
  }
`;

const contacts = [
  {
    text: "+54 9 11 3122-4698",
  },
  {
    text: "Argentina",
  },
  {

    text: "m.ﬂorcampos99@gmail.com",
  },
  {
    text: "/MFlorenciaCampos",
    link: "https://www.linkedin.com/in/mflorenciacampos/"
  },
  {
    text: "/FlorCampos",
    link: "https://gitlab.com/FlorCampos",
  },
];

const ContactText = ({text, link = {}}) => {
  return (
    <li>
        { Object.keys(link).length === 0 ? <p>{text}</p>
        : <p><a target="blank" href={link} >{text}</a></p>}
    </li>
  )
};


const About = () => {
  let { locale } = useParams();
  locale = locale || 'us';

  return (
    <div id="about-us" css={[Styles]}>
      <div className="">
        <div className="container">
          <div className="white-container">
            <div className="flex">
              <div className="content-left">
                <div className="highlight">
                  <img className="star-icon" src={sparkle} />
                  <h2 dangerouslySetInnerHTML={i18n(locale, "about-me")} />
                </div>
                <p dangerouslySetInnerHTML={i18n(locale, "description")} />
              </div>
              <div className="content-right">
                <img alt="profile-img"  className="profile-img" src={profile} />
              </div>
            </div>
            <ol className="flex list">
              { contacts.map((contact, index) => <ContactText key={index} {...contact} />) }
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

