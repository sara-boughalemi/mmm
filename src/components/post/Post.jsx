import "./post.css";

export default function Post({ post }) {
  return (
    <div className="postCard">
      <div className="postImg">
        <img className="post" src={post.img} alt="" />

        <div className="postInfo">
          <div className="postCats">
            <span className="postCat">{post.type}</span>
          </div>

          <span className="postTitle">{post.title}</span>
          <hr />
          <span className="postData">{post.postDate}</span>
        </div>
        <p className="postDesc">{post.postDescription}</p>
      </div>
    </div>
  );
}
