<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Moral;
use App\Models\User;


class MoralController extends Controller
{
    public function store(Request $request,Moral $moral, User $user){
        $input=$request->all();
        $moral->fill($input)->save();
        redirect("/mypage/".$user->id);

    }
}
