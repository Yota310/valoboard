<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Moral;

class MoralController extends Controller
{
    public function store(Request $request,Moral $moral ){
        $input=$request->all();
$moral->fill($input)->save();


    }
}
