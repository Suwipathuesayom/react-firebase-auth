import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import firebaseConfig from '../config'

const SignUp = () => {
    const [currentUser, setCurrentUser] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = e.target.elements;

        try {

            firebaseConfig.auth().createUserWithEmailAndPassword(email.value, password.value);
            setCurrentUser(true);

        } catch(error) {
            alert(error);
        }
    }

    if (currentUser) {
        return <Redirect to="/dashboard" />
    }

    return (
        <>
            <div className="container mt-5">
            <h1>ลงทะเบียน</h1>
            <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">กรุณากรอกอีเมลล์</label>
                <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <div id="emailHelp" className="form-text">เราจะไม่เปิดเผยอีเมลของคุณกับคนอื่น.</div>
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">รหัสผ่าน</label>
                <input type="password" name="password" className="form-control" id="exampleInputPassword1" />
            </div>
            <button type="submit" className="btn btn-primary">ลงทะเบียน</button>
            </form>
            </div>
        </>
    )
}

export default SignUp;
