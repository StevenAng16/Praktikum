import { Component } from 'react';

import ListChat from './ListChat'
import ChatInput from './ChatInput'
import Header from './Header'

class Home extends Component {
    constructor(props) {
         super(props)
         this.state = {
             data : [
                 {
                     id: 1,
                     title: "Mengerjakan Exercise",
                     completed: true
                 },
                 {
                     id: 2,
                     title: "Mengerjakan Assignment",
                     completed: false
                 },
             ]
         }
     }

    hapusChat = (id) => {
         this.setState ({
             data : [
                 ...this.state.data.filter(item =>  {
                     return item.id !== id;
                 })
             ]
         });
     }

    tambahChat = newUser => {
         const newData = {id : '', ...newUser};

         this.setState({data: [...this.state.data, newData]})
     }

    render () {
        return(
            <div>
                <Header />
                <ChatInput 
                    tambahTitle={this.tambahTitle}
                />
                <ListChat 
                    data = {this.state.data} 
                    hapusTitle ={this.hapusTitle}  
                />
            </div>
        )
    }
}

export default Home