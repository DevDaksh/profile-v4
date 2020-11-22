import React from 'react'

export default function Header() {

    return (
        <div className="Head text-gray-400 text-2xl ">
            Daksh Kulshrestha
            <hr />
            <div className='flex w-2/6 text-base justify-between links'>
                <a href="https://instagram.com/daksh.xd" className='hover:text-gray-600 transition duration-500 ease-in-out'>instagram</a>
                <a href="https://github.com/devdaksh" className='hover:text-gray-600 transition duration-500 ease-in-out'>github</a>
                <a href="https://twitter.com/dawksh" className="hover:text-gray-600 transition duration-500 ease-in-out">twitter</a>
                <a href="https://www.linkedin.com/in/daksh-kulshrestha-3807501aa/" className='hover:text-gray-600 transition duration-500 ease-in-out'>linkedin</a>
            </div>

        </div>
    )
}
