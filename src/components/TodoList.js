import React, { useEffect, useState } from 'react';

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [term, setTerm] = useState("");
    useEffect(
        () => {
            const fetchTodos = async () => {
                const res = await fetch("https://jsonplaceholder.typicode.com/todos");
                const json = await res.json();
                setTodos(json);
                console.log("todos", json);
            }

            fetchTodos();
        }, [])

    let renderTodos = todos.map((todo) => {
        return (
            <div key={todo.userId}>
                <p>
                    <strong> {todo.title}</strong>
                </p>
            </div>
        )
    })

    let filteredTodos = todos
        .slice(0, 10)
        .filter(({ title }) => {
        return title.indexOf(term) >= 0;
    })
        // .slice(0, 10)
        .map((todo) => {
            return (
                <div key={todo.id}>
                    <p>
                        <strong>{todo.title}</strong>
                    </p>
                </div>
            )
        })

    return (
        <div>
            {/* <h2>
                Todos List
            </h2>
            <input type="text" value={term} onChange={(e)=>{ setTerm(e.target.value)}}>
            </input>
            {renderTodos} */}

            <h2>
                Todos
            </h2>
            <input type="text" value={term} onChange={(e) => { setTerm(e.target.value) }}>
            </input>
            {filteredTodos}
        </div>
    )

}

export default TodoList;