//import React from "react";
import { Inertia } from "@inertiajs/inertia";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import Guest from "@/Layouts/GuestLayout";
import { Link } from '@inertiajs/inertia-react';
import React, { useState } from "react";

const Index = (props) => {

    const [word, setWord] = useState("");
    const [rank,setRank] =useState(null);
    const { auth, ranks } = props;

    console.log("neko", props);

    const handleSearch = (e) => {
        e.preventDefault();
        Inertia.get(`/result`,{ word: word,rank: rank });
    };



    return (
        <div>
            { auth.user != null ? (
                <Authenticated auth={auth}>
                    <div>検索</div>
                    <form onSubmit={handleSearch}>

                        <input type="text" onChange={(e) => setWord(e.target.value)} placeholder="Type here" className="input input-bordered input-secondary w-full max-w-xs" />

                        <select onChange={(e)=>setRank(e.target.value)}>
                        <option default>ランク選択</option>
                            {ranks.map((rank) => (
                                
                                    <option key={rank.id} value={rank.id}>{rank.name}{rank.number}</option>
                            )
                            )
                            }

                        </select>


                        <button type="submit" className="bg-gray-400">検索</button>
                    </form>
                </Authenticated>
            ) : (
                <Guest>

                    <input type="text" placeholder="Type here" className="input input-bordered input-secondary w-full max-w-xs" />
                </Guest>
            )
            }
        </div>
    );

};
export default Index;