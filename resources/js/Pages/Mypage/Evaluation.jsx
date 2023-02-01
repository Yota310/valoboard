import React from "react";
import { Inertia } from "@inertiajs/inertia";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import Guest from "@/Layouts/GuestLayout";
import { Link, useForm } from '@inertiajs/inertia-react';
import Rating from '@mui/material/Rating';
import Star from '@/Components/Mypage/Star';

const Evaluation = (props) => {
    const { mypage_user, auth, moral } = props;
    const { data, setData, post } = useForm({
        star: null,
        user_id: auth.user.id,
        evaluated_user_id: mypage_user.id
    })

    return (
        <div className="font-body1">
            <Authenticated auth={auth}>

                <Star
                    props={props}
                    auth={auth}
                    mypage_user={mypage_user}
                />
            </Authenticated>
        </div>
    );
}

export default Evaluation;