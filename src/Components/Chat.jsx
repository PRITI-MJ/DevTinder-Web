import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { createSocketConnection } from '../utils/socket';

const Chat = () => {
    const { targetUserId } = useParams();
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    const user = useSelector((store) => store.user);
    const userId = user?.data?._id;

     const now = new Date(); // current time
    const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }); // e.g., "16:24"


    useEffect(() => {
      if(!userId) return;
      const socket = createSocketConnection();
      //As soon as the page loaded, the socket connection is made and joinChat event is emitted
      socket.emit("joinChat", {firstName: user?.data?.firstName, userId, targetUserId})

      socket.on("messageRecieved", ({firstName, text, photoId, time}) => {
          console.log(firstName + ": " + text);
          setMessages((messages) => [...messages, {firstName, text, photoId, time}]);
      });


      return () => {
        socket.disconnect();
      };

    }, [userId, targetUserId]);

    const sendMessage = () => {
      const socket = createSocketConnection();
      socket.emit("sendMessage", {
        firstName: user?.data?.firstName,
        photoId: user?.data?.photoUrl,
        userId, targetUserId, 
        text: newMessage,
        time});
        setNewMessage("");
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
              src={msg.photoId}
            />
          </div>
        </div>
        <div className="chat-header">
          {msg.firstName}
          <time className="text-xs opacity-50">{msg.time}</time>
        </div>
        <div className="chat-bubble">{msg.text}</div>
        <div className="chat-footer opacity-50">Delivered</div>
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
