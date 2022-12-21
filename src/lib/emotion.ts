import { css, keyframes, SerializedStyles } from '@emotion/react';

const breakpoints = [842, 1440];
export const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

export const mqHover = '@media (hover: hover) and (pointer: fine)';

export const setFlex = (
  justify: string,
  align: string,
  direction: string
): SerializedStyles => css`
  display: flex;
  justify-content: ${justify};
  align-items: ${align};
  flex-direction: ${direction};
`;

const keyframeHeartBeat = keyframes`
  0% { transform: scale(0.5); }
  10% { transform: scale(0.7); }
  30% { transform: scale(0.9); }
  50% { transform: scale(1.2); }
  80% { transform: scale(1.5); }
  100% { transform: scale(1.0); }
`;
export const heartBeat = css`
  animation: ${keyframeHeartBeat} 0.2s;
`;
export const PrimaryGradient = css`
  background: linear-gradient(40deg, #3ae, #16a);
`;

export const swiperSlider = css`
  .swiper-button-prev,
  .swiper-button-next {
    height: 40px;
    width: 20px;
    position: absolute;
    opacity: 0.4;
  }
  .swiper-button-prev:after,
  .swiper-button-next:after {
    background-repeat: no-repeat;
    background-size: contain;
    content: '';
    height: 40px;
    width: 20px;
    margin: auto;
    margin-top: calc(-50%);
  }
  .swiper-button-prev:after {
    background-image: url('/assets/images/items/arrow_prev.png');
  }
  .swiper-button-next:after {
    background-image: url('/assets/images/items/arrow_next.png');
  }
  .swiper-slide img {
    height: auto;
    width: 100%;
  }
  .swiper-pagination-bullet-active {
    background: #fff;
  }
  .swiper-pagination-bullet {
    background: rgba(49, 157, 221, 1);
  }
  .swiper-button-next.swiper-button-disabled,
  .swiper-button-prev.swiper-button-disabled {
    opacity: 1;
    display: none;
  }
`;

export const buttonReset = css`
  border: none;
  outline: none;
  cursor: pointer;
  background: transparent;
`;
