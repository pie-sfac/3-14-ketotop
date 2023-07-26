import Icon from '@lib/foundation/Icon';
import * as ST from '../styles';
import { IImage } from '../type';

const ImageThumbnails = ({ state = 'normal', type = 'image', src }: IImage) => {
  return (
    <ST.ThumbnailsContainer src={src} state={state}>
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
    </ST.ThumbnailsContainer>
  );
};

export default ImageThumbnails;
