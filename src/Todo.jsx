import React from 'react'
import { motion,AnimatePresence } from 'framer-motion'
function Todo({todo,undoTask,doneTask,delTodo,i}) {
  return (
    <AnimatePresence>
      <motion.li className='d-flex' key={i} initial={{x:-40}} animate={{ x: 4 }}
      transition={{ ease: "easeOut", duration: 1 }} exit={{opacity:0,duration:2}}>
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