export default function PostForm({ 
    newPost,
    handleOnChange,
    handleOnSubmit
}) {
  return (
    <div>
      <h2>Post Form</h2>
      <form onSubmit={handleOnSubmit} style={{border: "1px solid white", borderRadius: "10px", padding: "10px", margin: "20px"}}>
        <div>
          <label>Title:</label>
          <input type="text" name="title" value={newPost.title} onChange={handleOnChange}/>
        </div>
        <div>
          <label>Body:</label>
          <textarea name="body" value={newPost.body} onChange={handleOnChange} rows="4" cols="40"/>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}