import { useEffect, useState } from 'react';
import { Fnd, Cmp } from './lib/index'; // For Testing Local Files
import {CalendarStyle} from './lib/components/Picker';
import Time from './lib/components/Picker/Time/index';

function App() {
  const [dates, setDates] = useState<[Date | null, Date | null] | null>([null, null]);
  useEffect(() => {
    console.log(dates);
  }, [dates]);
  return (
    <>
      <Fnd.FoundationGlobalStyles />
      <Fnd.LayoutStyles>
        {/* <CalendarStyle.CalendarWrapper>
          <CalendarStyle.Calendar dates={dates} setDates={setDates} />
          <CalendarStyle.ButtonWrapper>
            <Cmp.Button.Contained state='normal' size='medium'>
              {'취소'}
            </Cmp.Button.Contained>
            <Cmp.Button.Contained state='enabled' size='medium'>
              {'완료'}
            </Cmp.Button.Contained>
          </CalendarStyle.ButtonWrapper>
        </CalendarStyle.CalendarWrapper> */}
        <Time />
      </Fnd.LayoutStyles>
    </>
  );
}

export default App;