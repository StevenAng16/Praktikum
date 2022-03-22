
// import React from 'react';
 import ReactDOM from 'react-dom';


function Data (props) {
    return <p>{props.brand}</p>;
}

function List () {
    const users = [
        {
            id: 1,
            title: "Membuat Komponen",
            completed: false,
        },
        {
            id: 2,
            title: "Unit Testing",
            completed: true,
        },
        {
            id: 3,
            title: "Setup Development Enviroment",
            completed: false,
        },
        {
            id: 4,
            title: "Deploy ke server",
            completed: true,
        },
    ]
    return <p>{users.map((user) => <Data brand={user.brand}/>)}</p>
}

ReactDOM.render(<List />, document.getElementById('root'));
