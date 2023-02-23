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
use App\Http\Controllers\AdminPageController;
use App\Http\Controllers\LikeController;



require __DIR__ . '/auth.php';
Route::prefix('admin')->name('admin.')->group(function () {
    require __DIR__ . '/admin.php';
});

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
    Route::get("/description", "description");
    Route::get("/register", "register")->name("register");
    Route::get("/stars/{number}/{stance}", "stars");
});

//マイページ
Route::controller(MypageController::class)->middleware('auth')->group(function () {
    Route::get("/mypage/{user}/edit", "edit");
    Route::post("/mypage/{user}/update", "update");
    Route::get("/mypage/{user}/evaluation", "evaluation");
});
//ゲスト用マイページ
Route::controller(MypageController::class)->group(function () {
    Route::get("/mypage/{user}", "index");
});

//検索
Route::controller(SearchController::class)->group(function () {
    Route::get("/search", "index");
    Route::get("/result", "show");
    Route::get("/keyword", "keyword");
});

//モラル
Route::controller(MoralController::class)->middleware('auth')->group(function () {
    Route::post("/store/{user}", "store");
});
//いいね機能
Route::controller(LikeController::class)->middleware('auth')->group(function () {
    Route::post("/like/{user}", "store");
    Route::post("/unlike/{user}", "destroy");
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::prefix('admin')->name('admin.')->group(function () {

    Route::get('/dashboard', function () {
        return Inertia::render('Admin/Dashboard');
    })->middleware(['auth:admin', 'verified'])->name('dashboard');

    require __DIR__ . '/admin.php';
});

//管理者用
Route::controller(AdminPageController::class)->middleware('auth:admin')->group(function () {
    Route::get("/admin", "index");
});
