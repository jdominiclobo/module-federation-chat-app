import React from "react";
import ReactDOM from "react-dom";

import { Container } from "shards-react";

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"

import "./index.css";
import Chat from 'chat/Chat'


const App = () => (
    <Container>
        <p>Ad esse id velit velit exercitation non quis ad officia dolor nostrud. Laboris officia Lorem occaecat officia esse consequat nisi. Minim commodo et non ullamco labore laborum velit qui. Sit pariatur qui veniam irure mollit elit fugiat minim culpa pariatur eu incididunt sit magna. Do adipisicing laboris minim do duis aliqua culpa sint eiusmod. Elit laborum proident non qui eiusmod id non eu.</p>
        <h1>Chat</h1>
        <Chat />
        <p>Est duis do sint ad. Lorem exercitation cillum ullamco officia deserunt ea esse veniam duis aliquip Lorem irure nostrud. Pariatur consectetur esse elit consectetur elit. Nisi fugiat eiusmod mollit ut consectetur elit sit officia enim velit tempor. Esse nulla sint excepteur cillum aliqua voluptate elit culpa aute ipsum Lorem. Ullamco ad eu fugiat eiusmod. Nulla magna cillum qui qui non culpa consequat qui magna reprehenderit.</p>
    </Container>
)

ReactDOM.render(<App />, document.getElementById("app"));
