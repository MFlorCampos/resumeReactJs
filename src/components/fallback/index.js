import { css } from '@emotion/react';

const styles = css`
.loader {
  width: 100vw;
  height: 100vh;
  position: fixed;
  background: #000;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.loader-logo {
  background-repeat: no-repeat;
  background-size: contain;
  animation: loader 1s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}

.lds-ring {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 64px;
  height: 64px;
  margin: 8px;
  border: 8px solid #fff;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #fff transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

`;

const Fallback = () => {
  return (
   <>
    <div css={styles}>
      <div className='loader'>
        <div className="loader-logo">
          <div className="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
   </>
  )
}

export default Fallback;