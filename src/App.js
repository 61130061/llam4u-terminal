import { useEffect, useState } from 'react';

import Command from './components/Command';
import Boot from './components/Boot';

function App() {
   const [isBooting, setBooting] = useState(true);

   return (
      <div className="text-white overflow-x-hidden md:text-[16px] text-sm leading-[18px] md:p-3 p-1">
         {isBooting ?
            <Boot setBoot={setBooting}  />:
            <Command />
         }
      </div>
   );
}

export default App;
