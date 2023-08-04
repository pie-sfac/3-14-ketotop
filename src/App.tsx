// import { Fnd, Cmp } from 'pds-3-14'; // For Testing NPM package
import { Fnd, Cmp } from './lib/index'; // For Testing Local Files
import Picker from './lib/components/Picker/index1';

function App() {
  return (
    <>
      <Fnd.FoundationGlobalStyles />
      <Fnd.LayoutStyles>
      <Picker />
      <h1>hello</h1>
      </Fnd.LayoutStyles>
    </>
  );
}

export default App;
