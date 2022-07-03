import React from 'react';
import { css } from '@emotion/react';
import media from '../../styles/media';
import { useParams } from 'react-router-dom';
import i18n from '../../i18n';
import sparkle from '../../../public/sparkle.png';
import profile from '../../../public/profile.png';

const Styles = css`
  .highlight {
    border-radius: 30px;
    padding: 5px 15px;
    align-items: center;
    display: flex;
    background: linear-gradient(100deg, #376DF9 0, #FF5FA0 75%, #FFC55A 100%);
  }
  z-index: 1;
  position: relative;

  .flex {
    display: flex;
  }
  .list {
    justify-content: space-between;
    margin-top: 40px;
    padding: 20px 0;
    align-items: baseline;
    border-top: 3px solid #959CB1;
    border-bottom: 3px solid #959CB1;

    p {
      margin: 0px;
      text-transform: uppercase;
      font-size: 20px;
      font-weight: 100;
    }
    a {
      font-size: 20px;
    }
    .link:hover {
      color: #F9FAFF;
    }
  }

  p {
    color: #959CB1;
    padding-top: 45px;
    font-weight: 400;
  }

  .content-right {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    .profile-img {
      height: 300px;
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
      margin-left: 40px;
      color: #F9FAFF;
      text-align: left;
      font-weight: 100;
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
      text-align: center;
      li {
        border-top: none;
      }
      p {
        padding: 10px 0;
        font-size: 1.5rem;
        a {
          font-size: 1.5rem;
        }
      }
    }
    .content-left {
      text-align: center;
      font-size: 1.5rem;
      line-height: 2rem;
      width: 100%;
      h2 {
        margin-left: 20px;
      }
      p {
        padding: 40px 0;
      }
      .star-icon {
        margin-right: 0px;
      }
    }

    .content-right {
      width: 100%;

      .profile-img {
        height: 200px;
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
        : <p><a target="blank" href={link} className="link" >{text}</a></p>}
    </li>
  )
};


const About = () => {
  let { locale } = useParams();
  locale = locale || 'us';

  return (
    <div id="about" css={[Styles]}>
      <div>
        <div className="container">
          <div className="white-container">
            <div className="flex">
              <div className="content-left">
                <div className="highlight" data-aos="fade-right">
                  <h2 dangerouslySetInnerHTML={i18n(locale, "about-me")} />
                </div>
                <p dangerouslySetInnerHTML={i18n(locale, "description")} data-aos="fade-right" />
              </div>
              <div className="content-right">
                <img alt="profile-img"  className="profile-img" src={profile} />
              </div>
            </div>
            <ol className="flex list" data-aos="fade-up" >
              { contacts.map((contact, index) => <ContactText key={index} {...contact} />) }
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

