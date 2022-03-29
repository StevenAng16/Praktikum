import {useRef,useState} from 'react'
import  styles from './Form.css'

export default function Form (){

    const baseData = {
        nama: "",
        email: "",
        noHandphone: "",
        pendidikan: "",
        kelas: "",
        harapan: ""

    }

    const suratKesungguhan = useRef('')
    const [data, setData] = useState(baseData);
    const [errorMassage, setErrorMassage] = useState("");
    const [errorEmail, setErrorEmail] = useState("");
    const [errornoHandphone, setErrornoHandphone] = useState("")
    const regex = /^[A-Za-z ]*$/
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    const handleInput = e => {
        const name = e.target.name;
        const value = e.target.value;

        if (name === "nama") {
            if(regex.test(value)){
                setErrorMassage("")
            }else {
                setErrorMassage("Nama Lengkap Harus Berupa Huruf")
            }
        } else if (name === "email") {
            if (regexEmail.test(value)) {
                setErrorEmail("")
            } else {
                setErrorEmail("Email tidak sesuai")
            }
        } else if (name === "noHandphone") {
            if (value.length >= 9 && value.length <= 14) {
                setErrornoHandphone("")
            } else if (value.length < 9) {
                setErrornoHandphone("No Handphone harus lebih besar")
            } else if (value.length > 14) {
                setErrornoHandphone("No Handphone harus lebih kecil")
            }
        }
        
        setData({
            ...data,
            [name]: value
        })

    }

    const handleSubmit = (event) => {
        if (errorMassage !== "") {
            alert("Terdapat data yang tidak sesuai")
        } else {
            alert(`Data Nama "${data.nama}" sudah mendaftar di Coding Bootcamp ini`)
        }
        resetData()
        event.preventDefault()
        
    }

    const resetData = () => {
        setData(baseData);
        setErrorMassage("")
    }

    return(
        <>
        <div className='form'>
            <h1 style={{"text-align":"center"}}>Pendaftaran Peserta Coding Bootcamp</h1>
            <br/><br/>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label for="exampleFormNama" className='form-label'>Nama Lengkap :</label><br/>
                        <input
                            type="text"
                            name="nama"
                            required
                            onChange={handleInput}
                            value={data.nama || ""}
                            className={styles.input}
                            class="form-control"
                            size={50}
                        /><br/><br/>
                    </div>
                    
                    <label>Email :</label><br/>
                    <input
                        type="email"
                        name="email"
                        required
                        placeholder="name@example.com"
                        onChange={handleInput}
                        value={data.email || ""}
                        className={styles.input}
                        size={50}
                    /><br/><br/>
                    <label>No Handphone :</label><br/>
                    <input
                        type="number"
                        name="noHandphone"
                        required
                        placeholder='12345678910112'
                        onChange={handleInput}
                        value={data.noHandphone || ""}
                        className={styles.input}
                        size={50}
                    /><br/><br/>
                    <label>Latar Belakang Pendidikan :</label><br/>
                    <div>
                        <input required type="radio" id="" name="fav_language" value="IT"/>
                        <label>IT</label><br/>
                        <input required type="radio" id="" name="fav_language" value="NonIT"/>
                        <label>NonIT</label>
                    </div><br/><br/>
                    <label>Foto Surat Kesungguhan :</label><br/>
                    <input
                        type="file"
                        refs={suratKesungguhan}
                        size={50}
                    /><br/><br/>
                    <label>Harapan untuk Coding Bootcamp ini :</label><br/>
                    <textarea
                        rows="10" cols="30"
                        placeholder='Tulis pesan yang disampaikan'
                        size={50}
                    /><br/><br/>
                    <span className={styles.errorMassage}>{errorMassage}</span><br/>
                    <span className={styles.errorEmail}>{errorEmail}</span><br/>
                    <span className={styles.errornoHandphone}>{errornoHandphone}</span><br/><br/>
                    <input type="submit" value="Submit" />
                    <button type="reset" onClick={resetData}>Reset</button>
                </form>
        </div>
        </>
    )
}
