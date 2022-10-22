<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;
use App\Models\Rank;
use App\Models\Role;
use App\Models\Stance;
use App\Models\Time;


class SearchController extends Controller
{

    public function Index( Rank $rank, Role $role, Stance $stance, Time $time)
    {
        return Inertia::render("Search/Index",["ranks"=>$rank->get(), "roles"=>$role->get(),"stances"=>$stance->get(),"times"=>$time->get()]);
    }

    public function Show(Request $request, User $user)
    {
    //dd($request);
        $word = $request->input('word');
        $rank = $request->input('rank');
        $role = $request->input('role');
        $stance = $request->input('stance');
        $time = $request->input('time');
        //return Inertia::render("Search/Show", ["users" => $user->searchUser($word)]);

if(isset($word)&&isset($rank)&&isset($role)&&isset($stance)&&isset($time)){
    $users = User::with(['rank', 'role', 'stance', 'time'])->where('name', 'LIKE', '%' . $word . '%')->where('rank_id',$rank)->where('role_id',$role)->where('stance_id',$stance)->where('time_id',$time)->get();
    return Inertia::render("Search/Show", ["users" => $users]);
}
if(isset($rank)&&isset($role)&&isset($stance)&&isset($time)){

    $users = User::with(['rank', 'role', 'stance', 'time'])->where('rank_id',$rank)->where('role_id',$role)->where('stance_id',$stance)->where('time_id',$time)->get();
    return Inertia::render("Search/Show", ["users" => $users]);
}     


if(isset($word)&&isset($rank)&&isset($role)&&isset($stance)){
    $users = User::with(['rank', 'role', 'stance', 'time'])->where('name', 'LIKE', '%' . $word . '%')->where('rank_id',$rank)->where('role_id',$role)->where('stance_id',$stance)->get();
    return Inertia::render("Search/Show", ["users" => $users]);
}

if(isset($rank)&&isset($role)&&isset($stance)){
    $users = User::with(['rank', 'role', 'stance', 'time'])->where('rank_id',$rank)->where('role_id',$role)->where('stance_id',$stance)->get();
    return Inertia::render("Search/Show", ["users" => $users]);
}
if(isset($word)){
    $users = User::with(['rank', 'role', 'stance', 'time'])->where('name', 'LIKE', '%' . $word . '%')->get();
    return Inertia::render("Search/Show", ["users" => $users]);
}       

    }

    
}
