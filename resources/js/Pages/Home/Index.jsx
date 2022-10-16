import React from "react";
import { Inertia } from "@inertiajs/inertia";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Link } from '@inertiajs/inertia-react';


const Index = (props) => {
    const { users } = props;
    console.log("neko", users);


    const handleDeletePost = (id) => {
        Inertia.delete(`/posts/${id}`, {
            onBefore: () => confirm("消し去る覚悟はできてるか？"),
        })
    }





    return (
        <Authenticated auth={props.auth} header={
            <h2 className="font-semibold text-xl text-gray-800 leading-tight" >
                Index
            </h2>

        }>
            <div className="p-12">
                <div className="bg-gray-300">
                    <h1>トップページ</h1>

                    {users.map((user) => (
                        <div key={user.id} className="mb-8 flex">
                            <h2>
                                <p><Link href="">{user.name}</Link></p>
                                <div className="bg-blue-300">{user.rank_id}</div>
                                <div className="bg-yellow-300">{user.role_id}</div>
                                <div className="bg-red-300">{user.stance_id}</div>
                                <div className="bg-gray-600">{user.time_id}</div>
                                <div className="bg-purple-300">{user.moral}</div>
                            </h2>
                        

                            

                        </div>
                    ))

                    }
                </div>
            </div>
        </Authenticated>
    );
}
export default Index;