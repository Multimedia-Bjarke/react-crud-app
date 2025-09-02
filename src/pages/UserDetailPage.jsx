import { useParams } from "react-router";
import { useEffect, useState } from "react";

export default function UserDetailPage() {
  const { id } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    const data = localStorage.getItem("users");
    const usersData = JSON.parse(data) || [];
    const user = usersData.find((user) => user.id === id);
    setUser(user);
  }, [id]);

  return (
    <div id="user-page" className="page">
      <div className="container">
        <h1>User Detail Page</h1>
        <p>User Id: {id}</p>
        {/* Display user details here */}
      </div>
    </div>
  );
}
