import { BsSearch } from "react-icons/bs";;
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className='bg-slate-100 shadow-md '>
            <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
                <Link to='/'>
                    <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
                        <span className='text-slate-500 hover:text-lime-600'>Real</span>
                        <span className='text-slate-700'>Estate</span>
                    </h1>
                </Link>
                <form className='p-2 border-2 rounded-xl flex items-center'>
                    <input type='text' placeholder='Search...' className='bg-transparent focus:outline-none w-24 sm:w-64 text-slate-500' />
                    <BsSearch className="text-slate-400 cursor-pointer" />
                </form>
                <ul className="flex gap-4">
                    <Link to='/'>
                        <li className="hidden sm:inline text-slate-500 hover:text-lime-600">Home</li>
                    </Link>
                    <Link to='/about'>
                        <li className="hidden sm:inline text-slate-500 hover:text-lime-600">About</li>
                    </Link>
                    <Link to='/sign-in'>
                        <li className="text-slate-500 hover:text-lime-600">{' '} Sign in</li>
                    </Link>
                </ul>
            </div>
        </header>
    )
}
