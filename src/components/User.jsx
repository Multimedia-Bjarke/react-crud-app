import { useNavigate } from "react-router";

export default function User({ user }) {
  const navigate = useNavigate();

  function handleClick(params) {
    navigate("/users/${user.id}");
  }

  return (
    <article className="user-card">
      <img
        src={
          user.image || "https://placehold.co/600x400?text=Error+loading+image"
        }
        alt={user.name}
      />
      <h2>{user.name}</h2>
      <p className="title">{user.title}</p>
      <p>
        <a href={`mailto:${user.mail}`}>{user.mail}</a>
      </p>
    </article>
  );
}
