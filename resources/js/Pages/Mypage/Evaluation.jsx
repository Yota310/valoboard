import React from "react";
import { Inertia } from "@inertiajs/inertia";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import Guest from "@/Layouts/GuestLayout";
import { Link, useForm } from '@inertiajs/inertia-react';
import Rating from '@mui/material/Rating';


const Evaluation = (props) => {
    const { mypage_user, auth, moral } = props;
    // console.log("neko", mypage_user.image_path);
    const { data, setData, post } = useForm({
        star: null,
        user_id: auth.user.id,
        evaluated_user_id: mypage_user.id
    })

    const handleDeletePost = (id) => {
        Inertia.delete(`/posts/${id}`, {
            onBefore: () => confirm("消し去る覚悟はできてるか？"),
        })
    }

    const handleSendStar = (e) => {
        e.preventDefault();
        post(`/store/${mypage_user.id}`);
    }

    const moveToEdit = () => {

    }

    return (
        <div className="font-body1">
            <Authenticated auth={auth}>

            <div>
                            <h1 className="m-3 text-xl bg-black text-white pl-5 py-1 font-black">{mypage_user.name}のマイページ</h1>
                            <div className="p-7">


                                <div className="mb-8 flex">
                                    <div className="border-black text-left font-black text-3xl ml-5 rounded-l-xl">{mypage_user.name}
                                        <div className="h-48 w-48 my-0 mx-auto mt-5">
                                            {mypage_user.image_path !== null ? (
                                                <div>
                                                    <img
                                                        className="h-48 w-48 my-0 mx-auto rounded-full aspect-square object-cover border-2 border-gray-300"
                                                        src={mypage_user.image_path}
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
                                    </div>

                                    <div className=" rounded-xl border-black border-2 mr-5 ml-5 bg-white pr-1 pb-5  w-3/4">
                                        <div className="flex w-">
                                            {/* <div>neko<img className="rounded-full h-20" src={auth.user.image_path} /></div> */}
                                            {/*プロフィール写真がある場合はそれを表示、無い場合はダミーアイコンを表示*/}


                                            <div className="pl-10 pr-5 text-text-black">
                                                <p className=" py-6 mt-1"></p>
                                                <p className="text-gray-600 text-left font-black text-4xl mt-5">ランク</p>
                                                <p className="text-gray-600 text-left font-black text-4xl mt-5">ロール</p>
                                                <p className="text-gray-600 text-left font-black text-4xl mt-5">プレイスタイル</p>

                                                <p className="text-gray-600 text-left font-black text-4xl mt-5">民度</p>
                                                <p className="text-gray-600 text-left font-black text-4xl mt-5">コメント</p>
                                                <div className=" py-6 mt-1"></div>
                                            </div>

                                            <div className="text-gray-600 pt-1 w-2/3">
                                                <p className="border-black text-left font-black text-5xl rounded-l-xl">　</p>
                                                <p className="text-left font-medium text-4xl mt-5">{mypage_user.rank.name}</p>
                                                <p className="text-left font-medium text-4xl mt-5">{mypage_user.role.name}</p>
                                                <p className="text-left font-medium text-4xl mt-5">{mypage_user.stance.name}</p>

                                                <p className="text-left font-black text-4xl mt-5">

{/* <Typography component="legend">Read only</Typography> */}
<form onSubmit={handleSendStar} >
    <Rating size="large"
        name="simple-controlled"
        onChange={(e) => {
            setData("star", e.target.value);
        }}
    />
    
    <button type="submit" className="p-2 rounded-xl hover:text-red-500 bg-black text-white">送信</button>
</form>
</p>
                                                <p className="text-left font-medium text-4xl mt-5">{mypage_user.profile}</p>

                                            </div>


                                        </div>




                                    </div>



                                </div>

                            </div>
                        </div>
            </Authenticated>
        </div>
    );
}

export default Evaluation;