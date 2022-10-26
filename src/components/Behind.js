import Prefix from './Prefix';
import Delayed from './Delayed';

function Behind (props) {

   return(
      <div>
         <div className='flex flex-wrap'>
            <Prefix directory={props.directory} />
            {props.data.map((data, index) => 
               <pre className='whitespace-pre-wrap' key={index} dangerouslySetInnerHTML={{ __html: data }} />
            )}
         </div>
         {props.result.map((data, index) =>
            <Delayed key={index} bottomRef={props.bottomRef} waitBeforeShow={props.delay*(index+1)} start={index === 0 ? true:false} last={index === props.result.length-1 ? true:false} setRunning={props.setRunning}>
               <div className='flex'>
                  {props.isLogFile &&
                  <div className='flex justify-between mr-3'>
                     <div>[</div>
                     <div className='ok-text text-green-500'>Ok</div>
                     <div>]</div>
                  </div>
                  }
                  {props.isResize ?
                     <pre className='whitespace-pre-wrap text-center sm:max-w-[680px] sm:text-[16px] sm:leading-[18px] text-[10px] leading-[12px]' key={index} dangerouslySetInnerHTML={{ __html: data }} />:
                     <pre className='whitespace-pre-wrap' key={index} dangerouslySetInnerHTML={{ __html: data }} />
                  }
               </div>
            </Delayed>
         )}
      </div>
   )
}

export default Behind;
