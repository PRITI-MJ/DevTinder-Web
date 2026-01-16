import React, { use, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { createSocketConnection } from '../utils/socket';

const Chat = () => {
    const { targetUserId } = useParams();
    const [messages, setMessages] = useState([{text: "hello"}]);
    const [newMessage, setNewMessage] = useState("");
    const user = useSelector((store) => store.user);
    const userId = user?.data?._id;

    useEffect(() => {
      if(!userId) return;
      const socket = createSocketConnection();
      //As soon as the page loaded, the socket connection is made and joinChat event is emitted
      socket.emit("joinChat", {firstName: user?.data?.firstName, userId, targetUserId})

      socket.on("messageRecieved", ({firstName, text}) => {
          console.log(firstName + ": " + text)
      });


      return () => {
        socket.disconnect();
      };

    }, [userId, targetUserId]);

    const sendMessage = () => {
      const socket = createSocketConnection();
      socket.emit("sendMessage", {
        firstName: user?.data?.firstName,
        userId, targetUserId, 
        text: newMessage});
    }
  
    return (
    <div className='w-3/4 mx-auto border border-gray-600 rounded-lg mt-10 h-[70vh] flex flex-col'>
      <h1 className='p-5 border-b border-gray-600'>Chat</h1>
      <div className='flex-1 overflow-scroll p-5'>
        {messages.map((msg, index) => {
          return (
          <div>
              <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              src="https://img.daisyui.com/images/profile/demo/kenobee@192.webp"
            />
          </div>
        </div>
        <div className="chat-header">
          Obi-Wan Kenobi
          <time className="text-xs opacity-50">12:45</time>
        </div>
        <div className="chat-bubble">You were the Chosen One!</div>
        <div className="chat-footer opacity-50">Delivered</div>
      </div>
      <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              src="https://img.daisyui.com/images/profile/demo/anakeen@192.webp"
            />
          </div>
        </div>
        <div className="chat-header">
          Anakin
          <time className="text-xs opacity-50">12:46</time>
        </div>
        <div className="chat-bubble">I hate you!</div>
        <div className="chat-footer opacity-50">Seen at 12:46</div>
</div>
          </div>
          )
        })}
      </div>
      <div className='p-5 border-b border-gray-600 flex items-center gap-2'>
        <input value={newMessage}
         onChange={(e) => setNewMessage(e.target.value)} 
         className='flex-1 border border-gray-500 text-white bg-gray-900 rounded p-2'></input>

        <button onClick={sendMessage} className='bg-secondary text-white px-4 py-2 rounded'>Send</button>
      </div>
    </div>
  )
}

export default Chat
