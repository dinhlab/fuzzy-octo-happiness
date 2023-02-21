function AddTaskFrom ({ newTask, handleSubmit, handleInputChange }) {
  return (
    <form onSubmit={handleSubmit} className='form'>
      <label htmlFor='newitem'>Add to the todo list</label>
      <input type='text' id='newitem' value={newTask} onChange={handleInputChange} />
      <button type='submit'>Add Item</button>
    </form>
  )
}

export default AddTaskFrom
