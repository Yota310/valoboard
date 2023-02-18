import AdminAuthenticated from "@/Layouts/AdminAuthenticatedLayout";
import * as React from 'react';
import Profile from "@/Components/Page/Profile";
import { Link, useForm } from '@inertiajs/inertia-react';



const Index = (props) => {

    const { users, auth } = props;

    return (
        <div className="font-body1">


            <AdminAuthenticated auth={auth}>
                <div className="m-20">
                <Link className="m-3 no-underline bg-black p-4 pt-6 rounded-xl text-white text-xl hover:text-red-500 font-black">不適切なユーザーの削除</Link>
                <Link className="m-3 no-underline bg-black p-4 pt-6 rounded-xl text-white text-xl hover:text-red-500 font-black">不適切なプロフィールの修正</Link>
                <Link className="m-3 no-underline bg-black p-4 pt-6 rounded-xl text-white text-xl hover:text-red-500 font-black">お知らせの送信</Link>
</div>
            </AdminAuthenticated>

        </div>


    );
}
export default Index;