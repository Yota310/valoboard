<?php

namespace App\Http\Controllers;

use App\Models\Message;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Events\MessageSent;

class ChatController extends Controller
{
    // メッセージの取得
    public function fetchMessages()
    {
        return Message::with('user')->get();
    }

   // メッセージ送信
public function sendMessage(Request $request)
{
    $user = Auth::user();
    $message = $user->messages()->create([
        'message' => $request['message']
    ]);

    broadcast(new MessageSent($user, $message))->toOthers();
}
}