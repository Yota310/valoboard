//import React from "react";
import { Inertia } from "@inertiajs/inertia";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import Guest from "@/Layouts/GuestLayout";
import { Link } from '@inertiajs/inertia-react';
import React, { useState } from "react";

const Index = (props) => {

    const [word, setWord] = useState("");
    const [rank, setRank] = useState(null);
    const [role, setRole] = useState(null);
    const [stance, setStance] = useState(null);
    const [time, setTime] = useState(null);
    const { auth, ranks, roles, stances, times } = props;   // Stance $stance, Time $time

    console.log("neko", props);

    const handleSearch = (e) => {
        e.preventDefault();
        Inertia.get(`/result`, { word: word, rank: rank, role: role, stance: stance, time: time, });
    };



    return (
        <div>
            { auth.user != null ? (
                <Authenticated auth={auth}>
                    <div>検索</div>
                    <form onSubmit={handleSearch}>

                        <input type="text" onChange={(e) => setWord(e.target.value)} placeholder="探したい人の名前を入力してください" className="input input-bordered input-secondary w-full max-w-xs" />

                        <select onChange={(e) => setRank(e.target.value)}>
                            <option default>ランク選択</option>
                            {ranks.map((rank) => (

                                <option key={rank.id} value={rank.id}>{rank.name}{rank.number}</option>
                            )
                            )
                            }

                        </select>

                        <select onChange={(e) => setRole(e.target.value)}>
                            <option default>ロールを選択</option>
                            {roles.map((role) => (

                                <option key={role.id} value={role.id}>{role.name}</option>
                            )
                            )
                            }

                        </select>

                        <select onChange={(e) => setStance(e.target.value)}>
                            <option default>プレイスタイルを選択</option>
                            {stances.map((stance) => (

                                <option key={stance.id} value={stance.id}>{stance.name}</option>
                            )
                            )
                            }

                        </select>


                        <select onChange={(e) => setTime(e.target.value)}>
                            <option default>時間を選択</option>
                            {times.map((time) => (

                                <option key={time.id} value={time.id}>{time.day}</option>
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