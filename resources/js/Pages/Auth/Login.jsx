import React, { useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/inertia-react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: '',
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <div className="font-body1">
            <GuestLayout>
                <Head title="Log in" />

                {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

                <form className="text-center mt-10 mb-5" onSubmit={submit}>
                    <div>
                        <InputLabel forInput="email" value="メールアドレス" className="mb-4 p-2 font-black text-xl rounded-2xl text-white leading-normal　mt-5 bg-black w-1/4 ml-auto mr-auto"/>

                        <TextInput
                            type="text"
                            name="email"
                            value={data.email}
                            className="mt-0 block w-2/5 mx-auto bg-white border-4 text-gray-600 border-black rounded-xl p-3 text-center pt-5 font-black text-3xl"
                            autoComplete="username"
                            isFocused={true}
                            handleChange={onHandleChange}

                        />

                        <InputError message={errors.email} className="mt-2" />
                    </div>

                    <div className="mt-10">
                        <InputLabel forInput="password" value="パスワード" className="mb-4 p-2 font-black text-xl rounded-2xl text-white leading-normal　mt-5 bg-black w-1/4 ml-auto mr-auto"/>

                        <TextInput
                            type="password"
                            name="password"
                            value={data.password}
                            className="mt-0 block w-2/5 mx-auto bg-white border-4 text-gray-600 border-black rounded-xl p-3 text-center pt-5 font-black text-3xl"
                            autoComplete="current-password"
                            handleChange={onHandleChange}
                        />

                        <InputError message={errors.password} className="mt-2" />
                    </div>

                    <div className="block mt-4">
                        <label>
                            <Checkbox name="remember" value={data.remember} handleChange="{onHandleChange}"/>

                            <span className="ml-2 text-sm text-gray-600">ログイン情報を記憶しますか？</span>
                        </label>
                    </div>

                    <div className="flex justify-center">
                        <div className="flex items-center mt-4">


                            <PrimaryButton href="/mypage" className="ml-4 text-xl hover:text-red-500" processing={processing}>
                                ログイン
                    </PrimaryButton>



                        </div>
                    </div>

                    <div className="mt-10 mb-3">

                        {canResetPassword && (


                            <Link
                                href={route('password.request')}
                                className="underline text-sm text-gray-600 hover:text-red-50"
                            >
                                パスワードをお忘れですか？？
                            </Link>

                            
                        )}
                        
                    </div>
                    <Link
                                href={route('register')}
                                className="underline text-sm text-gray-600 hover:text-red-500"
                            >
                                新規登録はこちら！
                            </Link>
                </form>
            </GuestLayout>
        </div>
    );
}
