import { useEffect, useRef, useState } from 'react';

import Delayed from './Delayed';
import bootLogTxt from '../contents/boot_log.txt';

function Status ({ loadTime }) {
   const [isLoading, setLoading] = useState(true);

   useEffect(() => {
      setTimeout(() => {
         setLoading(false);
      }, loadTime);
   }, [loadTime]);


   return(
      <div className='flex justify-between mr-3'>
         <div>[</div>
         {isLoading ?
         <div className='flex justify-center w-20'>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
         </div>:
         <div className='ok-text text-green-500'>Ok</div>
         }
         <div>]</div>
      </div>
   )
}

function Boot ({ setBoot }) {
   const [bootArr, setBootArr] = useState([]);
   //const bootArr = bootLog.split(/\r?\n/);
   const bottomRef = useRef();

   useEffect(() => {
      fetch(bootLogTxt).then(res => res.text()).then(data => setBootArr(`${data}`.split(/\r?\n/)));
   }, []);

   return(
      <div>
         {bootArr.map((item, index) => 
         <Delayed key={index} setRunning={setBoot} last={index === bootArr.length-1 ? true:false} waitBeforeShow={index === 0 ? 0 : (index === bootArr.length-1 ? 3000+5000 + 30*(index+1) : 3000 + 30*(index+1))} bottomRef={bottomRef}>
            <div key={index} className='flex'>
               <Status loadTime={index === 0 ? 3000 : 0} />
               <pre className='whitespace-pre-line' dangerouslySetInnerHTML={{ __html: item }} />
            </div>
         </Delayed>
         )}
         <div ref={bottomRef} />
      </div>
   );
}

export default Boot;
