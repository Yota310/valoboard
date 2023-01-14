import React from 'react';
import { Link } from '@inertiajs/inertia-react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';


class Profile extends React.Component {
    render() {
        return (
            <div>
                <div className="p-3">
                    <h1 className="text-xl text-white bg-black pl-5 py-1 font-black">新着の評価</h1>

                    {/* {console.log("user",this.props.users)}
                            {console.log("auth",this.props.auth)} */}

                    {this.props.users.map((user) => (
                        <Link href={`/mypage/${user.id}`} className="no-underline " >
                            <div key={user.id} className="mb-8 ">
                                <div className="flex rounded-2xl shadow-lg mt-3 border-black hover:shadow-gray-500 border-4 hover:border-red-500">
                                    <div className="py-3 pl-3  bg-white border-2 border-black text-center pt-5 font-black text-3xl rounded-l-xl w-1/3">

                                        <div className="flex no-underline">

                                            {user.image_path !== null ? (
                                                <div className="w-1/7">
                                                    <img
                                                        className="h-12 w-12 my-0 ml-0 rounded-full aspect-square object-cover border-2 border-gray-300"
                                                        src={user.image_path}
                                                    />
                                                </div>
                                            ) : (
                                                <div className="w-1/7">
                                                    <img
                                                        className="h-12 w-12 my-0 ml-0 rounded-full aspect-square object-cover border-2 border-gray-300"
                                                        src="https://valoboard.s3.ap-northeast-1.amazonaws.com/dummy/dami-.png"
                                                    />
                                                </div>
                                            )}





                                            <div className="text-gray-600 ml-2">
                                                {user.name}
                                            </div></div>

                                    </div> {/*  flex */}


                                    <div className="bg-white text-gray-600 border-2 border-r-0 border-black  text-center pt-5 font-black text-3xl p-3 w-1/6">{user.rank.name}{user.rank.number}</div>
                                    <div className="bg-white text-gray-600 border-2 border-r-0 border-black p-3 w-1/4 text-center pt-5 font-black text-3xl">{user.role.name}</div>
                                    <div className="bg-white text-gray-600 border-2 border-r-0 border-black p-3 w-1/6 text-center pt-5 font-black text-3xl">
                                        {user.stance.id == 1 ? (<p>{user.stance.name}</p>) : (user.stance.id == 2 ? (<p>{user.stance.name}</p>) : (<p>{user.stance.name}</p>))
                                        }
                                    </div>

                                    <div className="bg-white border-2 text-gray-600 border-black rounded-r-xl p-3 w-1/7 text-center pt-5 font-black text-3xl">




                                        <Box
                                            sx={{
                                                '& > legend': { mt: 2 },
                                            }}
                                        >

                                            {/* <Typography component="legend">Read only</Typography> */}
                                            <Rating size="large" name="read-only" value={user.moral} readOnly />



                                        </Box>
                                    </div>
                                </div>




                            </div>
                        </Link>
                    ))

                    }
                </div>
            </div>
        );

    }

}
export default Profile;