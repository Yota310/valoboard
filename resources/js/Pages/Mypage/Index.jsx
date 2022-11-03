import React from "react";
import { Inertia } from "@inertiajs/inertia";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import Guest from "@/Layouts/GuestLayout";
import { Link, useForm } from '@inertiajs/inertia-react';
import Rating from '@mui/material/Rating';
import PrimaryButton from '@/Components/PrimaryButton';




const Index = (props) => {
    const { mypage_user, auth, moral } = props;
    // console.log("neko", mypage_user.image_path);


    const handleDeletePost = (id) => {
        Inertia.delete(`/posts/${id}`, {
            onBefore: () => confirm("消し去る覚悟はできてるか？"),
        })
    }



    const moveToEdit = () => {

    }





    return (
        <div className="font-body1">
            {auth.user != null ? (
                auth.user.id == mypage_user.id ? (
                    <Authenticated auth={auth}>

                        <div>
                            <h1 className="m-3 text-xl bg-black text-white pl-5 py-1 font-black">マイページ</h1>
                            <div className="p-7">


                                <div className="mb-8 flex">
                                    <p className="border-black text-left font-black text-5xl ml-5 rounded-l-xl">{auth.user.name}</p>
                                    <div className="p-2 rounded-xl boarder-black mr-auto ml-30">
                                        <div className="flex">
                                            <div><img className="rounded-full h-20" src={mypage_user.image_path} /></div>

                                            <div className="pl-20 text-text-black ">
                                                <div className=" py-6 mt-1"></div>
                                                <p className="text-gray-600 text-left font-black text-4xl mt-5">ランク</p>
                                                <p className="text-gray-600 text-left font-black text-4xl mt-5">ロール</p>
                                                <p className="text-gray-600 text-left font-black text-4xl mt-5">プレイスタイル</p>
                                                <p className="text-gray-600 text-left font-black text-4xl mt-5">時間帯</p>
                                                <p className="text-gray-600 text-left font-black text-4xl mt-5">民度</p>
                                                <p className="text-gray-600 text-left font-black text-4xl mt-5">コメント</p>

                                            </div>

                                            <div className="pl-20  text-gray-600 pt-1">
                                                <p className="border-black text-left font-black text-5xl rounded-l-xl">　</p>
                                                <p className="text-left font-medium text-4xl mt-5">{mypage_user.rank.name}</p>
                                                <p className="text-left font-medium text-4xl mt-5">{mypage_user.role.name}</p>
                                                <p className="text-left font-medium text-4xl mt-5">{mypage_user.stance.name}</p>
                                                <p className="text-left font-medium text-4xl mt-5">{mypage_user.time.day}</p>
                                                <p className="text-left font-black text-4xl mt-5">

                                                    {/* <Typography component="legend">Read only</Typography> */}
                                                    <Rating size="large" name="read-only" value={mypage_user.moral} readOnly />




                                                </p>
                                                <p className="text-left font-medium text-4xl mt-5">{mypage_user.profile}</p>

                                            </div>


                                        </div>




                                    </div>



                                </div>
                                <div className="flex">


                                    <Link className="bg-black p-4 pt-4 rounded-xl ml-auto mr-40 no-underline text-white text-xl hover:text-red-500 font-black" href={`/mypage/${mypage_user.id}/edit`}>
                                        編集
                                    </Link>

                                </div>
                            </div>
                        </div>
                    </Authenticated>

                ) : (
                    <Authenticated auth={auth}>

<div>
                            <h1 className="m-3 text-xl bg-black text-white pl-5 py-1 font-black">マイページ</h1>
                            <div className="p-7">


                                <div className="mb-8 flex">
                                    <p className="border-black text-left font-black text-5xl ml-5 rounded-l-xl">{mypage_user.name}</p>
                                    <div className="p-2 rounded-xl boarder-black mr-auto ml-30">
                                        <div className="flex">
                                            <div><img className="rounded-full h-20" src={mypage_user.image_path} /></div>

                                            <div className="pl-20 text-text-black ">
                                                <div className=" py-6 mt-1"></div>
                                                <p className="text-gray-600 text-left font-black text-4xl mt-5">ランク</p>
                                                <p className="text-gray-600 text-left font-black text-4xl mt-5">ロール</p>
                                                <p className="text-gray-600 text-left font-black text-4xl mt-5">プレイスタイル</p>
                                                <p className="text-gray-600 text-left font-black text-4xl mt-5">時間帯</p>
                                                <p className="text-gray-600 text-left font-black text-4xl mt-5">民度</p>
                                                <p className="text-gray-600 text-left font-black text-4xl mt-5">コメント</p>

                                            </div>

                                            <div className="pl-20  text-gray-600 pt-1">
                                                <p className="border-black text-left font-black text-5xl rounded-l-xl">　</p>
                                                <p className="text-left font-medium text-4xl mt-5">{mypage_user.rank.name}</p>
                                                <p className="text-left font-medium text-4xl mt-5">{mypage_user.role.name}</p>
                                                <p className="text-left font-medium text-4xl mt-5">{mypage_user.stance.name}</p>
                                                <p className="text-left font-medium text-4xl mt-5">{mypage_user.time.day}</p>
                                                <p className="text-left font-black text-4xl mt-5">

                                                    {/* <Typography component="legend">Read only</Typography> */}
                                                    <Rating size="large" name="read-only" value={mypage_user.moral} readOnly />



                                                    <Link href={`/mypage/${mypage_user.id}/evaluation`} className="bg-black p-3 rounded-xl mr-40 no-underline text-white text-xl hover:text-red-500 font-black ml-5">民度を評価</Link>
                                                </p>
                                                <p className="text-left font-medium text-4xl mt-5">{mypage_user.profile}</p>

                                            </div>


                                        </div>




                                    </div>



                                </div>
                                <div className="flex">


                               

                                </div>
                            </div>
                        </div>
                    </Authenticated>
                )

            ) : (


                <Guest>

                    <div>
                        <div className="p-7">


                            <div className="mb-8">
                                <div className="p-2 rounded-xl boarder-black">
                                    <div className="flex">
                                        <div><img className="rounded-full h-20" src={mypage_user.image_path} /></div>

                                        <div className="pl-20 text-text-black ">
                                            <p className="text-gray-600　border-black text-left font-black text-5xl rounded-l-xl">{mypage_user.name}のページ</p>
                                            <p className="text-gray-600 text-left font-black text-4xl mt-5">ランク</p>
                                            <p className="text-gray-600 text-left font-black text-4xl mt-5">ロール</p>
                                            <p className="text-gray-600 text-left font-black text-4xl mt-5">プレイスタイル</p>
                                            <p className="text-gray-600 text-left font-black text-4xl mt-5">コメント</p>
                                            <p className="text-gray-600 text-left font-black text-4xl mt-5">民度の評価</p>


                                        </div>

                                        <div className="pl-20  text-gray-600 pt-1">
                                            <p className="border-black text-left font-black text-5xl rounded-l-xl">　</p>
                                            <p className="text-left font-medium text-4xl mt-5">{mypage_user.rank.name}</p>
                                            <p className="text-left font-medium text-4xl mt-5">{mypage_user.role.name}</p>
                                            <p className="text-left font-medium text-4xl mt-5">{mypage_user.stance.name}</p>
                                            {/* <p className="text-left font-medium text-4xl mt-5">{mypage_user.time.day}</p> */}
                                            <p className="text-left font-medium text-4xl mt-5">{mypage_user.profile}</p>

                                            <p className="text-left font-black text-4xl mt-5">
                                                <Rating size="large" name="read-only" value={mypage_user.moral} readOnly />

                                            </p>


                                        </div>


                                    </div>




                                </div>



                            </div>
                            <div className="flex items-center mt-4">
                                <button onClick={moveToEdit}></button>


                            </div>
                        </div>
                    </div>
                </Guest>
            )}
        </div>


    );
}
export default Index;