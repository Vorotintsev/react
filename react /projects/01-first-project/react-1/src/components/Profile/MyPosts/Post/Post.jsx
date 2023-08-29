import s from "./Post.module.css";

function Post(props) {
  return (
    <div>
      <div className={s.item}>{props.message}</div>
      <div>like {props.likesCount}</div>
    </div>
  );
}

export default Post;
