import React from 'react'

const myprofile = (props) => {
    return (
        <div>
            <div>
                <h1 className="m-3 text-xl bg-black text-white pl-5 py-1 font-black">マイページ</h1>
                <div className="p-7">


                    <div className="mb-8 flex">
                        <div className="w-1/4 border-black text-left font-black text-3xl ml-5 bg-white border-2 rounded-2xl">
                            <p className="bg-black text-white p-3 rounded-t-xl">{mypage_user.name}</p>
                            <div className="h-48 w-48 my-0 mt-5 mx-10">
                                {mypage_user.image_path !== null ? (
                                    <div>
                                        <img
                                            className="h-48 w-48 my-0 mx-auto rounded-full aspect-square object-cover border-2 border-gray-300"
                                            src={mypage_user.image_path}
                                        />
                                    </div>
                                ) : (
                                    <div>
                                        <img
                                            className="rounded-full border-2 aspect-square h-48 w-48"
                                            src="https://valoboard.s3.ap-northeast-1.amazonaws.com/dummy/dami-.png"
                                        />
                                    </div>
                                )}
                            </div>
                            <div className="text-center mt-3">
                                <p>関連SNS</p>
                                <p><a className="w-1/2 text-black hover:text-red-500" target="_blank" href={mypage_user.sns_url}>{mypage_user.sns_name}</a></p>
                            </div>
                        </div>

                        <div className=" rounded-xl border-black border-2 mr-5 ml-5 bg-white pr-1 pb-5  w-3/4">
                            <div className="flex">

                                {/*プロフィール写真がある場合はそれを表示、無い場合はダミーアイコンを表示*/}


                                <div className="pl-10 pr-5 text-text-black">
                                    <p className=" py-6 mt-1"></p>
                                    <p className="text-gray-600 text-left font-black text-3xl mt-5">ランク</p>
                                    <p className="text-gray-600 text-left font-black text-3xl mt-5">ロール</p>
                                    <p className="text-gray-600 text-left font-black text-3xl mt-5">プレイスタイル</p>

                                    <p className="text-gray-600 text-left font-black text-3xl mt-5">民度</p>
                                    <p className="text-gray-600 text-left font-black text-3xl mt-5">コメント</p>
                                    <div className=" py-6 mt-1"></div>
                                </div>

                                <div className="text-gray-600 pt-1 w-2/3">
                                    <p className="border-black text-left font-black text-5xl rounded-l-xl">　</p>
                                    <p className="text-left font-medium text-3xl mt-5">{mypage_user.rank.name}</p>
                                    <p className="text-left font-medium text-3xl mt-5">{mypage_user.role.name}</p>
                                    <p className="text-left font-medium text-3xl mt-5">{mypage_user.stance.name}</p>

                                    <p className="font-black text-4xl mt-5">

                                        <Rating size="large" name="read-only" value={mypage_user.moral} readOnly />


                                    </p>
                                    <p className="text-left font-medium text-2xl mt-5">{mypage_user.profile}</p>

                                </div>


                            </div>




                        </div>



                    </div>
                    <div className="ml-96 pl-96">
                        <Link className="ml-20 bg-black p-4 pt-4 rounded-xl no-underline text-white text-xl hover:text-red-500 font-black" href={`/mypage/${mypage_user.id}/edit`}>
                            編集
                                    </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default myprofile
