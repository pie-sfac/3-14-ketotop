import styled from 'styled-components';
import { IImage, IVideo } from './type';

export const ThumbnailContainer = styled.div<IVideo | IImage>`
  position: relative;

  width: 10rem;
  height: 10rem;

  margin: ${({ state }) => (state === 'delete' ? '10px 10px 0 0' : null)};

  border-radius: 0.4rem;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;

  color: var(--Bg_300);
  font-size: 0.75rem;
`;

export const VideoRunningTime = styled.div`
  position: absolute;
  bottom: 0.8rem;
  right: 0.8rem;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 4.6rem;
  height: 2.3rem;

  border-radius: 0.4rem;

  color: var(--Text_Wh);
  font-size: 0.75rem;
  background-color: rgba(40, 40, 40, 0.6);
`;

export const BackgroundColor = styled.div<IVideo | IImage>`
  position: absolute;

  width: 100%;
  height: 100%;

  border-radius: 0.4rem;
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

export const DeleteState = styled.div`
  position: absolute;
  top: -1.2rem;
  right: -1.2rem;
  img {
    cursor: pointer;
  }
`;

export const SelectState = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ErrorState = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    margin: 0.4rem 0 0 0;
  }
`;

export const PlayState = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  cursor: pointer;
`;
