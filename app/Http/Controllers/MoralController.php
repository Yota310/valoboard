<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Moral;
use App\Models\User;


class MoralController extends Controller
{
    public function store(Request $request,Moral $moral, User $user){
        $user_id = $request->get("user_id"); //リクエストのuser_id(評価をつけた人)の受け取り
        $status = $moral->where('user_id',$user_id)->exists(); //すでに評価されているかチェック
        if($status){ //すでに評価されていたら更新
            $moral->where('user_id', '=', $user_id)
            ->update([
                'star' => $request->star
            ]);
           return redirect("/mypage/".$user->id);
        }
        else{ //評価されていなかったら新たに追加
        $input=$request->all();
        $moral->fill($input)->save();
       return redirect("/mypage/".$user->id);
        }
    }
}
