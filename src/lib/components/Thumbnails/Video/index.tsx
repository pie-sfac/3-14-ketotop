import { Fnd } from '../../..';
import DeleteThumbnail from '../Delete';
import * as St from '../styles';
import { IVideo } from '../type';

/** @description ImageThumbnail 스타일의 컴포넌트
 * @params
 * {src : string}
 * @params
 * {$state : 'normal' | 'delete' | 'select' | 'video_play' | 'error'}
 * @params
 * {runningtime : number}
 * */
export const ImgURL = 'https://port-0-psd-asset-server-eg4e2alkf2i7md.sel4.cloudtype.app/uploads/images/Img_nomal.svg';
const VideoThumbnail = ({ $state = 'normal', src = ImgURL, runningtime = 0, ...otherProps }: IVideo) => {
  const runningTimeMin = runningtime && String(Math.floor(runningtime / 60000));
  const runningTimeSec = (runningtime && String(Math.floor((runningtime / 1000) % 60)).padStart(2, '0')) || '00';

  if (
    $state !== 'delete' &&
    $state !== 'error' &&
    $state !== 'normal' &&
    $state !== 'select' &&
    $state !== 'video_play'
  )
    throw new Error(
      `Enter the correct state prop name. It should be 'normal' | 'delete' | 'select' | 'video_play' | 'error'`,
    );

  return (
    <St.ThumbnailContainer src={src} $state={$state}>
      <St.VideoRunningTime>
        {runningTimeMin}:{runningTimeSec}
      </St.VideoRunningTime>
      <St.BackgroundColor $state={$state} />
      {$state === 'delete' && <DeleteThumbnail name='thumbnails_deletecircle_24px' {...otherProps} />}
      {$state === 'select' && (
        <St.SelectState>
          <Fnd.IconStyles name='thumbnails_checkcircle_32px' />
        </St.SelectState>
      )}
      {$state === 'error' && (
        <St.ErrorState>
          <Fnd.IconStyles name='thumbnails_errorcircle_32px' />
          <p>원본 파일 삭제됨</p>
        </St.ErrorState>
      )}
      {$state === 'video_play' && (
        <St.PlayState>
          <Fnd.IconStyles name='thumbnails_playcircle_32px' />
        </St.PlayState>
      )}
    </St.ThumbnailContainer>
  );
};

export default VideoThumbnail;
