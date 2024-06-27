import React from 'react'
import { Link } from 'react-router-dom'
import hamburger_icon from '../assets/hamburger.png'
import heart_icon from '../assets/heart.png'
import search_icon from '../assets/search.png'
import shopping_bag_icon from '../assets/shopping-bag.png'
import user_icon from '../assets/user.png'
import candy_logo from '../assets/candy_logo.png'

export default function Header() {
    return (
        <div className="bg-white p-4 sticky top-0 z-50 shadow-md">
            <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row">
                    <div className="flex flex-col menu-item justify-center items-center">
                        <img src={hamburger_icon} alt="hamburger icon" className="w-5 h-5" />
                        <label className="text-center">Menu</label>
                    </div>
                    <img src={candy_logo} alt="candy logo" className="h-12 w-auto pl-4" />
                </div>
                <div className="flex flex-row space-x-4">
                    <Link to="/search">
                        <img src={search_icon} alt="search icon" className="w-6 h-6" />
                    </Link>
                    <Link to="/favorites">
                        <img src={heart_icon} alt="heart icon" className="w-6 h-6" />
                    </Link>
                    <Link to="/profile">
                        <img src={user_icon} alt="user icon" className="w-6 h-6" />
                    </Link>
                    <Link to="/cart">
                        <img src={shopping_bag_icon} alt="shopping bag icon" className="w-6 h-6" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

