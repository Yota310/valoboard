import React from "react";
import { Inertia } from "@inertiajs/inertia";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import Guest from "@/Layouts/GuestLayout";
import { Link } from '@inertiajs/inertia-react';
import Rating from '@mui/material/Rating';




const Index = (props) => {
    const { auth_user, auth, } = props;
   // console.log("neko", auth_user.image_path);


    const handleDeletePost = (id) => {
        Inertia.delete(`/posts/${id}`, {
            onBefore: () => confirm("消し去る覚悟はできてるか？"),
        })
    }





    return (
        <div>
            {auth.user != null ? (
                auth.user.id == auth_user.id ? (
                    <Authenticated auth={auth}>

                    <div>
                        <div className="p-7">
                            <h1>マイページ</h1>


                            <div className="mb-8">
                                <div className="p-2 rounded-xl boarder-black">
                                    <div className="flex">
                                    <div><img className="rounded-full h-20" src={auth_user.image_path}/></div>

                                   <div className="pl-20 text-text-black ">
                                    <p className="border-black text-left font-black text-5xl rounded-l-xl">{auth.user.name}</p>
                                    <p className="text-left font-black text-4xl mt-5">ランク</p>
                                    <p className="text-left font-black text-4xl mt-5">ロール</p>
                                    <p className="text-left font-black text-4xl mt-5">プレイスタイル</p>
                                    <p className="text-left font-black text-4xl mt-5">時間帯</p>
                                    <p className="text-left font-black text-4xl mt-5">民度</p> 

                                    </div>

                                    <div className="pl-20 text-text-black pt-1">
                                    <p className="border-black text-left font-black text-5xl rounded-l-xl">　</p>
                                    <p className="text-left font-medium text-4xl mt-5">{auth_user.rank.name}</p>
                                    <p className="text-left font-medium text-4xl mt-5">{auth_user.role.name}</p>
                                    <p className="text-left font-medium text-4xl mt-5">{auth_user.stance.name}</p>
                                    <p className="text-left font-medium text-4xl mt-5">{auth_user.time.day}</p>
                                    <p className="text-left font-black text-4xl mt-5">

                                        {/* <Typography component="legend">Read only</Typography> */}
                                        <Rating size="large" name="read-only" value={auth_user.moral} readOnly />



                                    
                                    </p> 

                                    </div>
                                    
                                 
                                </div>




                            </div>
                            


                        </div>
                    </div>
                    </div>
                </Authenticated>
                
                ):(
                    <p>ko</p>
                )
            
            ) : (


                <Guest
                // header={
                //     <h2 className="font-semibold text-xl text-gray-800 leading-tight" >
                //         Index
                //     </h2>

                // }
                >
                    <div>
                        <div className="p-7">
                            <h1>現在あなたは<span className="text-red-500">ゲストユーザー</span>です。</h1>
                            <h2 className="py-3">マイページを見るためにはアカウントをお持ちの方は<Link>ログイン</Link>をしてください！</h2>
                            <h2 className="py-3">お持ちでない方は<Link>新規登録</Link>をして新しいヴァロボードライフを！</h2>

                        </div>
                    </div>

                </Guest>
            )}
        </div>


    );
}
export default Index;