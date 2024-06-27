import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Main() {

    const [email, setEmail] = useState('')
    const [errors, setErrors] = useState([])

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
        const input_ = e.target.value

        const emailRegEx = new RegExp('^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$')
        let _errors = []
        if (input_ === '') {
            _errors.push('Email alanı boş bırakılamaz.')
        } else if (!emailRegEx.test(input_)) {
            _errors.push('Geçerli bir email adresi giriniz.')
        }
        setErrors(_errors)
    }

    const handleSubscribe = () => {
        if (errors.length > 0) {
            return
        }

        console.log(email)
    }

    return (
        <div className="text-sm flex flex-col justify-center align-center items-center mb-10 mr-5 ml-5">
            <p className=" text-center pt-10 pb-10">Özel promosyonlar, kişiye özel indirimler ve son yenilikler ile ilgili bilgi alın:</p>
            <label htmlFor="email_input" className="w-96 mb-3">Email:</label>
            <input onChange={(e) => handleEmailChange(e)} id="email_input" type="email" className="w-96 border-2 border-gray-300 p-4" placeholder="E-posta adresiniz" />
            {errors.length > 0 && errors.map((error, index) => (<div key={index} className="w-96 text-red-500">{error}</div>))}
            <button onClick={() => handleSubscribe()} className="w-96 bg-black text-white p-3 mt-4">Abone Ol</button>
            <p className="text-sm text-center mt-4">Abone olarak, {<Link className="text-blue-500 hover:underline">Gizlilik Politikasını</Link>} okuduğunuzu onaylamış oluyorsunuz.</p>
        </div>
    )
}
