import React, { Component } from "react";
import PostView from "../homepage/postView";
import firebase from "firebase";
import "firebase/database";

class MyPosts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uid: props.uid,
      myPosts: [],
    };
  }

  componentDidMount() {
    this.loadMyPosts();
  }

  loadMyPosts = () => {
    const db = firebase.firestore();
    const uid = firebase.auth().currentUser.uid;
    db.collection("posts")
      .where("user", "==", uid)
      .get()
      .then((snapshot) => {
        const myPosts = [];
        snapshot.docs.forEach((doc) => {
          const docObj = { ...doc.data() };
          docObj.id = doc.id;
          myPosts.push(docObj);
        });
        this.setState({ myPosts });
      });
  };

  render() {
    const { myPosts } = this.state;
    return (
      <div className="container">
        <h3 className="center-align">My Posts</h3>
        {myPosts.length > 0 ? <PostView posts={myPosts} /> : null}
      </div>
    );
  }
}

export default MyPosts;
