import React from "react";
import { Inertia } from "@inertiajs/inertia";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Link } from '@inertiajs/inertia-react';

const Index = (props) => {
    const { posts } = props;
    console.log(props);


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

                    <Link href="/posts/create">新規投稿</Link>


                    
                </div>
            </div>
        </Authenticated>
    );
}
export default Index;