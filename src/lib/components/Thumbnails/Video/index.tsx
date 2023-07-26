import Icon from '@lib/foundation/Icon';
import * as ST from '../styles';
import { IVideo } from '../type';

const VideoThumbnails = ({ state = 'normal', type = 'video', src, runningtime = 0 }: IVideo) => {
  const runningTimeMin = runningtime && String(Math.floor(runningtime / 60000));
  const runningTimeSec = (runningtime && String(Math.floor((runningtime / 1000) % 60)).padStart(2, '0')) || '00';

  return (
    <ST.ThumbnailsContainer src={src} state={state}>
      <ST.VideoRunningTime>
        {runningTimeMin}:{runningTimeSec}
      </ST.VideoRunningTime>
      <ST.BackgroundColor state={state} />

      {state === 'delete' && (
        <ST.DeleteState>
          <Icon name='thumbnails_deletecircle' />
        </ST.DeleteState>
      )}
      {state === 'select' && (
        <ST.SelectState>
          <Icon name='thumbnails_checkcircle' />
        </ST.SelectState>
      )}
      {state === 'error' && (
        <ST.ErrorState>
          <Icon name='thumbnails_errorcircle' />
          <p>원본 파일 삭제됨</p>
        </ST.ErrorState>
      )}
      {state === 'video_play' && (
        <ST.PlayState>
          <Icon name='thumbnails_playcircle' />
        </ST.PlayState>
      )}
    </ST.ThumbnailsContainer>
  );
};

export default VideoThumbnails;
