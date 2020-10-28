import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import PostList from "./components/postList";
import UserList from "./components/usersList";
import CommentsList from "./components/commentList";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={UserList} />
        <Route exact path="/user/:id" component={PostList} />
        <Route exact path="/user/:id/post/:id" component={CommentsList} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
