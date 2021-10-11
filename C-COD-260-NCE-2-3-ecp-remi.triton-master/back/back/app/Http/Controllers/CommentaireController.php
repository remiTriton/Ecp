<?php namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Commentaire;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class CommentaireController extends Controller
{
    public function index(){
     $commentaires = Commentaire::all();
     return response()->json($commentaires);
    }    
 
    public function show(Request $request, $commentaireId){

     $commentaire = Commentaire::find($commentaireId);
     return response()->json([$commentaire]);
 
    }
   
    public function store(Request $request){
       $commentaire = new Commentaire;

       $user = Auth::user();

       $commentaire->body = $request->body;
       $commentaire->postId = $request->postId;
       $commentaire->author = $user['firstName']." ". $user['lastName'];
       $commentaire->authorId = $user['_id'];
       $commentaire->postTitle = $request->postTitle;
       $commentaire->save();

       return response()->json(["result" => "ok", "commentaire"=> $commentaire], 201);
   }

   public function destroy($commentaireId){
     $commentaire = Commentaire::find($commentaireId);
     $commentaire->delete();

     return response()->json(["result" => "ok"], 200);       
 }

 public function update(Request $request, $commentaireId){
       $commentaire = Commentaire::find($commentaireId);
       
       $commentaire->body = $request->body;
       $commentaire->save();

       return response()->json(["result" => "ok"], 201);       
   }

   public function searchByTitle(Request $request){
        $query = Commentaire::query();

        if ($s = $request->input('s')) {
            $query->where('body', 'regexp', "/.*$s/i");
                
        }

        if ($sort = $request->input('sort')) {
            $query->orderBy('id', $sort);
        }

        $perPage = 9;
        $page = $request->input('page', 1);
        $total = $query->count();

        $result = $query->offset(($page - 1) * $perPage)->limit($perPage)->get();

        return response()->json($result, 201);       

 }}

