import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import Guest from "@/Layouts/GuestLayout";
import { Link, useForm } from '@inertiajs/inertia-react';
import Rating from '@mui/material/Rating';





const Index = (props) => {
    const { mypage_user, auth, ranks, roles, stances } = props;
    console.log("neko", props);

    const { data, setData, post } = useForm({
        image: "",


        image_path: mypage_user.image_path,
        name: mypage_user.name,
        rank: mypage_user.rank.name,
        number: mypage_user.rank.number,
        role: mypage_user.role.id,
        stance: mypage_user.stance.id,
        profile: mypage_user.profile,
        //time:mypage_user.time.day,

    })

    const [preview, setPreview] = useState('');

    const handleSendData = (e) => {
        console.log("ここまで恋");
        e.preventDefault();
        post(`/mypage/${auth.user.id}/update`);
    };


    const handleChangeFile = (e) => { //プレビューの表示用
        const { files } = e.target;
        setPreview(window.URL.createObjectURL(files[0]));
    };




    return (
        <div className="font-body1">
            <Authenticated auth={auth}>

                <div>
                    <div className="p-7">
                        <h1 className="m- text-xl bg-black text-white pl-5 py-1 font-black">マイページの編集</h1>


                        <div className="mb-8">
                            <div className="p-2 rounded-xl boarder-black">
                                <div className="flex">
                                    <div className="mx-3 mt-5">
                                        {auth.user.image_path !== null ? (
                                            <div>
                                                <img
                                                    className="h-48 w-48 my-0 mx-auto rounded-full aspect-square object-cover border-2 border-gray-300"
                                                    src={auth.user.image_path}
                                                />
                                            </div>
                                        ) : (
                                            <div>
                                                <img
                                                    className="rounded-full border-2 aspect-square h-48 w-48"
                                                    src="https://valoboard.s3.ap-northeast-1.amazonaws.com/dummy/dami-.png"
                                                />
                                            </div>
                                        )}
                                    </div>
                                   
                                    
                                    <form onSubmit={handleSendData} className="w-1/3 ml-40">
                                        <div>
                                            <p className="mt-10 block mx-auto bg-black border-4 text-white text-2xl border-black rounded-xl p-2 pr-5 text-center pt-5 font-black">{auth.user.name}</p>
                                            <input className="mt-1 block mx-auto bg-white border-4 text-gray-600 border-black rounded-xl p-2 pr-5 text-center pt-5 font-black text-xl" type="text" value={data.name} onChange={(e) => setData("name", e.target.value)} />
                                        </div>

                                        <p className="mt-10 block mx-auto bg-black border-4 text-white text-2xl border-black rounded-xl p-2 pr-5 text-center pt-5 font-black">ランク</p>
                                        <div className="mt-1 mx-auto flex">

                                            <div>
                                                <select className="mt-0 block bg-white border-4 text-gray-600 border-black rounded-xl p-2 pr-7 pl-5 text-center pt-5 font-black text-xl" value={data.rank} onChange={(e) => setData("rank", e.target.value)}>
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
                                            </div>


                                            <div>
                                                <select className="mt-0 block mx-auto bg-white border-4 text-gray-600 border-black rounded-xl p-2 pr-8 pl-3 text-center pt-5 font-black text-xl " value={data.number} onChange={(e) => setData("number", e.target.value)}>
                                                    <option default>ランク番号</option>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                </select>
                                            </div>
                                        </div>



                                        <div className="mt-10 ml-0 ">
                                            <p className="mt-10 block mx-auto bg-black border-4 text-white text-2xl border-black rounded-xl p-2 pr-5 text-center pt-5 font-black">ロール</p>
                                            <select className="mt-1 block mx-auto bg-white border-4 text-gray-600 border-black rounded-xl p-2 px-16 text-center pt-5 font-black text-xl" value={data.role} onChange={(e) => setData("role", e.target.value)}>
                                                <option default>ロール選択</option>
                                                {roles.map((role) => (

                                                    <option key={role.id} value={role.id}>{role.name}</option>
                                                )
                                                )


                                                }
                                            </select>
                                        </div>





                                        <div className="mt-10 ml-0">
                                            <p className="mt-10 block mx-auto bg-black border-4 text-white text-2xl border-black rounded-xl p-2 pr-5 text-center pt-5 font-black">プレイスタイル</p>
                                            <select className="mt-1 block mx-auto bg-white border-4 text-gray-600 border-black rounded-xl p-2 px-12 text-center pt-5 font-black text-xl" value={data.stance} onChange={(e) => setData("stance", e.target.value)}>
                                                <option default>プレイスタイル選択</option>
                                                {stances.map((stance) => (

                                                    <option key={stance.id} value={stance.id}>{stance.name}</option>
                                                )
                                                )


                                                }
                                            </select>
                                        </div>
                                        <br />


                                        <br />

                                        <div className="mb-3 ml-0">
                                            <p className="mt-0 block mx-auto bg-black border-4 text-white text-2xl border-black rounded-xl p-2 pr-5 text-center pt-5 font-black">コメント</p>
                                            <textarea className="mt-1 block w-11/12 h-72 mx-auto bg-white border-4 text-gray-600 border-black rounded-xl pr-3 pl-4 text-left pt-5 font-black text-lg" placeholder="コメント" value={data.profile} onChange={(e) => setData("profile", e.target.value)} />
                                        </div>




                                        <div>
                                            <p className="mt-10 block mx-auto bg-black border-4 text-white text-2xl border-black rounded-xl p-2 pr-5 text-center pt-5 font-black">プロフィール画像</p> {/*送信用*/}

                                            <img className="rounded h-48 w-48 my-0 mx-auto bg-white" src={preview} />  {/*変更後のプレビューを表示*/}
                                            <input className="mt-2 mb-4" type="file" onChange={(e) => { setData("image", e.target.files[0]); handleChangeFile(e); }} />
                                            <span className="text-red-600">{props.errors.image}</span>
                                        </div>



                                        <div>
                                            <button type="submit" className="ml-40 bg-black text-white p-2 rounded-xl hover:text-red-500 font-black">変更</button>
                                        </div>

                                    </form>




                                </div>





                            </div>



                        </div>
                    </div>
                </div>
            </Authenticated>

        </div>
    );
};

export default Index;