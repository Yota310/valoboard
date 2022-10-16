import React from "react";
import { Inertia } from "@inertiajs/inertia";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Link } from '@inertiajs/inertia-react'

const Show = (props) => {
    const { post } = props;

    return (
        <div>
            <Authenticated auth={props.auth} header={
                <h2 className="front-semibold text-xl text-gray-800 leading-tight">
                    Show
    </h2>
            }>

                <div className="py-2 px-12">
                    <h1>{post.title}</h1>
                    <div>
                        <h3>本文neko</h3>
                        <p>{post.body}</p>
                    </div>

<div>
    <p>{post.category.name}</p>
</div>

                    <div>
                        <Link href="/">back</Link>
                    </div>
                </div>

                <div className="px-12">
                    [<Link href={"/posts/" + post.id + "/edit"}>edit</Link>]
</div>

            </Authenticated>
        </div>
    );
}

export default Show;