//import React from "react";
import { Inertia } from "@inertiajs/inertia";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import Guest from "@/Layouts/GuestLayout";
import { Link } from '@inertiajs/inertia-react';
import React, { useState } from "react";

const Index = (props) => {

    const [word, setWord] = useState("");
    const [rank, setRank] = useState(null);
    const [number, setNumber] = useState(null);
    const [role, setRole] = useState(null);
    const [stance, setStance] = useState(null);
    const [time, setTime] = useState(null);
    const { auth, ranks, roles, stances, times } = props;   // Stance $stance, Time $time

    console.log("neko", props);

    const handleSearch = (e) => {
        e.preventDefault();
        Inertia.get(`/result`, { word: word, rank: rank, role: role, stance: stance, time: time,number: number, });
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
                            <option value="アイアン">アイアン</option>
                            <option value="ブロンズ">ブロンズ</option>
                            <option value="シルバー">シルバー</option>
                            <option value="ゴールド">ゴールド</option>
                            <option value="プラチナ">プラチナ</option>
                            <option value="ダイヤモンド">ダイヤ</option>
                            <option value="アセンダント">アセンダント</option>
                            <option value="イモータル">イモータル</option>
                            <option value="レディアント">レディアント</option>

                        </select>
                        
                        <select onChange={(e) => setNumber(e.target.value)}>
                            <option default>ランク番号</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>

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
                        


                        {/* <select onChange={(e) => setTime(e.target.value)}>
                            <option default>時間を選択</option>
                            {times.map((time) => (

                                <option key={time.id} value={time.id}>{time.day}</option>
                            )
                            )
                            }

                        </select> */}



                        <button type="submit" className="bg-gray-400">検索</button>
                        
                    </form>
                    <span className="text-red-600">{props.errors.rank_id}</span>
                    <br/>
                        <span className="text-red-600">{props.errors.role_id}</span>
                        <br/>
                        <span className="text-red-600">{props.errors.stance_id}</span>
                </Authenticated>
            ) : (
                <Guest>

<div>検索</div>
                    <form onSubmit={handleSearch}>

                        <input type="text" onChange={(e) => setWord(e.target.value)} placeholder="探したい人の名前" className="input input-bordered input-secondary w-1/4 max-w-xs className=bg-white text-gray-600 border-4 border-r-0 border-black  text-center pt-5 font-black text-3xl p-3" />

                        <select onChange={(e) => setRank(e.target.value)}className="bg-white text-gray-600 border-4 border-r-0 border-black  text-center pt-5 font-black text-3xl p-3 w-1/4">
                            <option default>ランク選択</option>
                            <option value="アイアン">アイアン</option>
                            <option value="ブロンズ">ブロンズ</option>
                            <option value="シルバー">シルバー</option>
                            <option value="ゴールド">ゴールド</option>
                            <option value="プラチナ">プラチナ</option>
                            <option value="ダイヤモンド">ダイヤ</option>
                            <option value="アセンダント">アセンダント</option>
                            <option value="イモータル">イモータル</option>
                            <option value="レディアント">レディアント</option>

                        </select>
                    
                        <select onChange={(e) => setNumber(e.target.value)}className="bg-white text-gray-600 border-4 border-r-0 border-black  text-center pt-5 font-black text-3xl p-3 w-1/4">
                            <option default>ランク番号</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>

                        </select>
<br/>
                        <select onChange={(e) => setRole(e.target.value)}className="bg-white text-gray-600 border-4 border-r-0 border-black  text-center pt-5 font-black text-3xl p-3 w-1/4">
                            <option default>ロールを選択</option>
                            {roles.map((role) => (

                                <option key={role.id} value={role.id}>{role.name}</option>
                            )
                            )
                            }

                        </select>
                    

                        <select onChange={(e) => setStance(e.target.value)}className="bg-white text-gray-600 border-4 border-r-0 border-black  text-center pt-5 font-black text-3xl p-3 w-auto">
                            <option default>プレイスタイルを選択</option>
                            {stances.map((stance) => (

                                <option key={stance.id} value={stance.id}>{stance.name}</option>
                            )
                            )
                            }

                        </select>
                        


                        {/* <select onChange={(e) => setTime(e.target.value)}>
                            <option default>時間を選択</option>
                            {times.map((time) => (

                                <option key={time.id} value={time.id}>{time.day}</option>
                            )
                            )
                            }

                        </select> */}


<br/>
                        <button type="submit" className="bg-black hover:text-red-500 text-white p-7 font-black">検索</button>
                        
                    </form>
                    <span className="text-red-600">{props.errors.rank_id}</span>
                    <br/>
                        <span className="text-red-600">{props.errors.role_id}</span>
                        <br/>
                        <span className="text-red-600">{props.errors.stance_id}</span>
                </Guest>
            )
            }
        </div>
    );

};
export default Index;