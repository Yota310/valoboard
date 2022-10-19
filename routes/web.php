<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\PostController;
use App\Http\Controllers\HomeController;
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


        Route::get("/",[HomeController::class,"index"]);

Route::get("/mypage/{user}",[HomeController::class,"mypage"]);

Route::get("/mypage",[HomeController::class,"mypage"]);

Route::get("/register",[HomeController::class,"register"]);

Route::get("/search",[HomeController::class,"search"]);

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get("/posts/create", [PostController::class, "create"]);

Route::get("/posts/{post}", [PostController::class, "show"]);

Route::get('/posts/{post}/edit', [PostController::class, "edit"]);

Route::put('/posts/{post}', [PostController::class, "update"]);

Route::post("/posts", [PostController::class, "store"]);

Route::delete("/posts/{post}", [PostController::class, "delete"]);


Route::get("/",[HomeController::class,"index"]);
Route::get("/home", [PostController::class, "index"]);

require __DIR__ . '/auth.php';
