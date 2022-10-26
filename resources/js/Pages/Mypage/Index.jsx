import React from "react";
import { Inertia } from "@inertiajs/inertia";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import Guest from "@/Layouts/GuestLayout";
import { Link ,useForm} from '@inertiajs/inertia-react';
import Rating from '@mui/material/Rating';
import PrimaryButton from '@/Components/PrimaryButton';




const Index = (props) => {
    const { mypage_user, auth,moral } = props;
    // console.log("neko", mypage_user.image_path);


    const handleDeletePost = (id) => {
        Inertia.delete(`/posts/${id}`, {
            onBefore: () => confirm("消し去る覚悟はできてるか？"),
        })
    }



    const moveToEdit = () => {

    }

    



    return (
        <div>
            {auth.user != null ? (
                auth.user.id == mypage_user.id ? (
                    <Authenticated auth={auth}>

                        <div>
                            <div className="p-7">
                                <h1>マイページ</h1>


                                <div className="mb-8">
                                    <div className="p-2 rounded-xl boarder-black">
                                        <div className="flex">
                                            <div><img className="rounded-full h-20" src={mypage_user.image_path} /></div>

                                            <div className="pl-20 text-text-black ">
                                                <p className="border-black text-left font-black text-5xl rounded-l-xl">{auth.user.name}</p>
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
                                <div className="flex items-center mt-4">
                                    <button onClick={moveToEdit}></button>


                                    <button className="ml-4 text-xl hover:text-red-500">
                                        <Link href={`/mypage/${mypage_user.id}/edit`}>
                                            編集
                                    </Link>
                                    </button>

                                </div>
                            </div>
                        </div>
                    </Authenticated>

                ) : (
                    <Authenticated auth={auth}>

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
                                                <p className="text-gray-600 text-left font-black text-4xl mt-5">民度</p>


                                            </div>

                                            <div className="pl-20  text-gray-600 pt-1">
                                                <p className="border-black text-left font-black text-5xl rounded-l-xl">　</p>
                                                <p className="text-left font-medium text-4xl mt-5">{mypage_user.rank.name}</p>
                                                <p className="text-left font-medium text-4xl mt-5">{mypage_user.role.name}</p>
                                                <p className="text-left font-medium text-4xl mt-5">{mypage_user.stance.name}</p>
                                                {/* <p className="text-left font-medium text-4xl mt-5">{mypage_user.time.day}</p> */}
                                                <p className="text-left font-medium text-4xl mt-5">{mypage_user.profile}</p>

                                                <p className="text-left font-black text-4xl mt-5">

                                                    {/* <Typography component="legend">Read only</Typography> */}
                                                    
                                                    <Rating size="large" name="read-only" value={mypage_user.moral} readOnly />
                                                        <br />
                                                        
                                                
                                                </p>
<Link href={`/mypage/${mypage_user.id}/evaluation`}>民度を評価</Link>

                                            </div>


                                        </div>




                                    </div>



                                </div>
                                <div className="flex items-center mt-4">
                                    <button onClick={moveToEdit}></button>


                                    {/* <button className="ml-4 text-xl hover:text-red-500">
                                <Link href={`/mypage/${mypage_user.id}/edit`}>
                                    編集
                                </Link>
                                </button> */}

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