import React from "react";
import { Card } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import { BiMessageDetail } from "react-icons/bi";

const CommentCard = ({ comments }) => {
  return (
    <div>
      <Card
        style={{ width: "18rem", height:  "25rem",margin: 20, backgroundColor: "#395685" }}
        className="text-center"
        text="white"
      >
        <Card.Header>{comments.name}</Card.Header>
        <Card.Body>
          <BiMessageDetail size="15" />
          <Card.Text>{comments.body}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <FaUserCircle size="15" />
          <br />
          {comments.email}
        </Card.Footer>
      </Card>
    </div>
  );
};

export default CommentCard;
