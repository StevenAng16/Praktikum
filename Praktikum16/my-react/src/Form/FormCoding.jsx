import React, { useState, useRef } from 'react';
import styles from "./FormCoding.module.css"

export default function NameForm() {
  const baseData = {
    nama: "",
    email: "",
    noHandphone: "",
    pendidikan: "",
    kelas: "",
    harapan: ""
  }
  const baseError = {
    nama: "",
    email: "",
    noHandphone: "",
  }
  const suratKesungguhan = useRef('')
  const [data, setData] = useState(baseData);
  const [errorMassage, setErrorMassage] = useState(baseError);
  const regexNama = /^[A-Za-z ]*$/
  const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

  const handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    if (name === "nama") {
      if (!regexNama.test(value)) {
        setErrorMassage({...errorMassage, [name]: 'Nama Lengkap Harus Berupa Huruf'})
      } else {
        setErrorMassage({...errorMassage, [name]: ''})
      }
    }
    if (name === "email") {
      if (!regexEmail.test(value)) {
        setErrorMassage({...errorMassage, [name]: 'Email Tidak Sesuai'})
      } else {
        setErrorMassage({...errorMassage, [name]: ''})
      }
    }
    if (name === "noHandphone") {
      if (value.length < 9 || value.length > 14) {
        setErrorMassage({...errorMassage, [name]: 'No Handphone Tidak Sesuai'})
      } else {
        setErrorMassage({...errorMassage, [name]: ''})
      }
    }
    setData({...data, [name]: value});
  };

  const handleSubmit = e => {
    if (errorMassage.nama !== '' || errorMassage.email !== '' || errorMassage.noHandphone !== '') {
      console.log("HEREEE")
      alert(`Data Pendaftar Tidak Sesuai`)
    } else {
      console.log("HEREE1")
      alert(`Data Pendaftar "${data.nama}" Berhasil Diterima`)
      resetForm()
    }
    e.preventDefault();
  };

  const resetForm = () => {
    setData(baseData);
    suratKesungguhan.current.value = '';
    setErrorMassage(baseError);
  }

  return (
    <>
    {/* <!-- CSS only --> */}
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>
    {/* <!-- JavaScript Bundle with Popper --> */}
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"/>
    <h1 style={{"textAlign":"center"}}>Pendaftaran Peserta Coding Bootcamp</h1>
    <form onSubmit={handleSubmit} className={styles.centerForm}>
      <label>
        Nama Lengkap:
        <input
          required
          class="form-control"
          className={styles.input}
          type="text"
          name="nama"
          value={data.nama || ""}
          onChange={handleChange}
        />
      </label>
      <label>
        Email: <br/>
        <input
          required
          class="form-control"
          className={styles.input}
          type="email"
          name="email"
          value={data.email || ""}
          onChange={handleChange}
        />
      </label>
      <label>
        No Handphone: <br/>
        <input
          type="number"
          name="noHandphone"
          class="form-control"
          value={data.noHandphone || ""}
          onChange={handleChange}
        />
      </label>
      <label>
        Latar Belakang Pendidikan: <br/>
        <input
          required
          type="radio"
          name="pendidikan"
          value="IT"
          class="form-check-input"
          checked={data.pendidikan === 'IT'}
          onChange={handleChange}
        />IT
        <input
          type="radio"
          name="pendidikan"
          value="Non IT"
          class="form-check-input"
          checked={data.pendidikan === "Non IT" ? true : false}
          onChange={handleChange}
        />Non IT
      </label>
      <br/>
      <label>
        Kelas Coding yang Dipilih: <br/>
        <select
          required
          type="text"
          name="kelas"
          class="form-select"
          value={data.kelas || ""}
          onChange={handleChange}
        >
        <option disabled value="">Pilih Salah Satu Program</option>
        <option value="golang">Coding Backend with Golang</option>
        <option value="reactjs">Coding Frontend with ReactJS</option>
        <option value="fullstack">Fullstack Developer</option>
        </select>
      </label>
      <label>
        Foto Surat Kesungguhan:
        <input
          required
          type="file"
          name="suratKesungguhan"
          class="form-control"
          ref={suratKesungguhan}
          onChange={handleChange}
        />
      </label>
      <label>
        Harapan Untuk Coding Bootcamp Ini: <br/>
        <textarea
          type="text"
          name="harapan"
          class="form-control"
          value={data.harapan || ""}
          onChange={handleChange}
        />
      </label>
      
      <ul>
        {Object.keys(errorMassage).map(key => {
          if (errorMassage[key] !== "") {
            return <li className={styles.errorMassage} key={key}>{errorMassage[key]}</li>
          }
          return null
        })}
      </ul>
      <br/>
      <br/>
      <input type="submit" class="btn btn-success"  value="Submit" />
      <button type="reset" class="btn btn-danger" onClick={resetForm}>Reset</button>
    </form>
    </>
  );
};