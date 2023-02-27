<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;
use App\Models\Rank;
use Illuminate\Support\Facades\Auth;

class HomeController extends Controller
{
    public function index()
    {
        $auth = auth()->user();
        if ($auth != null) {
            $like =  $auth->likeUsers()->with(['rank', 'role', 'stance', 'time'])->get();
            $users = User::with(['rank', 'role', 'stance', 'time'])->get();
            return Inertia::render("Home/Index", ["users" => $users, "likes" => $like]);
        } else {
            $users = User::with(['rank', 'role', 'stance', 'time'])->get();
            return Inertia::render("Home/Index", ["users" => $users]);
        }
    }

    public function stars($number, $stance)
    {

        $users = User::with(['rank', 'role', 'stance', 'time'])->where('moral', '>=', $number)->where('stance_id', '=', $stance)->get();

        return Inertia::render("Home/Index", ["users" => $users]);
    }

    public function new(User $user)
    {
        return Inertia::render("Home/New", ["users" => $user->get()]);
    }

    public function register()
    {
        return Inertia::render("Auth/Register");
    }

    public function description()
    {
        return Inertia::render("Home/Description");
    }
}
