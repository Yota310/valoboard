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

    public function Show(Request $request, User $user,Rank $rank)
    {
    //dd($request);
        $word = $request->input('word');
        $rank_name = $request->input('rank');
        $number = $request->input('number');
        $role = $request->input('role');
        $stance = $request->input('stance');
        $time = $request->input('time');
        //return Inertia::render("Search/Show", ["users" => $user->searchUser($word)]);

        //$rank_id= $rank->where('name', 'like' , $rank_name)->where('number','like',$number)->first(['id']);
//名前、ランク名、ランク番号、ロール、プレイスタイル、時間
if(isset($word)&&isset($rank_name)&&isset($role)&&isset($stance)&&isset($time)&&isset($number)){
    $rank_id= $rank->where('name','like',$rank_name)->where('number','like',$number)->first(['id']);
    $users = User::with(['rank', 'role', 'stance', 'time'])->where('name', 'LIKE', '%' . $word . '%')->where('rank_id',$rank_id)->where('role_id',$role)->where('stance_id',$stance)->where('time_id',$time)->get();
    return Inertia::render("Search/Show", ["users" => $users]);
}
//名前、ランク名、ロール、プレイスタイル、時間
if(isset($word)&&isset($rank_name)&&isset($role)&&isset($stance)&&isset($time)){
    $rank_id= $rank->where('name',$rank_name)->get(['id']);
    //ここで番号の有無をはんだん
    $users = User::with(['rank', 'role', 'stance', 'time'])->where('name', 'LIKE', '%' . $word . '%')->where('rank_id',$rank_id[0])->orWhere('rank_id',$rank_id[1])->orWhere('rank_id',$rank_id[3])->where('role_id',$role)->where('stance_id',$stance)->where('time_id',$time)->get();
    //$rank_idのデータが一つだけの時
    return Inertia::render("Search/Show", ["users" => $users]);
}
//ランク名、ランク番号、ロール、プレイスタイル、時間
if(isset($rank_name)&&isset($role)&&isset($stance)&&isset($time)&&isset($number)){

    $rank_id= $rank->where('name','like',$rank_name)->where('number','like',$number)->first(['id']);
    $users = User::with(['rank', 'role', 'stance', 'time'])->where('name', 'LIKE', '%' . $word . '%')->where('rank_id',$rank_id)->where('role_id',$role)->where('stance_id',$stance)->where('time_id',$time)->get();
    return Inertia::render("Search/Show", ["users" => $users]);
}     

//名前、ランク名、ロール、プレイスタイル
if(isset($word)&&isset($rank_name)&&isset($role)&&isset($stance)){
    $users = User::with(['rank', 'role', 'stance', 'time'])->where('name', 'LIKE', '%' . $word . '%')->where('rank_id',$rank_name)->where('role_id',$role)->where('stance_id',$stance)->get();
    return Inertia::render("Search/Show", ["users" => $users]);
}

//ランク名、ロール、プレイスタイル○猫はうごく
if(isset($rank_name)&&isset($role)&&isset($stance)){
    $ne= $rank->where('name',$rank_name)->get();
    //dd($rank_id);

    //$s[0]=(int) $s_id[0];
    //$f[0]=(int) $s_id[2];
    //dd(gettype($s[0]));


    
    //ここで番号の有無をはんだん
    $neko = User::with(['rank', 'role', 'stance', 'time'])->where('role_id',$role)->where('stance_id',$stance)->where('rank_id','>=',$ne[0]->id)->where('rank_id','<=',$ne[2]->id)->get();
//dd($neko);
$count=count($neko);

    //$rank_idのデータが一つだけの時
    return Inertia::render("Search/Show", ["users" => $neko]);

   
}
//名前○
if(isset($word)){
    $users = User::with(['rank', 'role', 'stance', 'time'])->where('name', 'LIKE', '%' . $word . '%')->get();
    return Inertia::render("Search/Show", ["users" => $users]);
}       

    }

    
}
