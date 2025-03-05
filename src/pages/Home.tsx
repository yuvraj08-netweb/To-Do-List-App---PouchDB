import TodoList from "../features/todos/TodoList"

const Home = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <TodoList/>
    </div>
  )
}

export default Home