<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;
use App\Models\Rank;


class SearchController extends Controller
{

    public function Index(User $user, Rank $rank)
    {
        return Inertia::render("Search/Index",["ranks"=>$rank->get()]);
    }

    public function Show(Request $request, User $user)
    {
    //dd($request);
        $word = $request->input('word');
        $rank = $request->input('rank');
        //return Inertia::render("Search/Show", ["users" => $user->searchUser($word)]);
        $users = User::with(['rank', 'role', 'stance', 'time'])->where('name', 'LIKE', '%' . $word . '%')->where('rank_id',$rank)->get();
        return Inertia::render("Search/Show", ["users" => $users]);
    }
}
