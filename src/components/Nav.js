import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <div className="bg-red-500 text-sm font-semibold pt-5 pb-5">
            <p className="text-center pb-3"> İNDİRİM %50'YE VARAN</p>
            <div className="flex justify-center flex-row text-white text-center text-xs md:text-sm lg:lg space-x-4">
                <Link to="#" className="hover:underline">KADIN</Link>
                <Link to="#" className="hover:underline">ERKEK</Link>
                <Link to="#" className="hover:underline">GENÇ KIZ</Link>
                <Link to="#" className="hover:underline">GENÇ ERKEK</Link>
                <Link to="#" className="hover:underline">KIZ ÇOCUK</Link>
                <Link to="#" className="hover:underline">ERKEK ÇOCUK</Link>
            </div>
        </div>
    )
}
