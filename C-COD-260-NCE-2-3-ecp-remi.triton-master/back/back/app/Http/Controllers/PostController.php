<?php namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;
use Illuminate\Support\Facades\Auth;
use App\Models\User;


class PostController extends Controller
{
   public function index()
   {
    $posts = Post::all();
    return response()->json($posts);
   }    

   public function show(Request $request, $postId){
    $post = Post::find($postId);
    return response()->json($post);

   }

   public function store(Request $request)
   {
       $post = new Post;
       $user=Auth::user(); 
       $post->title = $request->title;
       $post->body = $request->body;
       $post->author = $user['firstName']." ". $user['lastName'];
       $post->authorId = $user['_id'];
       $post->type = $user['type'];
       $post->save();
       return response()->json(["result" => "ok", 'author' => $user['_id']]);
    

   }
   public function destroy($postId)
 {
     $post = Post::find($postId);
     $post->delete();

     return response()->json(["result" => "ok"], 200);       
 }
 public function update(Request $request, $postId)
 {
     $post = Post::find($postId);
     $post->title = $request->title;
     $post->body = $request->body;
     $post->save();

     return response()->json(["result" => "ok"], 201);       
 }
 public function searchByTitle(Request $request){
    {
        $query = Post::query();

        if ($s = $request->input('s')) {
            $query->where('title', 'regexp', "/.*$s/i")
                ->orWhere('body', 'regexp', "/.*$s/i");
        }

        if ($sort = $request->input('sort')) {
            $query->orderBy('id', $sort);
        }

        $perPage = 1000000000000;
        $page = $request->input('page', 1);
        $total = $query->count();
        $result = $query->offset(($page - 1) * $perPage)->limit($perPage)->get();
        return response()->json($result);

    }}}

