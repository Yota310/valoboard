import React from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, useForm } from '@inertiajs/inertia-react';

export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
    });

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('password.email'));
    };

    return (
        <GuestLayout>
            <Head title="Forgot Password" />
<div className="mt-3 ml-3 mr-3 font-body1">
            <div className="mb-4 p-1 font-black text-sm text-white leading-normal　mt-5 bg-black">
                パスワードをお忘れですか？心配ありません！ここにEメールを入力して下されば新しいパスワードに変更できます！
            </div>

            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

            <form onSubmit={submit}>
                <TextInput
                    type="text"
                    name="email"
                    value={data.email}
                    className="mt-1 block w-full border-black border-4 font-black text-gray-600"
                    isFocused={true}
                    handleChange={onHandleChange}
                />

                <InputError message={errors.email} className="mt-2" />

                <div className="flex items-center justify-end mt-4">
                    <PrimaryButton className="ml-4 hover:text-red-500" processing={processing}>
                        送信
                    </PrimaryButton>
                </div>
            </form>
            </div>
        </GuestLayout>
    );
}
