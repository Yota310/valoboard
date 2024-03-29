import React, { useState } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import NavLink from '@/Components/NavLink';
import Dropdown from '@/Components/Dropdown';
import { Link } from '@inertiajs/inertia-react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faHouse, faUser, faRightToBracket, faPenToSquare, faCrosshairs } from "@fortawesome/free-solid-svg-icons";
export default function Guest({ children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    return (
        <div className="min-h-screen bg-gray-100">
            <nav className="bg-black border-b border-gray-100 p-5">
                <div className=" text-8xl text-center text-red-500 italic rounded-full bg-white font-title">VALO BOARD</div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-black pt-2">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                            <div className="shrink-0 flex items-center">

                            </div>

                            <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                                <NavLink href="/" active={route().current('dashboard')}>
                                    <FontAwesomeIcon icon={faHouse} className="text-white text-xl mr-2" />
                                    トップ
                            </NavLink>
                            </div>

                            <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                                <NavLink href="/login" active={route().current('dashboard')}>
                                    <FontAwesomeIcon icon={faUser} className="text-white text-xl mr-2" />
                                    マイページ
                            </NavLink>
                            </div>

                            <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                                <NavLink href="/login" active={route().current('dashboard')}>
                                    <FontAwesomeIcon icon={faRightToBracket} className="text-white text-xl mr-2" />
                                    ログイン
                            </NavLink>
                            </div>


                            <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                                <NavLink href="/register" active={route().current('dashboard')}>
                                    <FontAwesomeIcon icon={faPenToSquare} className="text-white text-xl mr-2" />
                                    新規登録
                            </NavLink>
                            </div>

                            <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                                <NavLink href="/search" active={route().current('dashboard')}>
                                    <FontAwesomeIcon icon={faCrosshairs} className="text-white text-xl mr-2" />
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
                                                ユーザー名:guest

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
                                        <Dropdown.Link href={route('login')} method="get" as="button">
                                            ログイン
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

                        <div className="mt-3 space-y-1">
                            <ResponsiveNavLink method="post" href={route('logout')} as="button">
                                ログアウト
                        </ResponsiveNavLink>
                        </div>
                    </div>
                </div>
            </nav>

            <main className="flex max-w-full h-full justify-around">
                <div className="w-1/6 bg-black text-white">


                    <p className="mt-3 font-black"><a href="https://tracker.gg/valorant" target="_blank" className="text-white no-underline  pb-1 px-6 mt-3 hover:text-red-500 ">Valorant status</a></p>


                    <Link className="text-white no-underline  pb-1 px-6 hover:text-red-500"></Link>
                </div>

                <div className="w-5/6">{children}</div>
            </main>
            <div>
                <footer className="bg-black pb-0 mb-0 bottom-0 mt-3 w-full">
                    <div className="flex">
                        <div className="pt-9 mr-auto">
                            <ApplicationLogo className="h-auto w-36 ml-16" />
                        </div>

                        <div>
                            <p className="pt-11 pr-7">
                                <Link
                                    href="/"
                                    className="no-underline text-3xl text-white hover:text-red-500"
                                >
                                    HOME
                            </Link>
                            </p>
                        </div>

                        <div>
                            <p className="pt-11 pr-7">
                                <Link
                                    href="/description"
                                    className="no-underline text-3xl text-white hover:text-red-500"
                                >
                                    プライバシーポリシー
                            </Link>
                            </p>
                        </div>

                        <div>
                            <p className="pt-11 pr-7">
                                <Link
                                    href="/description"
                                    className="no-underline text-3xl text-white hover:text-red-500"
                                >
                                    ご利用にあたって
                            </Link>
                            </p>
                        </div>
                        <div>
                            <p className="pt-11 pr-7">
                                <Link
                                    href="/description"
                                    className="no-underline text-3xl text-white hover:text-red-500"
                                >
                                    FAQ
                            </Link>
                            </p>
                        </div>

                        <div>
                            <p className="pt-11 pr-24">
                                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfLZhuocprmjfpVhKtXX2QJSYnqQKCzv_4JF0oECIiDwjbk5A/viewform?usp=sf_link" target="_blank" className="no-underline text-3xl text-white hover:text-red-500">アンケート
                        </a>
                            </p>
                        </div>
                    </div>

                    <p className="text-center text-2xl mt-5 pb-14 text-white font-zenmaru font-black">
                        Copyright © 2022 azarasi CORPORATION. All Rights Reserved.
                </p>
                </footer>
            </div>
        </div>
    );
}