import React from "react";
import { Button, Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CommentCard from "./commentCard";

const CommentsList = ({ match }) => {
  const comments = useSelector((state) =>
    state.comments.filter((comment) => comment.postId === +match.params.id)
  );
  const post = useSelector((state) =>
    state.posts.find((post) => post.id === +match.params.id)
  );
  const user = useSelector((state) =>
    state.users.find((user) => post.userId === user.id)
  );
  return (
    <div className="d-flex flex-column align-items-center">
      <Card
        style={{ margin: 20, width: "20rem",backgroundColor: "#395685" }}
        className="text-center"
        text="white"
      >
        <Card.Header>{post.title}</Card.Header>
        <Card.Body>
          <Card.Title>{user.name}</Card.Title>
        </Card.Body>
        <Card.Body>
          <Card.Text>{post.body}</Card.Text>
          <Link to={`/user/${user.id}`}>
            <Button>Go Back</Button>
          </Link>
        </Card.Body>
      </Card>
      <div className="d-flex flex-wrap">
        {comments.map((comment) => (
          <CommentCard comments={comment} key={comment.id} />
        ))}
      </div>
    </div>
  );
};

export default CommentsList;
