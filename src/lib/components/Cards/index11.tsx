import * as St from './styles';
import { CardsType } from "./type";
import { Fnd } from '../..';
import { TypographyStyles as Typo } from '../../foundation';

const Cards = ({ type, title, description, thumbnail, isOpen, children }: CardsType) => {
  let TypographyComponent;

  switch(type) {
    case 'Option_in':
      TypographyComponent = Fnd.TypographyStyles.Body3;
      break;
    case 'Option_ac':
      TypographyComponent = Fnd.TypographyStyles.Body3;
      break;
    case 'Calendar_data':
      TypographyComponent = Fnd.TypographyStyles.Caption1;
      break;
    case 'Link_large':
      TypographyComponent = Fnd.TypographyStyles.Body2;
      break;
    case 'Link_medium':
      TypographyComponent = Fnd.TypographyStyles.Body3;
      break;
    case 'Link_medium_deldelt':
      TypographyComponent = Fnd.TypographyStyles.Body3;
      break;
  }

  return (
    <>
      <Fnd.FoundationGlobalStyles />
      <div>
        <div>
          <h3>타이틀(글꼴 바디3)</h3>
          <span>디스크럽션(글꼴 캡1)</span>
        </div>
      </div>
       'Calendar_data' | 'Link_large' | 'Link_medium' | 'Link_medium_deldelt';
      {isOpen ? (
       {type === 'Option_in' | 'Option_ac' ? 
          <div>
            <div>
              <h3></h3>
              <span></span>
            </div>
          </div>
        :null}
        {type === 'Calendar_data' ?
          <div>
            <span></span>
          </div>
        :null}
        {type === 'Link_large' ?
          <div>
            <div>
              <img src=''/>
              <div>
                <h3>타이틀</h3>
                <span>디스크립션</span>
              </div>
            </div>
          </div>
        :null}
        {type === 'Link_medium' ?
          <div>
            <div>
              <img src=''/>
              <div>
                <span>디스크립션</span>
              </div>
            </div>
          </div>
        :null}
        {type === 'Link_medium_deldelt' ?
          <div>
            <div>
              <img src=''/>
              <div>
                <span>디스크립션</span>
              </div>
            </div>
            <img src='대충 아이콘'/>
          </div>
        :null}
      
      ):null};




      <St.CardsWrapper $typename={type} $title={title} $description={description} $thumbnail={thumbnail} $isOpen={isOpen}>
        <TypographyComponent>{children}</TypographyComponent>
      </St.CardsWrapper>
    </>
  )
}

export default Cards;