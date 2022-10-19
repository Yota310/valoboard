import React from "react";
import { Inertia } from "@inertiajs/inertia";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import Guest from "@/Layouts/GuestLayout";
import { Link } from '@inertiajs/inertia-react';



const Mypage = (props) => {
    const { auth_user,auth, } = props;
    console.log("neko", props);


    const handleDeletePost = (id) => {
        Inertia.delete(`/posts/${id}`, {
            onBefore: () => confirm("消し去る覚悟はできてるか？"),
        })
    }





    return (
        <div>
            {auth.user != null ? (


                <Authenticated auth={auth}>

                    <div>
                        <div className="p-7">
                            <h1>マイページ</h1>

                            
                                <div className="mb-8">
                                    <div className="p-2rounded-xl bg-black">
                                        <div className="p-7 m-3 bg-white rounded-full w-1/5 mx-auto">{auth.user.name}</div>
                                        <div className="bg-white rounded-full p-7 m-3 w-1/5">{auth_user.rank.name}</div>
                                        <div className="bg-white rounded-full p-7 w-1/5 m-3">{auth_user.role.name}</div>
                                        <div className="bg-white rounded-full p-7 w-1/5 m-3">{auth_user.stance.description}</div>
                                        <div className="bg-white rounded-full p-7 w-1/5 m-3">{auth_user.time_id}aaa aaaaaaaaa</div>
                                        <div className="bg-white rounded-full p-7 w-1/5 m-3">{auth_user.moral}aaaaaaaaaaaaaaaaa</div>
                                    </div>




                                </div>
                            )

                            
                        </div>
                    </div>
                </Authenticated>
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
export default Mypage;