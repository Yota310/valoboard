import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/inertia-react';
import AdminAuthenticated from "@/Layouts/AdminAuthenticatedLayout";

export default function Dashboard(props) {
    return (
        <div className="font-body1">
            <AdminAuthenticated
                auth={props.auth}
                errors={props.errors}
                header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
            >
                <Head title="Dashboard" />
                <h1 className="text-xl text-white bg-black ml-3 mt-3 pl-5 mr-3 py-1 font-black">ログイン・新規登録</h1>
                <div className="py-12">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="overflow-hidden sm:rounded-lg">
                            <div className="p-3  border-4 text-gray-600 bg-white border-black text-center pt-5 font-black text-3xl rounded-xl w-1/4">ログイン完了！</div>
                        </div>
                    </div>
                </div>
            </AdminAuthenticated>
        </div>
    );
}
