// import { Fnd, Cmp } from 'pds-3-14'; // For Testing NPM package
import { useState } from 'react';
import { Fnd, Cmp } from './lib/index'; // For Testing Local Files

function App() {
  const [isOpenFirstDialog, setIsOpenFirstDialog] = useState(false);
  return (
    <>
      <Fnd.FoundationGlobalStyles />
      <Fnd.LayoutStyles>
        <h1>TS TEST</h1>
        <button onClick={() => setIsOpenFirstDialog(true)}>open</button>
        <Cmp.Dialog.Display
          title='엄청나게 길이가 긴 텍스트여서 두 줄로 말줄임이 되어야하는 제목입니다 잘 렌더되는지 테스트 해주세요'
          description={
            '엄청나게 길이가 긴 텍스트여서 세 줄로 말줄임이 되어야하는 제목입니다 잘 렌더되는지 테스트 해주세요 아무런 의미없는 테스트 문구입니다 로렘 입섬은 아무런 의미없는 줄 글이다'
          }
          isOpen={isOpenFirstDialog}
          onCloseEffect={() => setIsOpenFirstDialog(false)}
        >
          <Cmp.Dialog.GrayButton>Gray</Cmp.Dialog.GrayButton>
          <Cmp.Dialog.PriButton>Pri</Cmp.Dialog.PriButton>
        </Cmp.Dialog.Display>
      </Fnd.LayoutStyles>
    </>
  );
}

export default App;
