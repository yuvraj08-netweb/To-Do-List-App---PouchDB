import { Button } from "antd"
import TodoList from "../features/todos/TodoList"
import { useAuthStore } from "../state/useAuthStore";

const Home = () => {

  const {logout} = useAuthStore();

  const handleLogout = async () => {
    // Call the logout function from the auth service
    await logout();
  };
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center relative">
      <div className="btnContainer absolute top-5 right-5">

      <Button
        variant="filled"
        color="volcano"
        onClick={handleLogout}
        >Logout</Button>
        </div>
      <TodoList/>
    </div>
  )
}

export default Home