import Link from 'next/link';
import React from 'react';

const Navebar = () => {
    return (
        <div>
            <ul className="flex justify-between m-10 items-center">
                {/* menu life */}
                <div>
                    <Link href="/">
                        <li>Home</li >
                    </Link>
                </div>

                {/* menu right */}
                <div className='flex gap-5'>
                    <Link href="/dashboard">
                        <li>Dashboard</li>
                    </Link>
                    <Link href="/login">
                        <li>Login</li>
                    </Link>
                    <Link href="/register">
                        <li>Register</li>
                    </Link>
                </div>
            </ul>

        </div>
    )
}

export default Navebar