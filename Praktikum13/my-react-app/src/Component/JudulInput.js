import { useState } from 'react';
//import {Col, Container, Row} from 'react-bootstrap'


function PassengerInput (props) {
    const [data, setData] = useState ({
        title: ""})
        const [editing, setEditing] = useState(true)

    const onChange = e => {
        setData({...data,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const formIsNotEmpty = this.state.title
        if (formIsNotEmpty){
            const newData = { 
                title: this.state.title
            }
            this.props.tambahJudul(newData);
            this.setState({
                title: ""
            })
        } else {
            alert("Data masih ada yang kosong")
        }
    }

    let viewMode = {};
    let editMode = {};

    if (editing) {
        viewMode.display = 'none';
    } else {
        editMode.display = 'none';
    }


        return (
        <>
            <div class="" className='list-todo'>
                {/* <Container>
                    <Row>
                        <Col></Col>
                    </Row>
                </Container> */}
                <div class="container">
                <div class="row">
                    <div class="col">
                    Column
                    </div>
                    <div class="col">
                    Column
                    </div>
                </div>
                </div>
                <div className="left-side">
                    <input onChange={onChange} value={this.state.title} type="text" name="title" placeholder="Add todo..." />
                </div>
                <div className="right-side">
                    <button onClick={handleSubmit} style={{marginLeft: '20px'}}>Submit</button>
                </div>
            </div>
        </>    
        )
    }


export default PassengerInput