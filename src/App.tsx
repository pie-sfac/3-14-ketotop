import { FoundationStyles, LayoutStyles, TypographyStyles } from '@lib/foundation';
import './App.css';

function App() {
  return (
    <>
      <FoundationStyles />
      <LayoutStyles size='tablet' system='android'>
        <TypographyStyles.Body1>Hello World</TypographyStyles.Body1>
      </LayoutStyles>
    </>
  );
}

export default App;
