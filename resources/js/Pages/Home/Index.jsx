//import React from "react";
import { Inertia } from "@inertiajs/inertia";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import Guest from "@/Layouts/GuestLayout";
import { Link } from '@inertiajs/inertia-react';
import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
//import FastfoodIcon from '@material-ui/icons/Fastfood';



const Index = (props) => {
    const [value, setValue] = React.useState();

    const { users, auth } = props;
    console.log("neko", props);


    const handleDeletePost = (id) => {
        Inertia.delete(`/posts/${id}`, {
            onBefore: () => confirm("消し去る覚悟はできてるか？"),
        })
    }





    return (
        <div className="font-body1">
            {auth.user != null ? (


                <Authenticated auth={auth}>

                    <div>
                        <div className="p-7">
                            <h1 className="m-3 text-xl bg-black text-white pl-5 py-1 font-black">新着の評価</h1>
                        

                            {users.map((user) => (
                                <div key={user.id} className="mb-8">
                                    <div className="flex rounded-xl shadow-lg mt-3 shadow-gray-500">
                                        <div className="py-3 pl-3  bg-white border-4 border-black text-center pt-5 font-black text-3xl rounded-l-xl w-1/3">

                                            <div className="flex">

                                                {user.image_path !== null ? (
                                                    <div className="w-1/7">
                                                        <img
                                                            className="h-12 w-12 my-0 ml-0 rounded-full aspect-square object-cover border-2 border-gray-300"
                                                            src={user.image_path}
                                                        />
                                                    </div>
                                                ) : (
                                                    <div className="w-1/7">
                                                        <img
                                                            className="h-12 w-12 my-0 ml-0 rounded-full aspect-square object-cover border-2 border-gray-300"
                                                            src="https://valoboard.s3.ap-northeast-1.amazonaws.com/dummy/dami-.png"
                                                        />
                                                    </div>
                                                )}





                                                <Link href={`/mypage/${user.id}`} className="no-underline text-gray-600 hover:text-red-500 ml-2">{user.name}</Link></div>

                                        </div> {/*  flex */}


                                        <div className="bg-white text-gray-600 border-4 border-r-0 border-black  text-center pt-5 font-black text-3xl p-3 w-1/6">{user.rank.name}{user.rank.number}</div>
                                        <div className="bg-white text-gray-600 border-4 border-r-0 border-black p-3 w-1/4 text-center pt-5 font-black text-3xl">{user.role.name}</div>
                                        <div className="bg-white text-gray-600 border-4 border-r-0 border-black p-3 w-1/6 text-center pt-5 font-black text-3xl">
                                            {user.stance.id == 1 ? (<p>{user.stance.name}</p>) : (user.stance.id == 2 ? (<p>{user.stance.name}</p>) : (<p>{user.stance.name}</p>))
                                            }
                                        </div>

                                        <div className="bg-white border-4 text-gray-600 border-black rounded-r-xl p-3 w-1/7 text-center pt-5 font-black text-3xl">




                                            <Box
                                                sx={{
                                                    '& > legend': { mt: 2 },
                                                }}
                                            >

                                                {/* <Typography component="legend">Read only</Typography> */}
                                                <Rating size="large" name="read-only" value={user.moral} readOnly />



                                            </Box>
                                        </div>
                                    </div>




                                </div>
                            ))

                            }
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
                            <h1 className="m-3 text-xl bg-black text-white pl-5 py-1 font-black">新着の評価</h1>

                            {users.map((user) => (
                                <div key={user.id} className="mb-8">
                                    <div className="flex rounded-xl shadow-lg mt-3 shadow-gray-500">
                                        <div className="py-3 pl-3  bg-white border-4 border-black text-center pt-5 font-black text-3xl rounded-l-xl w-1/3">

                                            <div className="flex">

                                                {user.image_path !== null ? (
                                                    <div className="w-1/7">
                                                        <img
                                                            className="h-12 w-12 my-0 ml-0 rounded-full aspect-square object-cover border-2 border-gray-300"
                                                            src={user.image_path}
                                                        />
                                                    </div>
                                                ) : (
                                                    <div className="w-1/7">
                                                        <img
                                                            className="h-12 w-12 my-0 ml-0 rounded-full aspect-square object-cover border-2 border-gray-300"
                                                            src="https://valoboard.s3.ap-northeast-1.amazonaws.com/dummy/dami-.png"
                                                        />
                                                    </div>
                                                )}





                                                <Link href={`/mypage/${user.id}`} className="no-underline text-gray-600 hover:text-red-500 ml-2">{user.name}</Link></div>

                                        </div> {/*  flex */}


                                        <div className="bg-white text-gray-600 border-4 border-r-0 border-black  text-center pt-5 font-black text-3xl p-3 w-1/6">{user.rank.name}{user.rank.number}</div>
                                        <div className="bg-white text-gray-600 border-4 border-r-0 border-black p-3 w-1/4 text-center pt-5 font-black text-3xl">{user.role.name}</div>
                                        <div className="bg-white text-gray-600 border-4 border-r-0 border-black p-3 w-1/6 text-center pt-5 font-black text-3xl">
                                            {user.stance.id == 1 ? (<p>{user.stance.name}</p>) : (user.stance.id == 2 ? (<p>{user.stance.name}</p>) : (<p>{user.stance.name}</p>))
                                            }
                                        </div>

                                        <div className="bg-white border-4 text-gray-600 border-black rounded-r-xl p-3 w-1/7 text-center pt-5 font-black text-3xl">




                                            <Box
                                                sx={{
                                                    '& > legend': { mt: 2 },
                                                }}
                                            >

                                                {/* <Typography component="legend">Read only</Typography> */}
                                                <Rating size="large" name="read-only" value={user.moral} readOnly />



                                            </Box>
                                        </div>
                                    </div>




                                </div>
                            ))

                            }
                        </div>
                    </div>
                </Guest>
            )}
        </div>


    );
}
export default Index;