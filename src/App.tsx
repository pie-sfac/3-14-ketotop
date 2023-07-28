import { styled } from 'styled-components';
import { Fnd } from 'pds-3-14';
function App() {
  return (
    <>
      <Fnd.FoundationGlobalStyles />
      <Fnd.LayoutStyles>
        <Fnd.IconStyles name={'add'} />
        <Test>hello</Test>
        <h1>hello</h1>
      </Fnd.LayoutStyles>
    </>
  );
}

export default App;

const Test = styled.div`
  ${Fnd.ShadowBoxStyles}
`;
