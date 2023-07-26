import styled from 'styled-components';
import { IThumbnails } from './type';

export const ThumbnailsContainer = styled.div<IThumbnails>`
  position: relative;

  width: 100px;
  height: 100px;

  border-radius: 4px;
  background-image: url(${(props) => props.src});
  background-size: cover;
`;

export const VideoRunningTime = styled.div`
  position: absolute;
  bottom: 8px;
  right: 8px;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 46px;
  height: 23px;

  border-radius: 4px;

  color: var(--Text_Wh);
  font-size: 0.75rem;
  background-color: rgba(40, 40, 40, 0.6);
`;

export const BackgroundColor = styled.div<IThumbnails>`
  position: absolute;

  width: 100%;
  height: 100%;

  border-radius: 4px;
  opacity: 0.6;

  /* state에 따른 backgorund 색상 변경 */
  background-color: ${({ state }) => {
    switch (state) {
      case 'select':
        return 'var(--Pri_500)';
      case 'video_play':
        return 'var(--Dim)';
      case 'error':
        return 'var(--Dim)';
      default:
        return '';
    }
  }};

  cursor: ${({ state }) => (state === 'video_play' ? 'pointer' : null)};
`;

export const StateIcon = styled.div<IThumbnails>`
  position: absolute;
  top: ${({ state }) => {
    switch (state) {
      case 'delete':
        return '-12px';
      case 'select':
        return '50%';
      case 'video_play':
        return '50%';
      case 'error':
        return '50%';
      default:
        return '';
    }
  }};
  left: ${({ state }) => {
    switch (state) {
      case 'select':
        return '50%';
      case 'video_play':
        return '50%';
      case 'error':
        return '50%';
      default:
        return '';
    }
  }};
  right: ${({ state }) => (state === 'delete' ? '-12px' : null)};
  transform: ${({ state }) => (state === 'delete' ? null : 'translate(-50%, -50%)')};

  cursor: ${({ state }) => (state === 'delete' || state === 'video_play' ? 'pointer' : null)};
  background-color: aliceblue;
  div {
    background-color: yellow;
    p {
      width: 100%;
      display: inline-block;
      background-color: blue;
    }
  }
  color: var(--Bg_300);
  font-size: 0.75rem;
  z-index: 99;
`;