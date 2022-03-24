import { Component } from 'react';

class PassengerInput extends Component{
    state = {
        title: "",
        editing: true
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const formIsNotEmpty = this.state.title
        if (formIsNotEmpty){
            const newData = {
                title: this.state.title,
            }
            this.props.tambahTitle(newData);
            this.setState({
                title: "",
            })
        } else {
            alert("Data masih ada yang kosong")
        }
    }

    handleBukaInput = () => {
        this.setState({
            editing: false
        })
    }

    handleTutupInput = () => {
        this.setState({
            editing: true
        })
    }

    render(){
        const viewMode = {};
        const editMode = {};

        if (this.state.editing){
            viewMode.display = 'none';
        } else {
            editMode.display = 'none';
        }

        return (
            <>
            <div class="App">
            <div onSubmit={()=>{}} style={viewMode}> 
                    <p>Masukkan Nama Anda</p>
                <input 
                    type="text"  
                    value={this.state.title} 
                    name="title" 
                    onChange={this.onChange}
                />
                <button onClick={this.handleSubmit} style={{marginLeft: "10px"}}>Submit</button>
                <button onClick={this.handleTutupInput} style={{marginLeft: "10px"}}>Selesai</button>
            </div>
            <button onClick={this.handleBukaInput} style={editMode}>Masukan nama Penumpang</button>
        </div>
        </>    
        )
    }
}

export default PassengerInput