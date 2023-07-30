import React, { useRef, useEffect } from 'react'
import Message from './Message'
import SendMessage from './SendMessage'

const ChatBox = () => {
  const messageInputRef = useRef(null)

  useEffect(() => {
    messageInputRef.current.focus()
  }, [])

  return (
    <main className="chat-box">
      <div className="messages-wrapper">
        <Message />
      </div>
      <SendMessage messageInputRef={messageInputRef} />
    </main>
  )
}

export default ChatBox
