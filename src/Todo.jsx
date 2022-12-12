import React, { useEffect } from 'react'
import { motion,AnimatePresence } from 'framer-motion'
function Todo({todo,undoTask,doneTask,delTodo,i}) {
  React.useEffect(()=>{
    alert(todo.title+'empty array use effect')
    return ()=>{alert('returned function inside empty array')}
  },[]);
  React.useEffect(()=>{
    alert(todo.title+'no use effect')
  });
  return (
    <AnimatePresence>
      <motion.li className='d-flex border border-2 border-danger p-2 m-2' key={i} initial={{x:-40}} animate={{ x: 4 }}
      transition={{ ease: "easeOut", duration: i*2+1 }} exit={{opacity:0,duration:2+i}} >
        <div className={(todo.status===true)?'strike':''}>{todo.title}</div>
        <div>
          {
            todo.status===true
            ?(<button onClick={()=>{undoTask(i)}}>Undo</button>)
            :(<button onClick={()=>{doneTask(i)}}>Done</button>)}
          <button onClick={()=>{delTodo(i)}}>Del</button>
        </div>
      </motion.li>
    </AnimatePresence>
  )
}

export default Todo