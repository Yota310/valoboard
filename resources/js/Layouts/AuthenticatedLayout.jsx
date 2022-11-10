import React, { useState } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link } from '@inertiajs/inertia-react';

export default function Authenticated({ auth, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    return (
        <div className="min-h-screen bg-gray-100">
            <nav className="bg-black border-b border-gray-100 p-5">
                <div className=" text-8xl text-center text-red-500 italic rounded-full bg-white font-title">VALO BOARD</div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-black pt-2">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                            <div className="shrink-0 flex items-center">
                                <Link href="/">
                                    <ApplicationLogo className="block h-9 w-auto text-gray-500" />
                                </Link>
                            </div>

                            <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                                <NavLink href="/" active={route().current('dashboard')}>
                                    トップ
                                </NavLink>
                            </div>
                            <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                                <NavLink href={`/mypage/${auth.user.id}`} active={route().current('dashboard')}>
                                    マイページ
                                </NavLink>
                            </div>

                            <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                                <NavLink href="/login" active={route().current('dashboard')}>
                                    ログイン
                                </NavLink>
                            </div>

                            <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                                <NavLink href="/register" active={route().current('dashboard')}>
                                    新規登録
                                </NavLink>
                            </div>

                            <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                                <NavLink href="/search" active={route().current('dashboard')}>
                                    検索
                                </NavLink>
                            </div>


                        </div>

                        <div className="hidden sm:flex sm:items-center sm:ml-6">
                            <div className="ml-3 relative">
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                            >
                                                ユーザー名:{auth.user.name}

                                                <svg
                                                    className="ml-2 -mr-0.5 h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </span>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content>
                                        <Dropdown.Link href={route('logout')} method="post" as="button">
                                            ログアウト
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>
                        </div>

                        <div className="-mr-2 flex items-center sm:hidden">
                            <button
                                onClick={() => setShowingNavigationDropdown((previousState) => !previousState)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                            >
                                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                    <path
                                        className={!showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                    <path
                                        className={showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div className={(showingNavigationDropdown ? 'block' : 'hidden') + ' sm:hidden'}>
                    <div className="pt-2 pb-3 space-y-1">
                        <ResponsiveNavLink href={route('dashboard')} active={route().current('dashboard')}>
                            Dashboard
                        </ResponsiveNavLink>
                    </div>

                    <div className="pt-4 pb-1 border-t border-gray-200">
                        <div className="px-4">
                            <div className="font-medium text-base text-gray-800">{auth.user.name}</div>
                            <div className="font-medium text-sm text-gray-500">{auth.user.email}</div>
                        </div>

                        <div className="mt-3 space-y-1">
                            <ResponsiveNavLink method="post" href={route('logout')} as="button">
                                ログアウト
                            </ResponsiveNavLink>
                        </div>
                    </div>
                </div>
            </nav>

            {/* {header && (
                <header className="bg-white shadow">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">{header}</div>
                </header>
            )} */}

            <main className="flex max-w-full justify-around">
                <div className="w-1/6 bg-black text-white">

                    <p className="pt-6 pb-1 px-6">初心者🔰</p>
                    <p className="px-6 py-1">アンレ✨４以上</p>
                    <p className="px-6 py-1">コンペ✨４以上</p>
                    <p className="px-6 py-1">アンレ✨２以下</p>
                    <p className="px-6 py-1">コンペ✨２以下</p>
                    <p className="px-6 py-1">サイドバー（仮）</p>
                    <p className="px-6 py-1"></p>
                </div>

                <div className="w-5/6">{children}</div>
            </main>

            <footer className="bg-black mt-10">
                <div className="flex">
                    <div className="pt-9 mr-auto">
                        <ApplicationLogo className="h-16 ml-16" />
                    </div>

                    <div>
                        <p className="pt-11 pr-7">
                            <Link
                                href="/"
                                className="no-underline text-3xl text-white hover:text-red-500"
                            >
                                 仮タイトル
                            </Link>
                        </p>
                    </div>

                    <div>
                        <p className="pt-11 pr-7">
                            <Link
                                href="/description"
                                className="no-underline text-3xl text-white hover:text-red-500"
                            >
                                 仮タイトル
                            </Link>
                        </p>
                    </div>

                    <div>
                        <p className="pt-11 pr-7">
                            <Link
                                href="/description"
                                className="no-underline text-3xl text-white hover:text-red-500"
                            >
                                仮タイトル
                            </Link>
                        </p>
                    </div>

                    <div>
                        <p className="pt-11 pr-24">
                            <Link
                                href="/description"
                                className="no-underline text-3xl text-white hover:text-red-500"
                            >
                                仮タイトル
                            </Link>
                        </p>
                    </div>
                </div>

                <p className="text-center text-2xl mt-5 pb-14 text-white font-zenmaru font-black">
                    Copyright © 2022 azarasi CORPORATION. All Rights Reserved.
                </p>
            </footer>
        </div>
    );
}
