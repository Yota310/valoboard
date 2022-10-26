<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\PostController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\SearchController;
use App\Http\Controllers\MypageController;
use App\Http\Controllers\MoralController;


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

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });


Route::controller(HomeController::class)->group(function(){
    Route::get("/", "index");
    Route::get("/register", "register");
});

Route::controller(MypageController::class)->middleware('auth')->group(function(){
    Route::get("/mypage/{user}/edit","edit");
    Route::post("/mypage/{user}/update","update");
    Route::get("/mypage/{user}/evaluation","evaluation");
});

Route::controller(MypageController::class)->group(function(){
Route::get("/mypage/{user}","index");
});


Route::controller(SearchController::class)->group(function(){
    Route::get("/search", "index");
    Route::get("/result", "show");
});

Route::controller(MoralController::class)->middleware('auth')->group(function(){
    Route::post("/store/{user}", "store");
});

//Route::get("/", [HomeController::class, "index"]);

//Route::get("/mypage/{user}", [MypageController::class, "index"]);

//Route::get("/mypage", [MypageController::class, "index"]);

//Route::get("/mypage/{user}/edit",[MypageController::class,"edit"]);

//Route::post("/mypage/{user}/update",[MypageController::class,"update"]);

//Route::get("/register", [HomeController::class, "register"]);

//Route::get("/search", [SearchController::class, "index"]);

//Route::get("/result", [SearchController::class, "show"]);

//Route::post("/store", [MoralController::class, "store"]);



Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get("/posts/create", [PostController::class, "create"]);

Route::get("/posts/{post}", [PostController::class, "show"]);

Route::get('/posts/{post}/edit', [PostController::class, "edit"]);

Route::put('/posts/{post}', [PostController::class, "update"]);

Route::post("/posts", [PostController::class, "store"]);

Route::delete("/posts/{post}", [PostController::class, "delete"]);


Route::get("/", [HomeController::class, "index"]);
Route::get("/home", [PostController::class, "index"]);

require __DIR__ . '/auth.php';
