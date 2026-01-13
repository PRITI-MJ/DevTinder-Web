import React from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

const Chat = () => {
    const { targetUserId } = useParams();
    const [messages, setMessages] = useState([{text: "hello"}]);
    console.log(targetUserId);
  return (
    <div className='w-1/2 mx-auto border border-gray-600 rounded-lg mt-10 h-[70vh] flex flex-col'>
      <h1 className='p-5 border-b border-gray-600'>Chat</h1>
      <div className='flex-1 overflow-scroll p-5'>
        {messages.map((msg, index) => {
          return (
          <div>
           <div key={index} className="chat chat-start">
              <div className="chat-header">
                Priti
                <time className="text-xs opacity-50">2 hours ago</time>
              </div>
              <div className="chat-bubble">You were the Chosen One!</div>
              <div className="chat-footer opacity-50">Seen</div>
            </div>
            <div className="chat chat-start">
              <div className="chat-header">
              Hrithik
              <time className="text-xs opacity-50">2 hour ago</time>
            </div>
            <div className="chat-bubble">I loved you.</div>
            <div className="chat-footer opacity-50">Delivered</div>
          </div>
          </div>
          )
        })}
      </div>
      <div className='p-5 border-b border-gray-600 flex items-center gap-2'>
        <input className='flex-1 border border-gray-500 text-white bg-gray-900 rounded p-2'></input>
        <button className='bg-secondary text-white px-4 py-2 rounded'>Send</button>
      </div>
    </div>
  )
}

export default Chat
