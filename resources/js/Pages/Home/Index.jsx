import Authenticated from "@/Layouts/AuthenticatedLayout";
import Guest from "@/Layouts/GuestLayout";
import * as React from 'react';
import Profile from "@/Components/Page/Profile";
import Search from "@/Components/Search/Keyword";
import { useState } from "react";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Inertia } from "@inertiajs/inertia";


const Index = (props) => {

    const { users, auth } = props;
    const [word, setWord] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        Inertia.get(`/keyword`, { word: word });
    };

    return (
        <div className="font-body1">
            {auth.user != null ? (


                <Authenticated auth={auth}>
                    <form onSubmit={handleSearch}>
                        <h1 className="text-xl text-white bg-black pl-5 py-1 font-black m-3">キーワード検索</h1>
                        <input type="text" className="p-3 bg-white border-4 border-black text-center pt-4 font-black text-xl rounded-l-xl w-1/3 ml-3 hover:shadow-gray-500 shadow-lg hover:border-red-500" onChange={(e) => setWord(e.target.value)} placeholder="探したい人の名前" />


                        <button type="submit" className="bg-black p-4 pt-5 rounded-r-xl text-white text-xl hover:text-red-500 font-black hover:shadow-gray-500 shadow-lg">
                            <FontAwesomeIcon icon={faMagnifyingGlass} className="mb-1" />
                        </button>

                    </form>

                    <Profile
                        title="新着の評価"
                        users={users}
                        auth={auth}
                    />

                </Authenticated>
            ) : (
                <Guest>


                    <form onSubmit={handleSearch}>
                        <h1 className="text-xl text-white bg-black pl-5 py-1 font-black m-3">キーワード検索</h1>
                        <input type="text" className="p-3 bg-white border-4 border-black text-center pt-4 font-black text-xl rounded-l-xl w-1/3 ml-3 hover:shadow-gray-500 shadow-lg hover:border-red-500" onChange={(e) => setWord(e.target.value)} placeholder="探したい人の名前" />


                        <button type="submit" className="bg-black p-4 pt-5 rounded-r-xl text-white text-xl hover:text-red-500 font-black hover:shadow-gray-500 shadow-lg">
                            <FontAwesomeIcon icon={faMagnifyingGlass} className="mb-1" />
                        </button>

                    </form>
                    <div className="mt-4">
                        <Profile
                            title="新着の評価"
                            users={users} />
                    </div>
                </Guest>
            )}
        </div>


    );
}
export default Index;