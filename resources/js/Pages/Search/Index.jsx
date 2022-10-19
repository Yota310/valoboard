import React from "react";
import { Inertia } from "@inertiajs/inertia";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import Guest from "@/Layouts/GuestLayout";
import { Link } from '@inertiajs/inertia-react';

const Sreach = (props) => {

    const { auth } = props;

    console.log("neko", props);





    return (
        <div>
            { auth != null ? (
                <Authenticated auth={auth}>
                </Authenticated>
            ) : (
                <Guest>
                </Guest>
            )
}
        </div>
    )

}
export default Sreach;