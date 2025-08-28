import { useNavigate, useParams } from "react-router-dom";
import userData from "../data/userData";

function UserInfo() {
  
  const {id} = useParams();
  const navigate = useNavigate();
  const userDetail = userData.find(u => u.id === parseInt(id));
  if (!userDetail) return <div>User not found.</div>;
  return (
    <>
    <div>
      <h2>{userDetail.name}</h2>
      <p>Age: {userDetail.age}</p>
      <p>Date of Birth: {userDetail.dob}</p>
      <img src={userDetail.image} alt={userDetail.name} />
    </div>
    <br></br>
    <button onClick={() => navigate(-1)}>Back to User List</button>
    </>
  )
}

export default UserInfo