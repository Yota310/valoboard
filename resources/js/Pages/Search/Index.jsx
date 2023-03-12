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
    const { auth, roles, stances} = props;   // Stance $stance

    console.log("neko", props);

    const handleSearch = (e) => {
        e.preventDefault();
        Inertia.get(`/result`, { word: word, rank: rank, role: role, stance: stance, number: number, });
    };



    return (
        <div className="font-body1">
            { auth.user != null ? (
                <Authenticated auth={auth}>
                    <div className="m-3 text-xl bg-black text-white pl-5 py-1 font-black">ユーザー検索</div>
                    <form onSubmit={handleSearch}>

                        <input type="text" className="p-3 bg-white border-4 border-black text-center pt-5 font-black text-xl rounded-l-xl w-1/5 ml-3" onChange={(e) => setWord(e.target.value)} placeholder="探したい人の名前" />

                        <select className="bg-white text-gray-600 border-4 border-r-0 border-black  text-left pt-5 font-black text-xl pb-3 px-6 w-1/7" onChange={(e) => setRank(e.target.value)}>
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

                        <select className="bg-white text-gray-600 border-4 border-r-0 border-black pt-5 text-left font-black text-xl pb-3 px-8 w-1/7" onChange={(e) => setNumber(e.target.value)}>
                            <option default>ランク番号</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>

                        </select>

                        <select className="bg-white text-gray-600 border-4 border-r-0 border-black  text-left pt-5 font-black text-xl pb-3 px-8 w-1/7" onChange={(e) => setRole(e.target.value)}>
                            <option default>ロールを選択</option>
                            {roles.map((role) => (

                                <option key={role.id} value={role.id}>{role.name}</option>
                            )
                            )
                            }

                        </select>


                        <select className="bg-white text-gray-600 border-4 border-r-0 border-black  text-left pt-5 font-black text-xl pb-3 px-8 w-1/8" onChange={(e) => setStance(e.target.value)}>
                            <option default>プレイスタイルを選択</option>
                            {stances.map((stance) => (

                                <option key={stance.id} value={stance.id}>{stance.name}</option>
                            )
                            )
                            }

                        </select>

                        <button type="submit" className="bg-black p-4 pt-6 rounded-r-xl text-white text-xl hover:text-red-500 font-black">検索</button>

                    </form>
                    <div className="ml-3 mr-3 w-1/3">
                    <span className="text-red-600 bg-red-200">{props.errors.rank}</span>
                    <br />
                    <span className="text-red-600 bg-red-200">{props.errors.role}</span>
                    <br />
                    <span className="text-red-600 bg-red-200">{props.errors.stance}</span>
                    </div>
                </Authenticated>
            ) : (
                <Guest>

<div className="m-3 text-xl bg-black text-white pl-5 py-1 font-black">ユーザー検索</div>
                    <form onSubmit={handleSearch}>

                        <input type="text" className="p-3 bg-white border-4 border-black text-center pt-5 font-black text-xl rounded-l-xl w-1/5 ml-3" onChange={(e) => setWord(e.target.value)} placeholder="探したい人の名前" />

                        <select className="bg-white text-gray-600 border-4 border-r-0 border-black  text-left pt-5 font-black text-xl pb-3 pl-3 pr-4 w-1/7" onChange={(e) => setRank(e.target.value)}>
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

                        <select className="bg-white text-gray-600 border-4 border-r-0 border-black pt-5 text-left font-black text-xl pb-3 pl-3 pr-8 w-1/7" onChange={(e) => setNumber(e.target.value)}>
                            <option default>ランク番号</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>

                        </select>

                        <select className="bg-white text-gray-600 border-4 border-r-0 border-black  text-left pt-5 font-black text-xl pb-3 pl-2 pr-4 w-1/7" onChange={(e) => setRole(e.target.value)}>
                            <option default>ロールを選択</option>
                            {roles.map((role) => (

                                <option key={role.id} value={role.id}>{role.name}</option>
                            )
                            )
                            }

                        </select>


                        <select className="bg-white text-gray-600 border-4 border-r-0 border-black  text-left pt-5 font-black text-xl pb-3 pl-3 pr-8 w-1/7" onChange={(e) => setStance(e.target.value)}>
                            <option default>プレイスタイルを選択</option>
                            {stances.map((stance) => (

                                <option key={stance.id} value={stance.id}>{stance.name}</option>
                            )
                            )
                            }

                        </select>



                        <button type="submit" className="bg-black p-4 pt-6 rounded-r-xl text-white text-xl hover:text-red-500 font-black">検索</button>

                    </form>
                    <span className="text-red-600 bg-red-200">{props.errors.rank}</span>
                    <br />
                    <span className="text-red-600 bg-red-200">{props.errors.role}</span>
                    <br />
                    <span className="text-red-600 bg-red-200">{props.errors.stance}</span>
                </Guest>
            )
            }
        </div>
    );

};
export default Index;