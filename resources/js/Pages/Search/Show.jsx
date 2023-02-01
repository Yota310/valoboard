import React from "react";
import { Inertia } from "@inertiajs/inertia";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import Guest from "@/Layouts/GuestLayout";
import Profile from "@/Components/Page/Profile";
const Show = (props) => {

    const { auth, users } = props;

    console.log("neko", props);




    return (
        <div className="font-body1">
            { auth.user != null ? (
                <Authenticated auth={auth}>
                    <Profile
                    title={"検索結果"}
                    users={users}
                    auth={auth}
                    />
                </Authenticated>
            ) : (
                <Guest>
                    <Profile
                    title={"検索結果"}
                    users={users}
                    />
                </Guest>
            )
            }
        </div>
    );

};
export default Show;