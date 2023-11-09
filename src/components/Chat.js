import Cam from "../img/cam.png";
import Add from "../img/add.png";
import More from "../img/more.png";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";
import { useContext } from "react";

const Chat = () => {
    const {data} = useContext(ChatContext)

    return(
        <div className="chat">
            <div className="chatinfo">
                <span>{data.user?.displayName}</span>
                <div className="chaticons">
                    <img src={Cam} alt="No Image"/>
                    <img src={Add} alt="No Image"/>
                    <img src={More} alt="No Image"/>
                </div>          
            </div>
            <Messages/>
            <Input/>
        </div>
    )
}
export default Chat;