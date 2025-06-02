import React from 'react'
// import Comment from "./Comment";
import CommentsList from './CommentsList';

const CommentsConatiner = () => {
    const userComments = [
        {
          id: 1,
          name: "Rakshitha",
          comment: "Lorem ipsum...",
          reply: [
            {
              id: 2,
              name: "Rakshitha",
              comment: "Nested reply 1",
              reply: [
                {
                  id: 3,
                  name: "Rakshitha",
                  comment: "Nested reply 2",
                  reply: [
                    {
                    id: 4,
                    name: "Rakshitha",
                    comment: "Nested reply 3",
                    reply: []
                  }
                ]
                }
              ]
            },
            {
                id: 6,
                name: "Rakshitha",
                comment: "Nested reply 3",
                reply: []
            }
          ]
        },
        {
          id: 5,
          name: "Rakshitha",
          comment: "Another top-level comment",
          reply: []
        }
      ];
      
  return (
    <div className="ml-20 my-5 w-3/5">
        <h1 className="font-bold text-xl">Comments:</h1>
        <CommentsList comments={userComments}/>
      </div>
  )
}

export default CommentsConatiner