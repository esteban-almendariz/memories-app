import React, { useSyncExternalStore } from "react";
import UsersList from "../components/UsersList";

const Users = () => {
    const USERS = [
        {
            id: "u1",
            name: "Esteban Almendariz",
            image: "https://cdn-icons-png.flaticon.com/512/145/145867.png",
            places: 3
        }
    ]

    return (
        <UsersList items={USERS} />
    )
}

export default Users;