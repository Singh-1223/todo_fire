'use client'

import { useBoardStore } from '@/store/BoardStore'
import React, { useEffect } from 'react'
// import { DragDropContext, Droppable } from 'react-beautiful-dnd';
const Board = () => {
  const getBoard = useBoardStore((state) => state.getBoard());
   
  // useEffect(()=>{
  //   getBoard();
  // },[getBoard]);

  return (
     <p>hi</p>
    //  <DragDropContext>
    //      <Droppable droppableId="board" direction='horizontal' type="column">
    //         {(provided)=>(
    //             <div> {/* renderring all columns*/}</div>
    //         )}
    //      </Droppable>
    //  </DragDropContext>
  )
}

export default Board
