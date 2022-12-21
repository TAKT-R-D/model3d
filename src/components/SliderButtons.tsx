/** @jsxImportSource @emotion/react */
import { FC, useState } from 'react';
import { css } from '@emotion/react';
import { mq, setFlex, PrimaryGradient } from '../lib/emotion';

type Props = {
  text1: string;
  text2: string;
  onClickToggle: () => void;
};

const SliderButtons: FC<Props> = (props) => {
  const { text1, text2, onClickToggle } = props;
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const onClickSlide = () => {
    onClickToggle();
    setIsClicked(!isClicked);
  };

  const container = css`
    ${setFlex('space-between', 'center', 'row')}
    border: 1px solid #ccc3;
    border-radius: 9999px;
    padding: 0.2rem 0.1rem 0.2rem 0.2rem;
    width: 400px;
    button {
      padding: 1rem 3rem;
      border-radius: 9999px;
      border: none;
      outline: none;
      background: transparent;
      width: 50%;
      color: #fff;
      opacity: 0.5;
      cursor: pointer;
      transition: all 1s ease;
      &.active {
        font-weight: bold;
        opacity: 1;
      }
    }

    transition: all 5s ease;
    position: relative;
    &::before {
      display: block;
      content: '';
      width: 48%;
      height: 95%;
      margin-left: 0.2rem;
      ${PrimaryGradient}
      border-radius: 9999px;
      z-index: -1;
      position: absolute;
      left: 0;
      transition: all 0.5s cubic-bezier(0.68, 0.8, 0.32, 1.1);
    }
    &.checked::before {
      left: 51%;
    }

    ${mq[0]} {
      width: 100%;
    }
  `;

  return (
    <div css={container} className={isClicked ? 'checked' : ''}>
      <button onClick={onClickSlide} className={isClicked ? '' : 'active'}>
        {text1}
      </button>
      <button onClick={onClickSlide} className={isClicked ? 'active' : ''}>
        {text2}
      </button>
    </div>
  );
};

export default SliderButtons;
