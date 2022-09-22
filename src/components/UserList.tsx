import React from "react";
import User from "../interfaces/User";

interface UserListProps {
    users: User[]
}

const UserList: React.FC<UserListProps> = ({users}) => {
    return (
        <>
            <ul>
            {users.map(user => (
                <li key={user.id}>
                    <span>{user.name}</span>
                </li>
            ))}
            </ul>
        </>
    );
};

export default UserList;