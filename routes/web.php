<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\PostController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\SearchController;
use App\Http\Controllers\MypageController;
use App\Http\Controllers\MoralController;
use App\Http\Controllers\ChatController;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/



//ホーム
Route::controller(HomeController::class)->group(function () {
    Route::get("/", "index");
    Route::get("/register", "register");
    Route::get("/stars/{number}/{stance}", "stars");
});

//チャット機能
Route::group(['middleware' => ['auth']], function () {
    Route::inertia('/chat', "Chats/Chats")->name('chat.index');
    Route::get('/messages', [ChatController::class, 'fetchMessages'])->name('chat.fetch');
    Route::post('/messages', [ChatController::class, 'sendMessage'])->name('chat.store');
});

//マイページ
Route::controller(MypageController::class)->middleware('auth')->group(function () {
    Route::get("/mypage/{user}/edit", "edit");
    Route::post("/mypage/{user}/update", "update");
    Route::get("/mypage/{user}/evaluation", "evaluation");
});

Route::controller(MypageController::class)->group(function () {
    Route::get("/mypage/{user}", "index");
});

//検索
Route::controller(SearchController::class)->group(function () {
    Route::get("/search", "index");
    Route::get("/result", "show");
});
//モラル
Route::controller(MoralController::class)->middleware('auth')->group(function () {
    Route::post("/store/{user}", "store");
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');




require __DIR__ . '/auth.php';
