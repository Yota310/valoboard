<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;
use App\Models\Rank;
use App\Models\Role;
use App\Models\Stance;
use App\Models\Time;

class MypageController extends Controller
{
   
    public function index(User $user)
    {
        $auth_user = User::with(['rank', 'role', 'stance', 'time'])->find($user->id);
        //$rank=User::find($user->id)->rank;
        return Inertia::render("Mypage/Index", ["auth_user" => $auth_user]);
    }

    public function edit(User $user,Rank $rank,Role $role,Stance $stance,Time $time){
        $auth_user = User::with(['rank', 'role', 'stance', 'time'])->find($user->id);
        return Inertia::render("Mypage/Edit",["auth_user" => $auth_user,"ranks"=>$rank->get(),"roles"=>$role->get(),"stances"=>$stance->get()]);
    }

    public function update(Request $request){
        dd($request);
    }

}
