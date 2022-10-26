import { useEffect, useState } from 'react';

import Command from './components/Command';
import Boot from './components/Boot';

function App() {
   const [isBooting, setBooting] = useState(true);
   const [dark, setDark] = useState(window.matchMedia("(prefers-color-scheme: dark)").matches);

   useEffect(() => {
      if (dark) {
         document.documentElement.classList.add('dark');
      } else {
         document.documentElement.classList.remove('dark');
      }
   }, [dark]);

   return (
      <div className="text-black bg-white dark:bg-black dark:text-white overflow-x-hidden md:text-[16px] text-sm leading-[18px] md:p-3 p-1">
         {isBooting ?
            <Boot setBoot={setBooting} /> :
            <Command setDark={setDark} />
         }
      </div>
   );
}

export default App;
