import { useState } from "react";
import {v4 as uuidv4} from "uuid"

import ListJudul from './ListJudul'
//import JudulInput from './JudulInput'
import Header from './Header'

const initialValue = [
     {
         id: uuidv4(),
         title: "Mengerjakan Exercise",
         completed: true
     },
     {
         id: uuidv4(),
         title: "Mengerjakan Assignment",
         completed: false
     },
 ]

function Home (){
     const [data, setData] = useState(initialValue)

    const hapusJudul = id => {
        setData((oldData) => oldData.filter(item => {
            return item.id !== id;
        }))
       
    }

    // const tambahJudul = newUser => {
    //      const newData = {
    //          id : uuidv4(),
    //           ...newUser
    //      };
    //      setData((oldData) => [...oldData, newData]);
    // };

        return(
        <div class='home'>
            <body>
            <div>
            <Header />
            {/* <JudulInput 
                tambahJudul={tambahJudul}
            />  */}
            <ListJudul 
                data = {data} 
                hapusJudul ={hapusJudul}  
            />
            </div>
            </body>
            <footer></footer>
        </div>    
        )
    }


export default Home