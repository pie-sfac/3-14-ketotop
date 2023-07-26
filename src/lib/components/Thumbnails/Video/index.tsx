import Icon from '@lib/foundation/Icon';
import * as St from '../styles';
import { IVideo } from '../type';

const VideoThumbnails = ({ state = 'normal', type = 'video', src, runningtime = 0 }: IVideo) => {
  const runningTimeMin = runningtime && String(Math.floor(runningtime / 60000));
  const runningTimeSec = (runningtime && String(Math.floor((runningtime / 1000) % 60)).padStart(2, '0')) || '00';

  return (
    <St.ThumbnailsContainer src={src} state={state}>
      <St.VideoRunningTime>
        {runningTimeMin}:{runningTimeSec}
      </St.VideoRunningTime>
      <St.BackgroundColor state={state} />

      {state === 'delete' && (
        <St.DeleteState>
          <Icon name='thumbnails_deletecircle' />
        </St.DeleteState>
      )}
      {state === 'select' && (
        <St.SelectState>
          <Icon name='thumbnails_checkcircle' />
        </St.SelectState>
      )}
      {state === 'error' && (
        <St.ErrorState>
          <Icon name='thumbnails_errorcircle' />
          <p>원본 파일 삭제됨</p>
        </St.ErrorState>
      )}
      {state === 'video_play' && (
        <St.PlayState>
          <Icon name='thumbnails_playcircle' />
        </St.PlayState>
      )}
    </St.ThumbnailsContainer>
  );
};

export default VideoThumbnails;
