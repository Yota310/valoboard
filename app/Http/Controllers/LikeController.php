<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LikeController extends Controller
{
    public function store($userId)
    {
        Auth::user()->like($userId);
        return redirect('/mypage/' . $userId);
    }

    public function destroy($userId)
    {
        // dd("kowasuzo");
        Auth::user()->unlike($userId);
        return redirect('/mypage/' . $userId);
    }
}
