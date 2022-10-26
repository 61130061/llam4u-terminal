import { useState, useRef, useEffect } from 'react';

import Behind from './Behind';
import Prefix from './Prefix';
import { welcome, help } from './TextArt';
import { getResult, disk, outside, commandsArr } from './Action';
import Delayed from './Delayed';


function getDirectory (database, target) {
   const targetArr = target.split('/');
   var cur = database; 
   var isExist = false;
   for (let i=1; i<targetArr.length; i++) {
      isExist = false;
      for (const [key, value] of Object.entries(cur)) {
         if (key === targetArr[i]) {
            const keep = cur;
            cur = keep[key]; 
            isExist = true;
            break;
         }
      }
      if (!isExist) {
         return false;
      }
   }
   return cur;
}

function getFiles (target) {
   const result = []
   const obj = getDirectory(disk, target.join('/'));
   for (const [key, value] of Object.entries(obj)) {
      result.push(key);
   }
   return result;
}


function Command ({ setDark }) {
   const refInput = useRef();
   const [input, setInput] = useState([]);
   const [selectIndex, setSelectIndex] = useState(input.length);
   const [history, setHistory] = useState([]);
   const bottomRef = useRef(null);
   const [directory, setDirectory] = useState(['~']);
   const [isInputFocus, setInputFocus] = useState(false);
   const [isPageFocus, setPageFocus] = useState(false);
   const [isRunning, setRunning] = useState(false);
   const [inputComplete, setInputComplete] = useState(commandsArr);

   const scrollToBottom = () => {
      bottomRef.current?.scrollIntoView();
   }

   useEffect(() => {
      scrollToBottom();
      refInput.current.focus();
   }, [history, input]);

   const handleOnBlur = (e) => {
      var x = window.scrollX, y = window.scrollY;
      refInput.current.focus();
      window.scrollTo(x, y);
   }

   const handleKeyPress = async (e) => {
      const mainInput = input.join('').split('\xa0')[0];
      var delayLoading = 0;
      var isResize = false;
      if (e.key === 'Enter' && !isRunning) {
         setRunning(true);
         const showCommand = [];
         var isLogFile = false;
         switch (mainInput) {
            case 'help':
               showCommand.push('help');
               break;
            case 'whoami':
               if (input.join('').split('\xa0').length === 1) {
                  showCommand.push('whoami');
                  delayLoading = 50;
                  isResize = true;
               } else {
                  showCommand.push('whoami error');
               }
               break;
            case 'cat':
               if (input.join('').split('\xa0').length > 1) {
                  const arg1 = input.join('').split('\xa0')[1];
                  const file = getDirectory(disk, directory.join('/')+'/'+arg1);
                  if (typeof file === 'object') {
                     showCommand.push('cat directory', arg1);
                  }
                  else if (typeof file === 'string') {
                     showCommand.push('cat '+file);
                     if (file === 'boot.log') {
                        isLogFile = true;
                     }
                  }
                  else if (file === false) {
                     showCommand.push('cat not found', arg1);
                  }
               } else {
                  showCommand.push('usage', 'cat');
               }
               break;
            case 'cd':
               if (input.join('').split('\xa0').length === 1) {
                  setDirectory([...'~']);
                  showCommand.push('nothing');
               } else {
                  // Check if directory exist
                  const arg1 = input.join('').split('\xa0')[1];
                  if (arg1 === '..') {
                     const newDirectory = directory.join('/').split('/');
                     if (newDirectory.length > 1) {
                        newDirectory.pop();
                        setDirectory([...newDirectory]);
                     }
                     showCommand.push('nothing');
                  } else {
                     const targetDirectory = getDirectory(disk, directory.join('/')+'/'+arg1);
                     if (typeof targetDirectory === 'object') {
                        setDirectory([...directory, arg1]);
                        showCommand.push('nothing');
                     }
                     else if (typeof targetDirectory === 'string') {
                        showCommand.push('cd not directory', arg1);
                     }
                     else {
                        showCommand.push('cd not found', arg1);
                     }
                  }
               }
               break;
            case 'ls':
               showCommand.push('show ls', getFiles(directory));
               break;
            case '':
               if (input.length === 0) {
                  showCommand.push('nothing');
               }
               break;
            case 'open':
               if (input.join('').split('\xa0').length > 1) {
                  const arg1 = input.join('').split('\xa0')[1];
                  const file = getDirectory(disk, directory.join('/')+'/'+arg1);
                  if (typeof file === 'object') {
                     showCommand.push('open directory', arg1);
                  }
                  else if (typeof file === 'string') {
                     if (outside[file]) {
                        showCommand.push('nothing');
                        window.open(outside[file], '_blank');
                     } else {
                        showCommand.push('open not available', file);
                     }
                  }
                  else if (file === false) {
                     showCommand.push('open not found', arg1);
                  }
               } else {
                  showCommand.push('usage', 'open');
               }
               break;
            case 'theme':
               if (input.join('').split('\xa0').length > 1) {
                  const arg1 = input.join('').split('\xa0')[1];
                  if (arg1 == 'dark') {
                     setDark(true);
                  } else if (arg1 == 'light') {
                     setDark(false);
                  } else {
                     showCommand.push('usage', 'theme');
                  }
               } else {
                  showCommand.push('usage', 'theme');
               }
               break
            default:
               showCommand.push('not found', mainInput);
         }
         if (mainInput === 'clear') {
            setHistory([]);
         } else {
            const result = await getResult(showCommand);
            setHistory([...history, {
               input: input,
               directory: directory,
               delay: delayLoading,
               isLogFile: isLogFile,
               isResize: isResize,
               result
            }]);
         }
         setRunning(false);
         setInput([]);
         setSelectIndex(0);
      }
      else if (e.key === ' ') {
         const newArr = input;
         newArr.splice(selectIndex, 0, '\xa0');
         setInput([...newArr]);
         setSelectIndex(selectIndex+1);
      }
      else {
         if (e.key !== 'Enter') {
            const newArr = input;
            newArr.splice(selectIndex, 0, e.key);
            setInput([...newArr]);
            setSelectIndex(selectIndex+1);
         }
      }
   }

   const handleKeyDown = (e) => {
      if (e.keyCode === 8) {
         if (selectIndex > 0) {
            const newArr = input;
            newArr.splice(selectIndex-1,1);
            setSelectIndex(selectIndex-1);
            setInput([...newArr]);
         }
      } else if (e.keyCode === 37) {
         if (selectIndex > 0) {
            setSelectIndex(selectIndex-1);
         }
      } else if (e.keyCode === 39) {
         if (selectIndex < input.length) {
            setSelectIndex(selectIndex+1);
         }
      } else if (e.ctrlKey && e.keyCode === 76) {
         setHistory([]);
      } else if (e.ctrlKey && e.keyCode === 67) {
         setHistory([...history, {
            input: input,
            directory: directory,
            delay: 0,
            isLogFile: false,
            isResize: false,
            result: []
         }]);
         setInput([]);
         setSelectIndex(0);      
      } else if (e.key === 'Tab') {
         e.preventDefault();
         if (inputComplete.includes(input.join(''))) {
            var completeIndex = inputComplete.indexOf(input.join(''));
            if (completeIndex === inputComplete.length-1) {
               completeIndex = -1
            }
            setInput([...inputComplete[completeIndex+1].split('')]);
            setSelectIndex(inputComplete[completeIndex+1].split('').length);
            console.log(inputComplete);
         } else {
            var filter = [];
            if (input.length === 0) {
               filter = commandsArr;
            }
            else if (input.join('').split(' ').length === 1) {
               filter = commandsArr.filter(el => el.substring(0, input.length) === input.join(''));
            }
            setInputComplete([...filter]);
            setInput([...filter[0].split('')]);
            setSelectIndex(filter[0].split('').length);
         }
      }
   }

   const typeStyle = (index) => {
      if (index == selectIndex) {
         return 'bg-gray-400'
      }
      return ''
   }


   return(
      <div>
         {welcome.map((item, index) => 
         <Delayed key={index} waitBeforeShow={50*(index+1)} start={index === 0 ? true:false} last={index === welcome.length-1 ? true:false} setRunning={setRunning} bottomRef={bottomRef}>
            <pre className='whitespace-pre-wrap sm:text-[16px] sm:leading-[18px] text-[10px] leading-[12px]' dangerouslySetInnerHTML={{ __html: item }} />
         </Delayed>
         )}
         {help.map((item, index) => 
         <Delayed key={index} waitBeforeShow={50*(welcome.length+index+1)} start={index === 0 ? true:false} last={index === help.length-1 ? true:false} setRunning={setRunning} bottomRef={bottomRef}>
            <pre className='whitespace-pre-wrap' dangerouslySetInnerHTML={{ __html: item }} />
         </Delayed>
         )}
         {history.map((item, index) => 
            <Behind isLogFile={item.isLogFile} isResize={item.isResize} key={index} delay={item.delay} directory={item.directory} data={item.input} result={item.result} setRunning={setRunning} bottomRef={bottomRef} />
         )}
         <div ref={bottomRef} className='flex flex-wrap z-20 pb-3'>
            {!isRunning &&
            <>
               <Prefix directory={directory} />
               {input.map((data, index) => 
                  <pre className={typeStyle(index)} key={index}>{data}</pre>
               )}
               {selectIndex == input.length &&
                  <div className='px-[4px] bg-gray-400 animate-flicker' />
               }
            </>
            }
            <input id='input' onBlur={handleOnBlur} ref={refInput} value={''} type='text' placeholder='input box' className='absolute w-[90%] opacity-0 bg-white text-black z-30' onKeyPress={handleKeyPress} onKeyDown={handleKeyDown} />
         </div>
      </div>
   )
}

export default Command;
