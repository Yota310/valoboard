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
        <div>
            { auth.user != null ? (
                <Authenticated auth={auth}>
                    { users.map((user) => (
                        <div key={user.id} >
                            <div className="flex p-2 rounded-xl">
                                <div className="p-3  bg-white border-4 border-black text-center pt-5 font-black text-3xl rounded-l-xl w-1/4"><Link href="" className="no-underline">{user.name}</Link></div>
                                <p>{user.rank.name}</p>
                            </div>


                        </div>
                    )

                    )

                    }

                </Authenticated>
            ) : (
                <Guest>
                    <input type="text" placeholder="Type here" className="input input-bordered input-secondary w-full max-w-xs" />
                </Guest>
            )
            }
        </div>
    );

};
export default Show;