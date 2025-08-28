import { NavLink } from "react-router-dom";
import userData from "../data/userData";
import User from "./User";

function Home() {
  return (
    <div>
      <h2>User Management System<br></br> Active User</h2>
        {userData.map((user, index) => (
            <NavLink key={index} to={`/user/${user.id}`}>
              <User user={user} />
            </NavLink>
        ))}
    </div>
  )
}

export default Home