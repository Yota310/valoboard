<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;
use App\Models\Rank;

class HomeController extends Controller
{
   public function index(){
    $users = User::with(['rank','role','stance','time'])->get();
       return Inertia::render("Home/Index",["users"=>$users]);
   } 

   public function mypage(User $user){
    $auth_user = User::with(['rank','role','stance','time'])->find($user->id);
       //$rank=User::find($user->id)->rank;
       return Inertia::render("Mypage/Index",["auth_user"=>$auth_user]);
   }

public function new(User $user) {
    return Inertia::render("Home/New",["users"=>$user->get()]);
}
public function register(){
    return Inertia::render("Auth/register");
}

public function search(User $user){
    return Inertia::render("Search/Index",["users"=>$user->get()]);
}
}