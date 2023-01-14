import React, { useState } from 'react';
import Rating from '@mui/material/Rating';
import { Link, useForm } from '@inertiajs/inertia-react';



// console.log("nekoko", this.props.auth.user.id);
const Star = (props) => {
    const { mypage_user, auth, moral } = props;
    const { data, setData, post } = useForm({
        star: null,
        user_id: auth.user.id,
        evaluated_user_id: mypage_user.id
    })

    const handleSendStar = (e) => {

        e.preventDefault();
        post(`/store/${mypage_user.id}`);
    }


    return (
        <div id="overlay">
            <div className="bg-white p-10 px-0 pt-0 text-center">
                <div className="bg-black text-white mb-12 p-2 px-40">民度を評価</div>
                <form onSubmit={handleSendStar} >
                    <Rating size="large"
                        name="simple-controlled"
                        onChange={(e) => {
                            setData("star", e.target.value);
                        }}
                    />
                    <br />
                    <button href={`/mypage/${data.evaluated_user_id}`} type="submit" className="p-2 rounded-xl hover:text-red-500 bg-black text-white">送信</button>
                </form>
            </div>
        </div>
    );


}



export default Star;