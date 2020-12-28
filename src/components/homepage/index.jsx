import React from "react";
import { Button, Modal } from "react-materialize";
import CreatePost from "./createPost";

export default function HomePage() {
  return (
    <div>
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
    </div>
  );
}
