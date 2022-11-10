import React from "react";
import { Inertia } from "@inertiajs/inertia";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import Guest from "@/Layouts/GuestLayout";
import { Link } from '@inertiajs/inertia-react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

const Show = (props) => {

    const { auth, users } = props;

    console.log("neko", props);





    return (
        <div className="font-body1">
            { auth.user != null ? (
                <Authenticated auth={auth}>
                    <div className="m-3 text-xl bg-black text-white pl-5 py-1 font-black">検索結果</div>
                    { users.map((user) => (
                        <div key={user.id} >
                            <div className="flex ml-2 mt-4 rounded-xl shadow-lg shadow-gray-500">
                                <div className="p-3  bg-white border-4 border-black text-center pt-5 font-black text-3xl rounded-l-xl w-1/4"><Link href={`/mypage/${user.id}`} className="no-underline text-gray-500 hover:text-red-500">{user.name}</Link></div>
                                <div className="bg-white border-4 border-r-0 border-black text-gray-500 text-center pt-5 font-black text-3xl p-3 w-1/6">{user.rank.name}</div>
                                <div className="bg-white border-4 border-r-0 border-black text-gray-500 p-3 w-1/4 text-center pt-5 font-black text-3xl">{user.role.name}</div>
                                <div className="bg-white border-4 border-r-0 border-black text-gray-500 p-3 w-1/6 text-center pt-5 font-black text-3xl">{user.stance.name}
                                </div>
                                <div className="bg-white border-4 border-r-0 border-black text-gray-500 p-3 w-1/6 text-center pt-5 font-black text-3xl">{user.time.day}</div>
                                <div className="bg-white border-4 border-black rounded-r-xl text-gray-500 p-3 w-1/4 text-center pt-5 font-black text-3xl">


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
                    )

                    )

                    }

                </Authenticated>
            ) : (
                <Guest>
                    { users.map((user) => (
                        <div key={user.id} >
                            <div className="flex ml-2 mt-4 rounded-xl shadow-lg shadow-gray-500">
                                <div className="p-3  bg-white border-4 border-black text-center pt-5 font-black text-3xl rounded-l-xl w-1/4"><Link href={`/mypage/${user.id}`} className="no-underline text-gray-500 hover:text-red-500">{user.name}</Link></div>
                                <div className="bg-white border-4 border-r-0 border-black text-gray-500 text-center pt-5 font-black text-3xl p-3 w-1/6">{user.rank.name}</div>
                                <div className="bg-white border-4 border-r-0 border-black text-gray-500 p-3 w-1/4 text-center pt-5 font-black text-3xl">{user.role.name}</div>
                                <div className="bg-white border-4 border-r-0 border-black text-gray-500 p-3 w-1/6 text-center pt-5 font-black text-3xl">{user.stance.name}
                                </div>
                                <div className="bg-white border-4 border-r-0 border-black text-gray-500 p-3 w-1/6 text-center pt-5 font-black text-3xl">{user.time.day}</div>
                                <div className="bg-white border-4 border-black rounded-r-xl text-gray-500 p-3 w-1/4 text-center pt-5 font-black text-3xl">


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
                    )

                    )

                    }

                </Guest>
            )
            }
        </div>
    );

};
export default Show;