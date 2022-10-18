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
        <GuestLayout>
            <Head title="Log in" />

            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

            <form className="text-center mt-10" onSubmit={submit}>
                <div>
                    <InputLabel forInput="email" value="メールアドレス" />

                    <TextInput
                        type="text"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-2/5 mx-auto"
                        autoComplete="username"
                        isFocused={true}
                        handleChange={onHandleChange}

                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel forInput="password" value="パスワード" />

                    <TextInput
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-2/5 mx-auto"
                        autoComplete="current-password"
                        handleChange={onHandleChange}
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="block mt-4">
                    <label>
                        <Checkbox name="remember" value={data.remember} handleChange={onHandleChange} />

                        <span className="ml-2 text-sm text-gray-600">ログイン情報を記憶しますか？</span>
                    </label>
                </div>

                <div className="flex justify-center">
                    <div className="flex items-center mt-4">
                       

                        <PrimaryButton className="ml-4 text-xl hover:text-red-500" processing={processing}>
                            ログイン
                    </PrimaryButton>

                    

                    </div>
                </div>

                <div className="mt-10">

                {canResetPassword && (
                            
                            
                            <Link
                                href={route('password.request')}
                                className="underline text-sm text-gray-600 hover:text-red-500"
                            >
                                パスワードをお忘れですか？？
                            </Link>
                        )}
</div>
            </form>
        </GuestLayout>
    );
}
