<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Product;
use Illuminate\Support\Facades\DB;

class ProductsController extends Controller
{
    public function getProducts()
    {
        $products = Product::all();
        return $this->response(true, ['type' => 'success', 'content' => 'Hecho'],$products);
    }

    public function deleteProduct($id)
    {
        $product = Product::where('id',$id)->delete();
        return json_encode(['Se elimino exitosamente el producto']);
    }

    public function SaveProduct(Request $request)
    {
        $status = false;
        $result = null;
        DB::beginTransaction();
        try {
            $product = Product::create([
                'name' => $request->name,
                'description' => $request->description,
                'img' => $request->img,
                'price' => $request->price,
            ]);

            $status = true;
            DB::commit();
        } catch (\Throwable $th) {
            $result = $th->getMessage();
            DB::rollBack();
        }if($status){
            return $this->response($status, ['type' => 'success', 'content' => 'Hecho'], ['se creo exitosamente el producto']);
        }else {
            return $this->response($status, ['type' => 'error', 'content' => 'error'], $result);
        }
    }

    public function EditProduct(Request $request)
    {
        $status = false;
        $result = null;
        DB::beginTransaction();
        try {
            $product = Product::where('id', $request->id)->update([
                'name' => $request->name,
                'description' => $request->description,
                'img' => $request->img,
                'price' => $request->price,
            ]);

            $status = true;
            DB::commit();
        } catch (\Throwable $th) {
            $result = $th->getMessage();
            DB::rollBack();
        }if($status){
            return $this->response($status, ['type' => 'success', 'content' => 'Hecho'], ['se edito exitosamente el producto']);
        }else {
            return $this->response($status, ['type' => 'error', 'content' => 'error'], $result);
        }
    }
}
