import Icon from '@lib/foundation/Icon';
import * as St from '../styles';
import { IImage } from '../type';

const ImageThumbnails = ({ state = 'normal', type = 'image', src }: IImage) => {
  return (
    <St.ThumbnailsContainer src={src} state={state}>
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
    </St.ThumbnailsContainer>
  );
};

export default ImageThumbnails;
