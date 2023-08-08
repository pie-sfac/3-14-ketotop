import { Fnd } from '../../..';
import * as St from '../styles';
import { IImage } from '../type';

/** @description ImageThumbnail 스타일의 컴포넌트
 * @params
 * {src : string}
 * @params
 * {$state : 'normal' | 'delete' | 'select' | 'error'}  */

const ImageThumbnail = ({ $state = 'normal', src }: IImage) => {
  return (
    <St.ThumbnailContainer src={src} $state={$state}>
      <St.BackgroundColor $state={$state} />

      {$state === 'delete' && (
        <St.DeleteState>
          <Fnd.IconStyles name='thumbnails_deletecircle_24px' />
        </St.DeleteState>
      )}
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
    </St.ThumbnailContainer>
  );
};

export default ImageThumbnail;
