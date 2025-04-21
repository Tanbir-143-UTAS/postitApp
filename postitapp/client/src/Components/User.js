import user from "../Images/user.png";
import { useSelector } from "react-redux";
const User = () => {
  const email = useSelector((state) => state.users.user.email);
  const name = useSelector((state) => state.users.user.name);
  const picURL = "http://localhost:3001/uploads/" + user.profilePic;
  return (
    <div>
      <img src={picURL} className="userImage" />
      <p>
        {name}
        <br />
        {email}
      </p>
    </div>
  );
};
export default User;
