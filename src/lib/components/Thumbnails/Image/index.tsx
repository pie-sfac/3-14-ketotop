import { Fnd } from '../../..';
import DeleteThumbnail from '../Delete';
import * as St from '../styles';
import { IImage } from '../type';

/** @description ImageThumbnail 스타일의 컴포넌트
 * @params
 * {src : string}
 * @params
 * {$state : 'normal' | 'delete' | 'select' | 'error'}  */

const ImageThumbnail = ({ $state = 'normal', src, ...otherProps }: IImage) => {
  if ($state !== 'delete' && $state !== 'error' && $state !== 'normal' && $state !== 'select')
    throw new Error(`Enter the correct state prop name. It should be 'normal' | 'delete' | 'select' | 'error' `);
  if (!src) throw new Error('src prop is required');

  return (
    <>
      <Fnd.FoundationGlobalStyles />

      <St.ThumbnailContainer src={src} $state={$state}>
        <Fnd.TypographyStyles.Caption1 as={'div'}>
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
        </Fnd.TypographyStyles.Caption1>
      </St.ThumbnailContainer>
    </>
  );
};

export default ImageThumbnail;
