import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { createSocketConnection } from '../utils/socket';
import axios from 'axios';
import { BASE_URL } from '../utils/constants';


const Chat = () => {
    const { targetUserId } = useParams();
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    const user = useSelector((store) => store.user);
    const userId = user?.data?._id;

    const fetchChatMessages = async () => {
      const chat =  await axios.get(BASE_URL + "/chat/"+targetUserId, 
        {withCredentials: true});

        console.log(chat.data.messages);

        const chatMessages = chat?.data?.messages.map(msg => {
          const {senderId, text} = msg;
          return { 
            firstName: senderId?.firstName, 
            lastName:senderId?.lastName, 
            text: text,
            photoId: senderId?.photoUrl,
            time: new Date(msg.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          }
        });

        setMessages(chatMessages);
      
    };

    useEffect(() => {
      fetchChatMessages();
    }, []);



    useEffect(() => {
      if(!userId) return;
      const socket = createSocketConnection();
      //As soon as the page loaded, the socket connection is made and joinChat event is emitted
      socket.emit("joinChat", {firstName: user?.data?.firstName, userId, targetUserId})

      socket.on("messageRecieved", ({firstName, lastName, text, photoId, time}) => {
          setMessages((messages) => [...messages, {firstName,lastName, text, photoId, time}]);
      });


      return () => {
        socket.disconnect();
      };

    }, [userId, targetUserId]);

    const sendMessage = () => {
      const socket = createSocketConnection();
      socket.emit("sendMessage", {
        firstName: user?.data?.firstName,
        lastName: user?.data?.lastName,
        photoId: user?.data?.photoUrl,
        userId, targetUserId, 
        text: newMessage,
        });
        setNewMessage("");
    }
  
    return (
    <div className='w-3/4 mx-auto border border-gray-600 rounded-lg mt-10 h-[70vh] flex flex-col'>
      <h1 className='p-5 border-b border-gray-600'>Chat</h1>
      <div className='flex-1 overflow-scroll p-5'>
        {messages.map((msg, index) => {
          const isSender = msg.firstName === user?.data?.firstName;

          return (
          <div>
              <div key={index} className={`chat ${isSender ? "chat-end" : "chat-start"} mb-2`}>
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              src={msg.photoId}
            />
          </div>
        </div>
        <div className="chat-header">
          {`${msg.firstName}  ${msg.lastName}`}
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
