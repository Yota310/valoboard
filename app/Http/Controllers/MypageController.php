<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;
use App\Models\Rank;
use App\Models\Role;
use App\Models\Stance;
use App\Models\Time;
use Illuminate\Support\Facades\Storage;

class MypageController extends Controller
{
   
    public function index(User $user)
    {
        $mypage_user = User::with(['rank', 'role', 'stance', 'time'])->find($user->id);
        //$rank=User::find($user->id)->rank;
        return Inertia::render("Mypage/Index", ["mypage_user" => $mypage_user]);
    }

    public function evaluation(User $user)
    {
        $mypage_user = User::with(['rank', 'role', 'stance', 'time'])->find($user->id);
        //$rank=User::find($user->id)->rank;
        return Inertia::render("Mypage/Evaluation", ["mypage_user" => $mypage_user]);
    }

    public function edit(User $user,Rank $rank,Role $role,Stance $stance,Time $time){
        $mypage_user = User::with(['rank', 'role', 'stance', 'time'])->find($user->id);
        return Inertia::render("Mypage/Edit",["mypage_user" => $mypage_user,"ranks"=>$rank->get(),"roles"=>$role->get(),"stances"=>$stance->get()]);
    }

    public function update(Request $request ,User $user,Rank $rank){
        $form = $request->all(); //リクエストの全ての情報を$formに入れる

        $rank_name = $request->input('rank'); //リクエストからランク名だけ取り出す
        $rank_number = $request->input('number'); //番号だけ取り出す
        $image = $request->file('image');
        $user->fill($form); //保存したい情報か確認
        //dd($image);

        $new_rank = $rank->where('name',$rank_name)->where('number',$rank_number)->first(['id']); //ランク名と番号から絞り込む
        $user->rank_id = $new_rank->id; //ユーザーのrank_idを変更


        if(isset($image)){
            $path = Storage::disk('s3')->put('icon/', $image, 'public');
            $user->image_path = Storage::disk('s3')->url($path); // アップロードした画像のフルパスを取得
             }

        $user->save();
        
        return redirect("/mypage/".$user->id);
    }

}
