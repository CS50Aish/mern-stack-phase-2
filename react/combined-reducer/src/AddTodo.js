import React from "react";

function AddTodo({ AddTodo }){
    const [text, setText] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        addTodo({
            id: Date.now(),
            text
        });
        setText('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={text} onChange={e => setText(e.target.value)}></input>
            <button type="submit">Add Todo</button>
        </form>
    );
}

export default AddTodo;