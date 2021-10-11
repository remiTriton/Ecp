<?php namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Validator;
use Illuminate\Support\Facades\Auth;



class UserController extends Controller
{
   public function index()
   {
    $Users = User::all();
    return response()->json($Users);
   }    

   public function show(Request $request, $UserId){
    $User = User::find($UserId);
    if(!$User){
        return response()->json('Nothing found', 404);

    }
    return response()->json($User);

   }

   public function store(Request $request)
   {
       $user = new User;
       $user->firstName = $request->firstName;
       $user->lastName = $request->lastName;
       $user->email = $request->email;
       $user->password = bcrypt($request->password);
       $user->type = 'ads';
       $user->save();
       $token = $user->createToken('LaravelAuthApp')->plainTextToken;
       return response()->json(["result" => "ok", 'user' => $user, 'token'=>$token], 200);
   }

   public function login(Request $request){
    if(Auth::attempt(['email' => $request->email, 'password' => $request->password])){ 
        $user = Auth::user(); 
        $token = auth()->user()->createToken('LaravelAuthApp')->plainTextToken;
        return response()->json(['token' => [$token]], 200);
    } 
    else{ 
        return $this->sendError('Unauthorised.', ['error'=>'Unauthorised']);
    } 
   }
   public function destroy($UserId)
 {
     $User = User::find($UserId);
     $User->delete();
     return response()->json(["result" => "ok"], 200);       
 }
 public function update(Request $request, $UserId)
 {
     $user = User::find($UserId);
     $user->firstName = $request->firstName;
     $user->lastName = $request->lastName;
     $user->email = $request->email;
     $user->type = $request->type;
     $user->password = $user->password;
     $user->save();

     return response()->json(["result" => "ok"], 201);       
 }
 public function searchByTitle(Request $request){
    {
        $query = User::query();

        if ($s = $request->input('s')) {
            $query->where('firstName', 'regexp', "/.*$s/i")
                ->orWhere('lastName', 'regexp', "/.*$s/i")
                ->orWhere('email', 'regexp', "/.*$s/i");

        }

        if ($sort = $request->input('sort')) {
            $query->orderBy('id', $sort);
        }

        $perPage = 1000000000000000;
        $page = $request->input('page', 1);
        $total = $query->count();
        $result = $query->offset(($page - 1) * $perPage)->limit($perPage)->get();
        return response()->json($result);

    }
}

public function getUser(){
    $user = Auth::user();
        return response()->json($user);

}

}

