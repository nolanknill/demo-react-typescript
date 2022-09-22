import './App.css';
import User from "./interfaces/User";
import UserList from "./components/UserList";

function App() {
  const users: User[] = [
    {
      id: 1,
      name: "Michael"
    }
  ];

  return (
    <UserList users={users} />
  );
}

export default App;
