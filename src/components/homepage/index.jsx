import React, { Component } from "react";
import { Button, Modal } from "react-materialize";
import CreatePost from "./createPost";
import PostView from "./postView";
import firebase from "firebase";
import "firebase/database";
class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    const db = firebase.firestore();
    db.collection("posts").onSnapshot((snapshot) => {
      const posts = [];
      snapshot.docs.forEach((doc) => {
        const docObj = { ...doc.data() };
        docObj.id = doc.id;
        posts.push(docObj);
      });
      this.setState({ posts });
    });
  }

  render() {
    const { posts } = this.state;
    return (
      <div className="container">
        <CreatePost />
        <Button
          className="teal"
          fab
          floating
          large
          node="button"
          onClick={() => {
            document.getElementById("createModalTrigger").click();
          }}
        ></Button>
        {posts.length > 0 ? <PostView posts={posts} /> : null}
      </div>
    );
  }
}

export default HomePage;
