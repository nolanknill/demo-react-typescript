import User from "../interfaces/User";

interface UserListProps {
    title: string,
    users: User[],
    active ?: boolean
}

const UserList: React.FC<UserListProps> = (props) => {
    return (
        <>
            <h2>{props.title}</h2>
            <ul>
                {props.users.map(user => (
                    <li key={user.id}>
                        <span>{user.name} is a(n) {user.horoscope}</span>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default UserList;