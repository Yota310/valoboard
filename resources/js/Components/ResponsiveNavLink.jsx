import React from 'react';
import { Link } from '@inertiajs/inertia-react';

export default function ResponsiveNavLink({ method = 'get', as = 'a', href, active = false, children }) {
    return (
        <Link
            method={method}
            as={as}
            href={href}
            className={`w-full flex items-start pl-3 pr-4 py-2 border-l-4 ${
                active
                    ? 'border-black text-gray bg-white focus:outline-none focus:text-red-500 focus:bg-white focus:border-red-500'
                    : 'border-transparent text-gray-600 bg-white hover:text-red-500 hover:bg-red-500 hover:border-gray-300'
            } text-base font-medium focus:outline-none transition duration-150 ease-in-out`}
        >
            {children}
        </Link>
    );
}
