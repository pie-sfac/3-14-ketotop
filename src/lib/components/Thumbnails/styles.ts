import styled from 'styled-components';
import { IImage, IVideo } from './type';

export const ThumbnailContainer = styled.div<IVideo | IImage>`
  display: inline-block;
  position: relative;

  width: 100px;
  height: 100px;

  margin: ${({ $state }) => ($state === 'delete' ? '10px 10px 0 0' : null)};

  border-radius: 4px;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;

  color: var(--Bg_300);
  font-size: 0.75rem;
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

export const BackgroundColor = styled.div<IVideo | IImage>`
  position: absolute;

  width: 100%;
  height: 100%;

  border-radius: 4px;
  opacity: 0.6;

  /* state에 따른 backgorund 색상 변경 */
  background-color: ${({ $state }) => {
    switch ($state) {
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

  cursor: ${({ $state }) => ($state === 'video_play' ? 'pointer' : null)};
`;

export const DeleteState = styled.div`
  position: absolute;
  top: -12px;
  right: -12px;
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
    margin: 4px 0 0 0;
  }
`;

export const PlayState = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  cursor: pointer;
`;
