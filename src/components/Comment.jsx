import React, { useState } from 'react';
import styled from 'styled-components';
import tw from 'tailwind-styled-components';

const Comment = ({ author, body }) => {
  const [isEdit, setIsEdit] = useState(false);
  const toggleIsEdit = (e) => {
    e.preventDefault();
    setIsEdit(!isEdit);
  };
  const [localContent, setLocalContent] = useState(body);

  return (
    <>
      <CommentAuthor>{author}</CommentAuthor>
      {/* 유저가 댓글 작성자일 때만 isEdit 가능하게 해야함.. */}
      <CommentContent>
        {isEdit ? (
          <input
            className='w-full p-3 border border-gray-500 rounded-lg'
            value={localContent}
            onChange={(e) => setLocalContent(e.target.value)}
          />
        ) : (
          body
        )}
      </CommentContent>
      {isEdit ? (
        <CommentButton onClick={toggleIsEdit}>수정 완료</CommentButton>
      ) : (
        <div>
          <CommentButton className='mr-3' onClick={toggleIsEdit}>
            수정하기
          </CommentButton>
          <CommentButton>삭제하기</CommentButton>
        </div>
      )}
    </>
  );
};

export default Comment;

const CommentAuthor = tw.span`
block
my-4
font-bold
`;

const CommentContent = tw(CommentAuthor)`
font-normal
`;

const CommentButton = tw.button`
text-sm
text-gray-400
`;
