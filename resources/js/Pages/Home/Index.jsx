//import React from "react";
import { Inertia } from "@inertiajs/inertia";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import Guest from "@/Layouts/GuestLayout";
import { Link } from '@inertiajs/inertia-react';
import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Profile from "@/Components/Page/Profile";

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
                    <Profile
                        users={users}
                        auth={auth}
                    />

                </Authenticated>
            ) : (


                <Guest>
                    <Profile users={users} />

                </Guest>
            )}
        </div>


    );
}
export default Index;