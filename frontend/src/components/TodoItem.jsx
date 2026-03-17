import React, { useState } from 'react'
import "./TodoItem.css"
import { useTodoStore } from '../contexts/TodoContext'
const TodoItem = ({
  id,
  done,
  content,
  date,
}) => {

  const { onUpdate, onDelete } = useTodoStore()

  const [edit, setEdit] = useState({
    isEdit: false,
    content: content
  })

  const onChangeEdit = (key, value) => {
    setEdit((prev) => ({
      ...prev,
      [key]: value
    }))
  }

  const handleEdit = () => {
    onChangeEdit("isEdit", true)
  }


  return (
    <div className={`TodoItem ${done ? 'done' : ''}`}>
      {edit.isEdit ? (
        <div>
          <input type="checkbox"
            checked={done}
            onChange={() => onUpdate(id)} />
          <div className="content">{content}</div>
          <div className="date">{new Date(date).toLocaleDateString()}</div>
          <button onClick={handleEdit}>저장</button>
          <button >취소</button>

        </div>
      ) : (
        <div>
          <input type="checkbox"
            checked={done}
            onChange={() => onUpdate(id)} />
          <div className="content">{content}</div>
          <div className="date">{new Date(date).toLocaleDateString()}</div>
          <button onClick={handleEdit}>수정</button>
          <button onClick={() => onDelete(id)}>삭제</button>
        </div>
      )
      }




    </div >
  )
}

export default TodoItem