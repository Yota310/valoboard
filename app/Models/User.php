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
        'sns_name',
        'sns_url',


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

    public function likeUsers() //中間テーブル
    {
        return $this->belongsToMany(User::class, 'likes', 'like_id', 'liked_id');
    }

    public function LikeStatus($userId)  //いいね機能の状態の判別(boolean),($userId)=いいねを押されたユーザーのID
    {
        return User::whereHas('likeUsers', function ($query) use ($userId) {   //likeUsers　←リレーションメソッド名
            $query->where('liked_id', $userId);
        })->exists();  //ここでは中間テーブルの中身を検索している
    }

    public function like($userId)
    {
        if ($this->LikeStatus($userId)) {
            //すでにいいねだったら何もしない
        } else {
            $this->likeUsers()->attach($userId);
        }
    }

    public function unlike($userId)
    {
        if ($this->LikeStatus($userId)) {
            $this->likeUsers()->detach($userId); //すでにいいねだったら消す
        }
    }
}
