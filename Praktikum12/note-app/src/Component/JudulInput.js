import { Component } from 'react';

class JudulInput extends Component{
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
            this.props.tambahJudul(newData);
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
            {/* <!-- CSS only --> */}
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>
            {/* <!-- JavaScript Bundle with Popper --> */}
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"/>
            <div class="App">
            <div onSubmit={this.handleSubmit} style={viewMode}> 
                    <h3 className='list'>Masukkan Judul Anda</h3>
                <input 
                    type="text" 
                    placeholder="Input Title"  
                    value={this.state.title} 
                    name="title" 
                    onChange={this.onChange}
                />
                <button type="button" class="btn btn-success" onClick={this.handleSubmit} style={{marginLeft: "10px"}}>Submit</button>
                <button type="button" class="btn btn-secondary" onClick={this.handleTutupInput} style={{marginLeft: "10px"}}>Selesai</button>
            </div>
            <button type="button" class="btn btn-info" onClick={this.handleBukaInput} style={editMode}>Masukan nama Penumpang</button>
        </div>
        </>    
        )
    }
}

export default JudulInput
