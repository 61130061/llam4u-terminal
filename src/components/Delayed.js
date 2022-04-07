import React, { useState, useEffect } from 'react';

function Delayed ({ waitBeforeShow, children, setRunning, start, last, bottomRef }) {
   const [isShown, setIsShown] = useState(false);

   useEffect(() => {
      if (start) {
         setRunning(true);
      }
      setTimeout(() => {
         setIsShown(true);
         if (last) {
            setRunning(false);
         }
         bottomRef.current?.scrollIntoView();
      }, waitBeforeShow);
   }, [waitBeforeShow]);

   return isShown ? children : null;
}

export default Delayed;
