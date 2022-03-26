import { useState } from "react"
import {Col, Container, Row} from 'react-bootstrap'
import './ListItem.css'

function ListItem({item, hapusJudul}){
    const [check, setChecked] = useState([]);
    const handleCheck = (event) => {
        let updateList = [...check];
        if (event.target.checked){
            updateList = [...check, event.target.value];
        } else {
            updateList.splice(check.indexOf(event.target.value),1);
        }
        setChecked(updateList);
    };

    const isChecked = (item) =>
        check.includes(item) ? "checked-item" : "not-checked-item";
        
        return (
            <div className="list-item">
                <div className='list-todo'>
                    {/* <div class="container">
                    <div class="row">
                        <div class="col" className="left-side">
                            <input onClick={handleCheck} value={item.title} type="checkbox" id="vehicle1" />
                            <label className={isChecked(item.title)} for="vehicle1">{item.title}</label>
                        </div>
                        <div class="col" className="right-side">
                        <button type="button" class="btn btn-secondary btn-sm" onClick={() => {hapusJudul(item.id)}}>Delete</button>
                        </div>
                    </div>
                    </div> */}
                    <Container>
                        <Row>
                            <Col className="left-side"> 
                                    <input onClick={handleCheck} value={item.title} type="checkbox" id="vehicle1" />
                                    <label className={isChecked(item.title)} for="vehicle1">{item.title}</label>
                            </Col>
                            <Col className="right-side">
                                <button type="button" class="btn btn-secondary btn-sm" onClick={() => {hapusJudul(item.id)}}>Delete</button>
                            </Col>        
                        </Row>
                    </Container> 
                </div>
            </div>
        
    )

}

    


export default ListItem
