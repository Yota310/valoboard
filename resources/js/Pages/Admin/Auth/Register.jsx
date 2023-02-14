import React, { useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/inertia-react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        moral: 3,
        rank_id: 1,
        role_id: 1,
        stance_id: 1,
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('admin.register'));
    };

    return (
        <div className="font-body1">
            <GuestLayout>
                <Head title="Register" />

                <form onSubmit={submit} className="mb-5">
                    <div className="mt-5">
                        <InputLabel forInput="name" value="ゲームのIDで登録してください（例：エイムゴリラ#0000)" className="p-2 w-1/4 rounded-xl ml-auto mr-auto mb-4 font-black text-sm text-white leading-normal　mt-5 bg-black" />

                        <TextInput
                            type="text"
                            name="name"
                            value={data.name}
                            className="mt-0 block w-2/5 mx-auto bg-white border-4 text-gray-600 border-black rounded-xl p-2 text-center pt-5 font-black text-lg"
                            autoComplete="name"
                            isFocused={true}
                            handleChange={onHandleChange}
                            required
                        />

                        <InputError message={errors.name} />
                    </div>

                    <div className="mt-4">
                        <InputLabel forInput="email" value="Eメール" className=" p-2 text-center w-1/4 rounded-xl ml-auto mr-auto mb-4 font-black text-lg text-white leading-normal　mt-5 bg-black" />

                        <TextInput
                            type="email"
                            name="email"
                            value={data.email}
                            className="mt-0 block w-2/5 mx-auto bg-white border-4 text-gray-600 border-black rounded-xl p-2 text-center pt-5 font-black text-lg"
                            autoComplete="username"
                            handleChange={onHandleChange}
                            required
                        />

                        <InputError message={errors.email} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <InputLabel forInput="password" value="パスワード" className="p-2 w-1/4 text-center rounded-xl ml-auto mr-auto mb-4 font-black text-lg text-white leading-normal　mt-5 bg-black" />

                        <TextInput
                            type="password"
                            name="password"
                            value={data.password}
                            className="mt-0 block w-2/5 mx-auto bg-white border-4 text-gray-600 border-black rounded-xl p-2 text-center pt-5 font-black text-lg"
                            autoComplete="new-password"
                            handleChange={onHandleChange}
                            required
                        />

                        <InputError message={errors.password} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <InputLabel forInput="password_confirmation" value="パスワードの確認" className="p-2 w-1/4 text-center rounded-xl ml-auto mr-auto mb-4 font-black text-lg text-white leading-normal　mt-5 bg-black" />

                        <TextInput
                            type="password"
                            name="password_confirmation"
                            value={data.password_confirmation}
                            className="mt-0 block w-2/5 mx-auto bg-white border-4 text-gray-600 border-black rounded-xl p-2 text-center pt-5 font-black text-lg"
                            handleChange={onHandleChange}
                            required
                        />

                        <InputError message={errors.password_confirmation} className="mt-2" />
                    </div>



                    <div className="flex justify-center">
                        <div className="flex items-center">
                            <PrimaryButton className="ml-4 mt-5 text-xl hover:text-red-500" processing={processing}>
                                登録
                    </PrimaryButton>
                        </div>
                    </div>
                    <div className="text-center mt-5">
                        <Link href={route('admin.login')} className="underline text-sm text-gray-600 hover:text-red-500">
                            すでに登録している方はこちらから
                    </Link>
                    </div>


                    <div className="mt-4">

                        <TextInput //モラルの初期値の設定
                            type="hidden"
                            name="moral"
                            value={data.moral}
                            handleChange={onHandleChange}
                            required
                        />

                    </div>

                    <div className="mt-4">

                        <TextInput //ランクの初期値の設定
                            type="hidden"
                            name="rank"
                            value={data.rank_id}
                            handleChange={onHandleChange}
                            required
                        />

                    </div>

                    <div className="mt-4">

                        <TextInput //ロールの初期値の設定
                            type="hidden"
                            name="role"
                            value={data.role_id}
                            handleChange={onHandleChange}
                            required
                        />

                    </div>

                    <div className="mt-4">

                        <TextInput //スタンスの初期値の設定
                            type="hidden"
                            name="stance"
                            value={data.satance_id}
                            handleChange={onHandleChange}
                            required
                        />

                    </div>

                </form>
            </GuestLayout>
        </div>
    );
}
