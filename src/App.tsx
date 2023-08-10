// import { Fnd, Cmp } from 'pds-3-14'; // For Testing NPM package
import { Fnd, Cmp } from './lib/index'; // For Testing Local Files
import ButtonFAB from './lib/components/ButtonFAB';

function App() {
  return (
    <>
      <Fnd.FoundationGlobalStyles />
      <Fnd.LayoutStyles>
      {/* <ButtonFAB.Round>
        + 문항 추가하기
      </ButtonFAB.Round> */}
      <ButtonFAB.Circle 
      onClickEffect={() =>{
        window.location.href = 'https://naver.com'
      }}
      />
      </Fnd.LayoutStyles>
    </>
  );
}

export default App;
