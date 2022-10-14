import React from "react";
import { Inertia } from "@inertiajs/inertia";
import { Link, useForm } from '@inertiajs/inertia-react';
import Authenticated from "@/Layouts/AuthenticatedLayout";

const Create = (props) => {
    const { data, setData, post } = useForm({
        title: "",
        boy: ""
    })

    const handleSendPosts = (e) => {
        e.preventDefault();
        post("/posts");
    }
    console.log(data);

    return (

        <Authenticated auth={props.auth} header={
            <h2 className="font-senibold text-xl text-gray-800 leading-tight">
                Create
        </h2>
        }>
            <div className="p-12">
                <form onSubmit={handleSendPosts}>
                    <div>
                        <h2>title</h2>
                        <input type="text" placeholder="タイトル" onChange={(e) => setData("title", e.target.value)} />
                        <span className="text-red-600">{props.errors.title}</span>
                    </div>
                    <div>
                        <h2>Body</h2>
                        <textarea placeholder="ここに書け" onChange={(e) => setData("body", e.target.value)}></textarea>
                        <span className="text-red-600">{props.errors.body}</span>
                    </div>
                    <button type="submit" className="p-1 bg-purple-300 hover:bg-purple-400 rounded-md">send</button>
                </form>
                <Link href="/">back</Link>
            </div>
        </Authenticated>

    );

}
export default Create;
