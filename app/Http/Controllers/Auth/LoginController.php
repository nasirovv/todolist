<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class LoginController extends Controller
{
    public function login(LoginRequest $request){
        $user = User::where('email', $request->email)->first();
        if(!$user || !Hash::check($request->password, $user->password )){
            return response()->json('Something went wrong', 401);
        }

        return response()->json([
            'message' => 'Successfully logged in',
            'user' => $user,
            'token' => $user->createToken('auth_token')->plainTextToken
        ], 201);
    }

    public function logout()
    {
        auth()->user()->tokens()->delete();

        return response()->json([
            'message' => 'Successfully logged out!'
        ], 200);
    }
}
