<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
    public function response($status, $messsage = [], $data = []):array
    {
        if($messsage['type'] == 'success'){
            $messsage = $messsage;
            $messsage['code'] = 200;
        }else if($messsage['type'] == 'error'){
            $messsage = $messsage;
            $messsage['code'] = 500;
        }else if($messsage['type'] == 'warning'){
            $messsage = $messsage;
            $messsage['code'] = 300;
        }else {
            abort(500);
        }

        return ['transaction' => ['status' => $status], 'message' => $messsage, 'data' => $data];
    }
}
