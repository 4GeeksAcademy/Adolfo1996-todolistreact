import React, { useState } from "react";

const Home = () => {
	const [inputValue, setInputValue] = useState("")
	const [todos, setTodos] = useState([])
	return (
		<div className="container">
			<h1>My Todos</h1>
			<ul>
				<li>
					<input
						type="text"
						onChange={(e) => setInputValue(e.target.value)}
						value={inputValue}
						onKeyDown={(e) => {
							console.log(e.key)
							if (e.key === "Enter") {
								console.log("Enter was pressed");
		//							setTodos(todos.concat(inputValue));
								setTodos ([...todos,inputValue])
								setInputValue("");

							}
						}}
						placeholder="What do you need to do?"></input>
				</li>
				{todos.map ((item, index) => (
					<li className= "d-flex justify-content-between">
						{item}
						<i class="fas fa-trash-alt" onClick={() => setTodos(todos.filter((t, currentIndex) => index != currentIndex))}></i>
					</li>

				))}
			</ul>
			<div>{todos.length}</div>
		</div >
	)
}

export default Home;
