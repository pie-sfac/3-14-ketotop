import { IDelete } from '../type';
import * as St from '../styles';
import { Fnd } from '../../..';

const DeleteThumbnail = ({ name, ...otherProps }: IDelete) => {
  return (
    <>
      <St.DeleteState {...otherProps}>
        <Fnd.IconStyles name={name} />
      </St.DeleteState>
    </>
  );
};
export default DeleteThumbnail;
