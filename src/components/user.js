import React from "react";
import { Card, Button } from "react-bootstrap";
import {
  FaHome,
  FaMailBulk,
  FaPhoneSquareAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const User = ({ user }) => {
  return (
    <Card
      style={{ width: "18rem", margin: 20, backgroundColor: "#395685" }}
      className="text-center"
      text="white"
    >
      <Card.Header>
        {user.username}
      </Card.Header>
      <Card.Body>
        <Card.Img
          src="user.png"
          style={{ width: 64 }}
        />
        <Card.Text>{user.name}</Card.Text>
        <FaHome size="15" style={{ marginRight: 10 }} />
        {user.address.city}
        <br />
        <FaMailBulk size="15" style={{ marginRight: 10 }} />
        {user.email}
        <br />
        <FaPhoneSquareAlt size="15" style={{ marginRight: 10 }} />
        {user.phone}
        <br />
        <Link to={`/user/${user.id}`}>
          <Button variant="primary">Posts</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default User;
