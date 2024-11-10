import React, { useState } from 'react';

function EditTask({ task, onUpdate }) {
  const [text, setText] = useState(task.text);

  const handleSubmit = e => {
    e.preventDefault();
    onUpdate(task._id, text);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button type="submit">Update Task</button>
    </form>
  );
}

export default EditTask;
