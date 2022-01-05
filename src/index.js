import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

if (module.hot) {
  module.hot.accept();
}

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
     < CommentDetail author = "Sam" timeAgo="today at 2:00 pm" content="Nice post!" avatar={faker.image.image()}/>
     </ApprovalCard>
     <ApprovalCard>
     < CommentDetail author = "Alex" timeAgo="today at 4:00 pm" content="I  like the subject!" avatar={faker.image.image()}/>
     </ApprovalCard>
     <ApprovalCard>
     < CommentDetail author = "John" timeAgo="today at 5:00 pm" content="Amazing post!" avatar={faker.image.image()}/>
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
