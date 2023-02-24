import React, { useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import hello from '/posts/hello.md'

const list = () => {
  return (
    <ReactMarkdown>{hello}</ReactMarkdown>
  )
};

export default list;