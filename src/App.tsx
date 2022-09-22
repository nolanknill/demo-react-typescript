import UserList from "./components/UserList";
import User from "./interfaces/User";
import HoroscopeSign from "./enums/HoroscopeSign";

function App() {
  const users: User[] = [
    {
      id: 1,
      name: "Person1",
      horoscope: HoroscopeSign.Aquarius
    }, {
      id: 2,
      name: "Person2",
      horoscope: HoroscopeSign.Aries
    }, {
      id: 3,
      name: "Person3",
      horoscope: HoroscopeSign.Cancer
    }
  ];

  return (
    <>
      <h1>App</h1>
      <UserList title={"User List"} users={users} />
    </>
  );
}

export default App;
