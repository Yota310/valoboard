import React from "react";
import { Inertia } from "@inertiajs/inertia";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import {Link} from '@inertiajs/inertia-react';

const Index = (props) => {
    const { posts } = props;
    console.log(props);

    return (
        <Authenticated auth={props.auth} header={
            <h2 className="font-semibold text-xl text-gray-800 leading-tight" >
                Index
            </h2>

        }>
            <div className="p-12">
                <div className="bg-blue-300">
                <h1>Blog Name</h1>

                <Link href="/posts/create">新規投稿</Link>
                
                { posts.map((post)=>(
                    <div key={post.id}>
                        <h2>
                        <Link href={`/posts/${post.id}`}>{ post.title }</Link>
                            </h2>
                        <p>{post.body}</p>
                        </div>
                ))

                }
                  </div>  
            </div>
        </Authenticated>
    );
}
export default Index;