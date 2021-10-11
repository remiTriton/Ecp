<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;
use App\Http\Controllers\CommentaireController;
use App\Http\Controllers\UserController;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

//Routes pour les Annonces

Route::get('post', [PostController::class, 'index']);
Route::get('post/{postId}', [PostController::class, 'show']);
Route::middleware('auth:sanctum')->post('post', [PostController::class, 'store']);
Route::put('post/{postId}', [PostController::class, 'update']);
Route::delete('post/{postId}', [PostController::class, 'destroy']);
Route::get('post', [PostController::class, 'searchByTitle']);

//Routes pour les commentaires

Route::get('commentaire', [CommentaireController::class, 'index']);
Route::get('commentaire/{commentaireId}', [CommentaireController::class, 'show']);
Route::middleware('auth:sanctum')->post('commentaire', [CommentaireController::class, 'store']);
Route::put('commentaire/{commentaireId}', [CommentaireController::class, 'update']);
Route::delete('commentaire/{commentaireId}', [CommentaireController::class, 'destroy']);
Route::get('commentaire', [CommentaireController::class, 'searchByTitle']);

//Routes pour les users

Route::post('user', [UserController::class, 'store']);
Route::get('user', [UserController::class, 'index']);
Route::get('user/{userId}', [UserController::class, 'show']);
Route::patch('user/{userId}', [UserController::class, 'update']);
Route::delete('user/{userId}', [UserController::class, 'destroy']);
Route::get('user', [UserController::class, 'searchByTitle']);
Route::post('login', [UserController::class, 'login']);

Route::middleware('auth:sanctum')->get('profile', [UserController::class, 'getUser']);
