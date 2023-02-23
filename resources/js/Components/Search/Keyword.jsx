import { Inertia } from "@inertiajs/inertia";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import Guest from "@/Layouts/GuestLayout";
import { Link } from '@inertiajs/inertia-react';
import React, { useState } from "react";

const Keyword = (props) => {

    const [word, setWord] = useState("");
    const [rank, setRank] = useState(null);
    const [number, setNumber] = useState(null);
    const [role, setRole] = useState(null);
    const [stance, setStance] = useState(null);
    const { auth, roles, stances } = props;   // Stance $stance

    console.log("neko", props);

    const handleSearch = (e) => {
        e.preventDefault();
        Inertia.get(`/result`, { word: word, rank: rank, role: role, stance: stance, number: number, });
    };



    return (
        <div className="font-body1">
            {auth.user != null ? (
                <Authenticated auth={auth}>
                    <div className="m-3 text-xl bg-black text-white pl-5 py-1 font-black">ユーザー検索</div>
                    <form onSubmit={handleSearch}>

                        <input type="text" className="p-3 bg-white border-4 border-black text-center pt-5 font-black text-xl rounded-l-xl w-1/5 ml-16" onChange={(e) => setWord(e.target.value)} placeholder="探したい人の名前" />
                    </form>
                </Authenticated>
            ) : (
                <Guest>

                    <div className="m-3 text-xl bg-black text-white pl-5 py-1 font-black">ユーザー検索</div>
                    <form onSubmit={handleSearch}>

                        <input type="text" className="p-3 bg-white border-4 border-black text-center pt-5 font-black text-xl rounded-l-xl w-1/5 ml-16" onChange={(e) => setWord(e.target.value)} placeholder="探したい人の名前" />

                        <button type="submit" className="bg-black p-4 pt-6 rounded-r-xl text-white text-xl hover:text-red-500 font-black">検索</button>

                    </form>
                    <span className="text-red-600">{props.errors.rank}</span>
                    <br />
                    <span className="text-red-600">{props.errors.role}</span>
                    <br />
                    <span className="text-red-600">{props.errors.stance}</span>
                </Guest>
            )
            }
        </div>
    );

};
export default Keyword;