//import React from "react";
import { Inertia } from "@inertiajs/inertia";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import Guest from "@/Layouts/GuestLayout";
import { Link } from '@inertiajs/inertia-react';
import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';


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
        <div>
            {auth.user != null ? (


                <Authenticated auth={auth}>

                    <div>
                        <div className="p-7">
                            <h1>新着の評価</h1>

                            {users.map((user) => (
                                <div key={user.id} className="mb-8">
                                    <div className="flex p-2 rounded-xl">
                                        <div className="p-3  bg-white border-4 border-black text-center pt-5 font-black text-3xl rounded-l-xl w-1/4"><Link href="" className="no-underline">{user.name}</Link></div>
                                        <div className="bg-white border-4 border-r-0 border-black  text-center pt-5 font-black text-3xl p-3 w-1/6">{user.rank.name}</div>
                                        <div className="bg-white border-4 border-r-0 border-black p-3 w-1/4 text-center pt-5 font-black text-3xl">{user.role.name}</div>
                                        <div className="bg-white border-4 border-r-0 border-black p-3 w-1/6 text-center pt-5 font-black text-3xl">
                                        {user.stance.number == 1 ?(<p>ゆるく</p>):(user.stance.number==2?(<p>ガチで</p>):(<p>初心者</p>))
                                        }
                                            </div>
                                        <div className="bg-white border-4 border-r-0 border-black p-3 w-1/6 text-center pt-5 font-black text-3xl">{user.time.day}</div>
                                        <div className="bg-white border-4 border-black rounded-r-xl p-3 w-1/4 text-center pt-5 font-black text-3xl">


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
                            <h1>新着の評価</h1>

                            {users.map((user) => (
                                <div key={user.id} className="mb-8">
                                    <div className="flex p-2 rounded-xl">
                                        <div className="p-3 bg-white border-4 border-black rounded-xl w-1/5"><Link href="" className="no-underline">{user.name}</Link></div>
                                        <div className="bg-white border-4 border-black rounded-xl p-3 w-1/6">{user.rank_id} aaaaaaaaaa</div>
                                        <div className="bg-white border-4 border-black rounded-xl p-3 w-1/6">{user.role_id} aaaaaaaaa</div>
                                        <div className="bg-white border-4 border-black rounded-xl p-3 w-1/6">{user.stance_id}aaaaaaaaa</div>
                                        <div className="bg-white border-4 border-black rounded-xl p-3 w-1/6">{user.time_id}aaa aaaaaaaaa</div>
                                        <div className="bg-white border-4 border-black rounded-xl p-3 w-1/6">{user.moral}aaaaaaaaaaaaaaaaa</div>
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