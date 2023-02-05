<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Moral extends Model
{
    use HasFactory;

    protected $fillable = [
        'star',
        'evaluated_user_id',
        'user_id',
    ];

    public function users()
    {
        return $this->belongsTo(User::class);
    }

    public function calculate(User $user)
    {
        $total = 0;
        $stars = $this->orderBy('created_at', 'DESC')->limit(10)->get(); //新着10件（最大）の評価を$starsに格納

        foreach ($stars as $star) {
            $total += $star->star; //新着10件の評価の和を計算
        }
        if (count($stars) == 0) {
            $new_moral = 3;
            $user_id = $user->id;
            $this->fill(['star'=>$new_moral,'evaluated_user_id'=>$user_id])->save();
        } else {
            $result = $total / count($stars);  //評価の和で平均を計算
            $new_moral = intval(round($result)); //.5まで切り捨て
        }

        $user->fill(['moral' => $new_moral])->save(); //userテーブル内のmoralに上で求めた値をuserテーブルに保存
    }
}
