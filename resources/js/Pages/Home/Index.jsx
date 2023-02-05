import Authenticated from "@/Layouts/AuthenticatedLayout";
import Guest from "@/Layouts/GuestLayout";
import * as React from 'react';
import Profile from "@/Components/Page/Profile";



const Index = (props) => {

    const { users, auth } = props;

    return (
        <div className="font-body1">
            {auth.user != null ? (


                <Authenticated auth={auth}>
                    <Profile
                        title={"新着の評価"}
                        users={users}
                        auth={auth}
                    />

                </Authenticated>
            ) : (


                <Guest>
                    <Profile users={users} />

                </Guest>
            )}
        </div>


    );
}
export default Index;