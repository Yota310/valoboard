import React from "react";
import { Inertia } from "@inertiajs/inertia";
import { Link, useForm } from '@inertiajs/inertia-react';
import Authenticated from "@/Layouts/AuthenticatedLayout";



const Edit = (props) => {
    const { posts } = props;
    const { data, setData, put } = useForm({
        title: posts.title,
        body: posts.body
    })

    const handleSendPosts = (e) => {
        e.preventDefault();
        put(`/posts/${posts.id}`);
    }
    return (
        <Authenticated auth={props.auth} header={
            <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                Create
</h2>
        }>

            <div className="p-12">

                <form onSubmit={handleSendPosts}>
                    <div>
                        <h2>Title</h2>
                        <input type="text" placeholder="タイトル" value={data.title} onChange={(e) => setData("title", e.target.value)} />
                        <span className="text-red-600">{props.errors.title}</span>

                    </div>
                    <div>
                        <h2>Body</h2>
                        <textarea placeholder="ここだ、ここに書くのだあほう" value={data.body} onChange={(e) => setData("body", e.target.value)}></textarea>
                        <sapn className="text-red-500">{props.errors.boy}</sapn>
                    </div>
                    <button type="submit" className="p-1 bg-purple-500 hover:bg-purple-400 rounded-md">send</button>


                </form>

                <Link href="/">back</Link>

            </div>
        </Authenticated>
    );

}

export default Edit;