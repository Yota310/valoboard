<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'image_path',
        'rank_id',
        'stance_id',
        'time_id',
        'profile',
        'moral',
        'role_id',


    ];
    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function Rank()
    {
        return $this->belongsTo(Rank::class);
    }

    public function Role()
    {
        return $this->belongsTo(Role::class);
    }

    public function Stance()
    {
        return $this->belongsTo(Stance::class);
    }


    public function Time()
    {
        return $this->belongsTo(Time::class);
    }
    public function Moral()
    {
        return $this->hasMany(Moral::class);
    }


    public function messages()
    {
        return $this->hasMany(Message::class);
    }

    // public function searchUser($word)
    // {
    //     return User::with(['rank', 'role', 'stance', 'time'])->where('name', 'LIKE', '%' . $word . '%')->get();
    // }
}
