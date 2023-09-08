import { useState } from "react"
const AddTask = ({onAdd}) => {
    const [text,setText] = useState('')
    const [day,setday] =  useState('')
    const [reminder,setreminder] = useState(false)
    const onSubmit = (e) =>{
        e.preventDefault()
        if (!text) {
            alert('please add Text')
        }
        onAdd({text, day, reminder})
        setText('')
        setday('')
        setreminder(false)
    }
  return (
    <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
        <label>Task</label>
        <input type="text" placeholder="Add Task" value={text} onChange={(e) => setText(e.target.value)}></input>
        </div>

        <div className="form-control">
        <label>Day & time</label>
        <input type="text" placeholder="Add Day & time" value={day} onChange={(e) => setday(e.target.value)}></input>
        </div>

        <div className="form-control form-control-check">
        <label>Set Reminder</label>
        <input type="checkbox" checked={reminder} value={reminder} onChange={(e) => setreminder(e.currentTarget.checked)}></input>
        </div>

        <input type="submit" value='Save Task' className="btn btn-block"></input>
    </form>
  )
}

export default AddTask