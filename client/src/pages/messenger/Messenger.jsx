import "./messenger.css";
import Conversation from "../../components/conversations/Conversation";
import Topbar from "../../components/topbar/Topbar";
import ChatOnline from "../../components/chatOnline/ChatOnline";
import Message  from "../../components/message/Message";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

export default function Messenger(){
    
    const [conversations, setConversations] = useState([]);
    const [currentChat, setCurrentChat] = useState(null);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    const {user} = useContext(AuthContext);
    console.log("User",user);

    useEffect(()=>{
        const getConversations = async ()=>{

            try{
                const res = await axios.get("/conversations/"+user._id);
                setConversations(res.data);
            } catch(err){
                console.log(err);
            }
        }
        getConversations();
    },[user._id]);

    useEffect(()=>{
        const getMessages = async ()=>{
            try{
                const res = await axios.get("/messages/" + currentChat?._id);
                setMessages(res.data);
            } catch(err){
                console.log('err :>> ', err);
            }
        }
        getMessages()
    },[currentChat]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const message =  {
            
        }
    }

    return(
        <>
        <Topbar/>
        <div className="messenger">
            <div className="chatMenu">
                <div className="chatMenuWrapper">
                    <input placeholder="Search for Friends" className="chatMenuInput"/>
                    {conversations.map(c=>(
                        <div onClick={()=>setCurrentChat(c)}>
                            <Conversation conversation = {c} currentUser = {user}/>
                        </div>
                    ))}
                </div>
            </div>
            <div className="chatBox">
                <div className="chatBoxWrapper">
                    {
                        currentChat ? 
                    <>
                    <div className="chatBoxTop">
                        {messages.map((m)=>(
                            <Message message={m} own = {m.sender === user._id} />
                        ))}
                        
                    </div>
                    <div className="chatBoxBottom">
                        <textarea 
                        placeholder="Write something here" 
                        className="chatMessageInput" cols="30" rows="10"
                        onChange={(e) => setNewMessage(e.target.value)}
                        value = {newMessage}
                        ></textarea>
                        <button className="chatSubmitButton" onClick={handleSubmit}>
                            Send
                        </button>
                    </div></>: <span className="noConversationText">Open a Conversation to start a chat</span>}
                </div>
            </div>
            <div className="chatOnline">
                <div className="chatOnlineWrapper">
                    <ChatOnline/>
                    <ChatOnline/>
                    <ChatOnline/>
                </div>
            </div>
        </div>
        </>
    )
}