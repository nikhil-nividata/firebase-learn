import React from "react";
import { Collapsible, CollapsibleItem, Button } from "react-materialize";
import firebase from "firebase";
import "firebase/functions";

export default function index({ posts }) {
  return (
    <div>
      <Collapsible accordion>
        {posts.map((post) => (
          <CollapsibleItem
            expanded={false}
            header={post.title}
            key={post.id}
            node="div"
          >
            <p>{post.post}</p>
            <Button
              flat
              onClick={() => {
                const functions = firebase.functions();
                const upvote = functions.httpsCallable("upvotePost");
                upvote({ postId: post.id }).catch((error) =>
                  console.log(error)
                );
              }}
            >
              <i className="medium material-icons">north</i>
            </Button>{" "}
            {post.upvotes}
          </CollapsibleItem>
        ))}
      </Collapsible>
    </div>
  );
}
