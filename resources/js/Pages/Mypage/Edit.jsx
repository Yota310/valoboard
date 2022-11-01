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
        stance: mypage_user.stance.name,
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
                        <h1>マイページ</h1>


                        <div className="mb-8">
                            <div className="p-2 rounded-xl boarder-black">
                                <div className="flex">
                                    <div><img className="rounded-full h-36" src="https://iconbu.com/wp-content/uploads/2022/10/%E3%83%8F%E3%83%AD%E3%82%A6%E3%82%A3%E3%83%B3%E3%81%8A%E3%81%B0%E3%81%91%E3%81%95%E3%82%93.jpg"></img></div>

                                    <div className="pl-20 text-text-black ">
                                        <p className="border-black text-left font-black text-5xl rounded-l-xl">{auth.user.name}</p>
                                        <p className="text-left font-black text-4xl mt-5">ランク:{data.rank}{data.number}</p>
                                        <p className="text-left font-black text-4xl mt-5">ロール:{data.role}</p>
                                        <p className="text-left font-black text-4xl mt-5">プレイスタイル</p>
                                        <p className="text-left font-black text-4xl mt-5">:{data.stance}</p>
                                        {/* <p className="text-left font-black text-4xl mt-5">時間帯</p> */}
                                        <p className="text-left font-black text-4xl mt-5">コメント</p>
                                        <p>:ゲームしてる時間やキャラを書こう！
                                    </p>

                                    </div>
                                    <form onSubmit={handleSendData}>

                                        <input className="ml-5" type="text" value={data.name} onChange={(e) => setData("name", e.target.value)} />


                                        <br />
                                        <div className="mt-5 ml-5">
                                            <select onChange={(e) => setData("rank", e.target.value)}>
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



                                            <select onChange={(e) => setData("number", e.target.value)}>
                                                <option default>ランク番号</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                            </select>

                                        </div>



                                        <div className="mt-5 ml-5">
                                            <select onChange={(e) => setData("role", e.target.value)}>
                                                <option default>ロール選択</option>
                                                {roles.map((role) => (

                                                    <option key={role.id} value={role.id}>{role.name}</option>
                                                )
                                                )


                                                }
                                            </select>
                                        </div>





                                        <div className="mt-5 ml-5">
                                            <select onChange={(e) => setData("stance", e.target.value)}>
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

                                        <div className="mt-5 ml-5">
                                            <textarea placeholder="コメント" value={data.profile} onChange={(e) => setData("profile", e.target.value)} />
                                        </div>




                                        <div>
                                            <h2 className="text-title-purple1 text-2xl ml-5">プロフィール画像</h2> {/*送信用*/}
                                            <img className="rounded-full h-48 w-48 my-0 mx-auto" src={preview} />  {/*変更後のプレビューを表示*/}
                                            <input className="mt-2 mb-4" type="file" onChange={(e) => { setData("image", e.target.files[0]); handleChangeFile(e); }} />
                                            <span className="text-red-600">{props.errors.image}</span>
                                        </div>



                                        <div>
                                            <button type="submit" className="bg-red-500">変更</button>
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