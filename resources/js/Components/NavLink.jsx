import React from 'react';
import { Link } from '@inertiajs/inertia-react';

export default function NavLink({ href, active, children }) {
    return (
        <Link
            href={href}
            className={
                active
                    ? 'inline-flex items-center px-1 pt-1 border-b-2 border-indigo-400 text-2xl font-black leading-5 text-white no-underline focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out hover:text-red-500'
                    : 'inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-2xl font-black leading-5 text-white no-underline hover:text-red-500 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out'
            }
        >
            {children}
        </Link>
    );
}
