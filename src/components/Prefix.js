function Prefix (props) {
   return (
      <div>
         <pre><span className='font-bold text-green-500'>llam4u@u-MacBook-Pro</span>: 
            {props.directory.map((data, index) =>
            <span className='text-blue-400 font-bold' key={index}>{index === 0 ? data : '/'+data}</span>
            )}
         $ </pre>
      </div>
   )
}

export default Prefix;
