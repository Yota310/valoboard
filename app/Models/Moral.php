<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Moral extends Model
{
    use HasFactory;

    protected $fillable=[
        'star',
        'evaluated_user_id',
        'user_id',
    ];

    public function users(){
        return $this->belongsTo(User::class);
    }
}
