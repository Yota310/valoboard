<?php

namespace App\Http\Controllers;

use App\Http\Requests\SearchRequest;
use Inertia\Inertia;
use App\Models\{User,Rank,Role,Stance,Time};
use Illuminate\Http\Request;

class SearchController extends Controller
{

    public function index(Rank $rank, Role $role, Stance $stance, Time $time)
    {
        return Inertia::render("Search/Index", ["ranks" => $rank->get(), "roles" => $role->get(), "stances" => $stance->get(), "times" => $time->get()]);
    }

    public function show(SearchRequest $request, User $user, Rank $rank)
    {
        
        $word = $request->input('word');
        $rank_name = $request->input('rank');
        $number = $request->input('number');
        $role = $request->input('role');
        $stance = $request->input('stance');
        $time = $request->input('time');
        
        //名前、ランク名、ランク番号、ロール、プレイスタイル
        if (isset($word) && isset($rank_name) && isset($role) && isset($stance) && isset($number)) {
            $rank_id = $rank->where('name', 'like', $rank_name)->where('number', 'like', $number)->first();
            $users = User::with(['rank', 'role', 'stance', 'time'])->where('name', 'LIKE', '%' . $word . '%')->where('rank_id', $rank_id->id)->where('role_id', $role)->where('stance_id', $stance)->get();
            return Inertia::render("Search/Show", ["users" => $users]);
        }

        //名前、ランク名、ロール、プレイスタイル
        if (isset($word) && isset($rank_name) && isset($role) && isset($stance)) {
            $rank_id = $rank->where('name', $rank_name)->get();
            //ここで番号の有無をはんだん
            $users = User::with(['rank', 'role', 'stance', 'time'])->where('name', 'LIKE', '%' . $word . '%')->where('rank_id', '>=', $rank_id[0]->id)->where('rank_id', '<=', $rank_id[2]->id)->where('role_id', $role)->where('stance_id', $stance)->get();
            //$rank_idのデータが一つだけの時
            return Inertia::render("Search/Show", ["users" => $users]);
        }

        //ランク名、ランク番号、ロール、プレイスタイル
        if (isset($rank_name) && isset($role) && isset($stance) && isset($number)) {
            $rank_id = $rank->where('name', 'like', $rank_name)->where('number', 'like', $number)->first();
            $users = User::with(['rank', 'role', 'stance', 'time'])->where('name', 'LIKE', '%' . $word . '%')->where('rank_id', $rank_id->id)->where('role_id', $role)->where('stance_id', $stance)->get();
            return Inertia::render("Search/Show", ["users" => $users]);
        }

        //名前、ランク名、ロール、プレイスタイル
        if (isset($word) && isset($rank_name) && isset($role) && isset($stance)) {
            $ne = $rank->where('name', $rank_name)->get();
            $users = User::with(['rank', 'role', 'stance', 'time'])->where('name', 'LIKE', '%' . $word . '%')->where('rank_id', '>=', $ne[0]->id)->where('rank_id', '<=', $ne[2]->id)->where('role_id', $role)->where('stance_id', $stance)->get();
            return Inertia::render("Search/Show", ["users" => $users]);
        }

        //ランク名、ロール、プレイスタイル
        if (isset($rank_name) && isset($role) && isset($stance)) {
            $ne = $rank->where('name', $rank_name)->get();
            //ここで番号の有無をはんだん
            $neko = User::with(['rank', 'role', 'stance', 'time'])->where('role_id', $role)->where('stance_id', $stance)->where('rank_id', '>=', $ne[0]->id)->where('rank_id', '<=', $ne[2]->id)->get();
            $count = count($neko);
            //$rank_idのデータが一つだけの時
            return Inertia::render("Search/Show", ["users" => $neko]);
        }
    }

    public function keyword(Request $request, User $user, Rank $rank)
    {
        $word = $request->input('word');    
        //名前で検索
        if (isset($word)) {
            $users = User::with(['rank', 'role', 'stance', 'time'])->where('name', 'LIKE', '%' . $word . '%')->get();
            return Inertia::render("Search/Show", ["users" => $users]);
        }
    }

}
