export default function PostCard({ title, body }) {
    return (
    <div style={{border: "1px solid white", borderRadius: "10px", padding: "10px", margin: "20px"}}>
      <h2>{title}</h2>
      <p>{body}</p>
    </div>

  );
}