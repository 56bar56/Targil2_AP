import {BrowserRouter , Routes, Route, Link}  from 'react-router-dom';
function ChatUp(props) {
    console.log(props.inMyChat);
    console.log(props.myImage);
    return (
    <div class="header">
        <button type="button" class="btn btn-outline-danger Logout">
            <Link to="/" class="btn leave" >Log Out</Link></button>
        <div >Chat Room</div>
    </div>
    )
}
export default ChatUp;
