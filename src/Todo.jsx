import React, { useEffect } from 'react'
import { motion,AnimatePresence } from 'framer-motion'
function Todo({status,title,id,undoTask,doneTask,delTodo,i}) {
  React.useEffect(()=>{
    console.log(title+"mounted")
    return ()=>{console.log('returned function inside empty array')}
  },[]);
  React.useEffect(()=>{
    console.log(title+"rendered")
  });
  return (
    <AnimatePresence>
      <motion.li className='d-flex border border-2 border-danger p-2 m-2' key={id} initial={{x:-40}} animate={{ x: 10 }}
      transition={{ ease: "easeOut", duration: i*2+1 }} exit={{opacity:0,duration:3}} >
        <div className={(status===true)?'strike':''}>{title}</div>
        <div>
          {
            status===true
            ?(<button onClick={()=>{undoTask(i)}}>Undo</button>)
            :(<button onClick={()=>{doneTask(i)}}>Done</button>)}
          <button onClick={()=>{delTodo(i)}}>Del</button>
        </div>
      </motion.li>
    </AnimatePresence>
  )
}

export default React.memo(Todo)