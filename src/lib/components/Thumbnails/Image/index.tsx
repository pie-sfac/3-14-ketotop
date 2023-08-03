import Icon from '../../../foundation/Icon';
import * as St from '../styles';
import { IImage } from '../type';

/** @description ImageThumbnail 스타일의 컴포넌트
 * @params
 * {src : string}
 * @params
 * {state : 'normal' | 'delete' | 'select' | 'error'}  */

const ImageThumbnail = ({ state = 'normal', src }: IImage) => {
  return (
    <St.ThumbnailContainer src={src} state={state}>
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
    </St.ThumbnailContainer>
  );
};

export default ImageThumbnail;
