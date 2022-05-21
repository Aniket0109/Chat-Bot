import "./message.css";

export default function message({own}){
    
    return(
        <div className={own?"message own":"message"}>
            <div className="messageTop">
                <img className="messageImg" src="https://images.unsplash.com/flagged/photo-1551854716-8b811be39e7e?ixlib=rb-1.2.1&raw_url=true&q=60&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aW5kaWFuJTIwZ2lybHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500" alt=""/>
                <p className="messageText">Hello This is a message</p>
            </div>
            <div className="messageBottom">1 hour ago</div>
        </div>
    )
}