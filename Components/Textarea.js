import React, { useState } from 'react';

const page = ()=>{
    const [count,setCount] = useState({
        wordCount : 0,
        charCount : 0
       })
      
    const handlecount = (e)=>{
        const word = e.target.value;
        const counttemp = (word)=>{
            if(word.length===0){
                return 0;
            }
            else{
                const withoutspaces = word.trim();
                return withoutspaces.split(" ").length;
            }
        }
        setCount({
            wordCount : counttemp(word),
            charCount:word.length
        })
      }
    return (<>
    <div className='container-sm m-auto block '>
        <div className=' cont bg-slate-300 mx-auto text-center p-3 shadow-md my-32'>
            <h1 className='m-5'>Responsive Paragraph Counter</h1>
            <textarea  className=' w-full h-40 p-4' placeholder='Ramya 21bce8918' onChange={handlecount}></textarea>
            <h2>WordCount: {count.wordCount}</h2>

        </div>
    </div>
    
    </>)
}
export default page;