import {BrowserRouter , Routes, Route, Link}  from 'react-router-dom';
function ChatUp() {

    return (
    <div class="header">
        <button type="button" class="btn btn-outline-danger Logout">
            <Link to="/" class="btn leave" >Log Out</Link></button>
        <div >Chat Room</div>
    </div>
    )
}
export default ChatUp;
