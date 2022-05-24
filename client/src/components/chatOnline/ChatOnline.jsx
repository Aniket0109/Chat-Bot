import "./chatOnline.css";

export default function ChatOnline(){
    
    return(
        <div className="chatOnline">
            <div className="chatOnlineFriend">
                <div className="chatOnlineImgcontainer">
                    <img src="https://images.unsplash.com/photo-1610224284309-0ffcfdf78bc1?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387" alt="" className="chatOnlineImg" />
                    <div className="chatOnlineBadge"></div>
                </div>
                <span className="chatOnlineName">Gaytree</span>
            </div>
        </div>
    )
}