import Icon from '@lib/foundation/Icon';
import * as ST from './styles';
import { IThumbnails } from './type';

const Thumbnails = ({ state, type, src, runningtime }: IThumbnails) => {
  const runningTimeMin = runningtime && String(Math.floor(runningtime / 60000)).padStart(2, '0');
  const runningTimeSec = runningtime && String(Math.floor((runningtime / 1000) % 60)).padStart(2, '0');

  return (
    <ST.ThumbnailsContainer src={src}>
      {/* <ST.ThumbnailImage src={src} /> */}
      <ST.VideoRunningTime>
        {runningTimeMin}:{runningTimeSec}
      </ST.VideoRunningTime>
      <ST.BackgroundColor state={state}></ST.BackgroundColor>
      <ST.StateIcon>
        {state === 'delete' && <Icon name='thumbnails_deletecircle' />}
        {state === 'select' && <Icon name='thumbnails_checkcircle' />}
        {state === 'video_play' && <Icon name='thumbnails_playcircle' />}
        {state === 'error' && (
          <div>
            <Icon name='thumbnails_errorcircle' />
            <p>원본 파일 삭제됨</p>
          </div>
        )}
      </ST.StateIcon>
    </ST.ThumbnailsContainer>
  );
};

export default Thumbnails;
