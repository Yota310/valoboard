<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminPageController extends Controller
{
    public function index(){
        return Inertia::render('Admin/Index');
    }
}
