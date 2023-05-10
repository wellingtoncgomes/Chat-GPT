import React from "react";
import './ChatMessage.css';
import Avatar from "../../assets/avatar";

// user (user| chatgpt)
// message - onde cai estar o prompt

/*{
    user: 'gpt'
    message: 'crie um nome de arquivo'
}*/
export const ChatMessage = ({message})=> {
   return( <div className= {
        `chat-message ${message.user === 'gpt'} && 
        "chatgpt"`}
        >
        <div className="Chat-message-center">
            <div className={
                `avatar 
                ${message.user === 'gpt' && "chatgpt"} `}
            >
                {message.user === 'gpt' && (
                    <Avatar/>
                )}
            </div>

            <div className="message">
                   {message.message}
            </div>

        </div>

    </div>

   )
}
