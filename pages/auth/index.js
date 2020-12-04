import { useEffect, useState } from "react"
import Sha1 from 'crypto-js/sha1'
import Base64 from 'crypto-js/enc-base64'
import Utf8 from 'crypto-js/enc-utf8'
import {useRouter, UseRouter} from 'next/router'

const Auth = () => {

    const [form, setForm] = useState({
        email: "",
        password: ""
    });

    useEffect(() => {
        if (sessionStorage.getItem('login')) {
            router.push('/siswa');
        }
    })

    const handlePassword = (e) => {
        let pass = Sha1(Sha1(e).toString()).toString();
        setForm({...form, password: pass})
    }

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            
            const sendForm = await fetch('http://ajaruji-auth-alpha.demo.klik.digital/login', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
                body: JSON.stringify(form)
            })
    
            const response = await sendForm;
            const data = await response.json();
            // console.log(data);
            if (data.code === 200) {
                let first = data.data.split(".");
                let role = Base64.parse(first[1]);
                role = Utf8.stringify(role);
                role = JSON.parse(role);

                sessionStorage.setItem("token", data.data);
                sessionStorage.setItem("login", true);
                // console.log(role);

                router.push('/siswa')

            }
        
        } catch (error) {
            console.error(error);
        }

    }

    // console.log(form);

    return(
        <div className="container mx-auto">
            <h1 className="my-6">Auth Page</h1>
            <form method="post">
                <div className="input-group">
                    <label className="block" htmlFor="email">Email</label>
                    <input className="px-6 py-2 focus:outline-none border-gray-500 bg-gray-200 rounded-sm" type="email" name="email" id="email" onChange={(e) => setForm({...form, email: e.target.value})} />
                </div>
                <div className="input-group">
                    <label className="block" htmlFor="password">Password</label>
                    <input className="px-6 py-2 focus:outline-none bg-gray-200 border-gray-500 rounded-sm" type="password" name="password" id="password" onChange={(e) => handlePassword(e.target.value)} />
                </div>
                <button type="submit" className="bg-blue-600 px-8 py-3 rounded-sm mt-4 focus:outline-none text-white" onClick={handleSubmit}>Masuk</button>
            </form>
        </div>
    )
}

export default Auth