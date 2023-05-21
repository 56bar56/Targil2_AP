# Advanced Programing 2

Advanced programming 2 course assignments by Ariel Oscar and Ofek Binder and Bar Ben Tovim.

## Ex.1.B

### Description

Implementing a chat web, using react,js,html,css. we build an chat web, with an login\register system, and chat system. in the loginm we did that only connected users can login to the chats, if you havn't register to our app yet you can press the button on the login page and it gets you into the register page. now in the register page you have to register with username,password, email, picture, and profile name. while registering to our app you cannot leave some of the fields empty and have to fill them all, if there is some other user with the same username or password you'll need to change your password or username the system will tell you whats you need to change. after you connected to our app you can start chat, first of all you will need to add contact to your contact list and it have to be someone registered to the app. you can send anything to the person you chat with. when you change the contact the chat side of the screen will also be change to the other contact user chat. our app also saving the chats after exiting them. the app use pictures and show u who connected.
 
componants :
  ChatPage - this component just existed to complete all the chat page.
  ChatSection - the part of the chat in the chat page of the project.
  ChatUp - the top part of the chat screen with the name,picture of the user with the exit button
  ContactList - the part of the contact list in the chat page.
  LoginScreen - the log in page.
  RegisterScreen - the register page.
 
### Executing the program

```
npm start
```

### Dependencies

import React, { useState, useRef, useEffect } from 'react';
import {BrowserRouter , Routes, Route, Link}  from 'react-router-dom';
and just using react and router and so on.

### checking our app :
if you want to check our code, we provide 3 registered contacts we already have in our app. the three contacts are :
username - ofek, password - 12.
username - bar, password - 123.
username - ariel, password - 1234.
if you also want to check the part of the chat page you can add contact and use this usernames to open a chat with them.