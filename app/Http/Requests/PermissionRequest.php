<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PermissionRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        //你可以检查认证用户是否有资格更新指定资源
        //$comment = Comment::find($this->route('comment'));
        //return $comment && $this->user()->can('update', $comment);
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $rules=[
            'pid'=>'required',
        ];
        if (request('id','')) {
            $rules['permission'] = 'required|unique:admin_permission,permission,'.$this->id;
            $rules['name'] = 'required|unique:admin_permission,name,'.$this->id;
        }else{
            $rules['permission'] = 'required|unique:admin_permission,permission';
            $rules['name'] = 'required|unique:admin_permission,name';
        }
        return $rules;
    }

    /**
     * @return array验证未通过返回的消息
     */
    public function messages()
    {
        return [
            'pid.required'=>'父级菜单不能为空',
            'permission.required'=>'权限标识不能为空',
            'permission.unique'=>'权限标识不能重复',
            'name.required'=>'权限/菜单名称不能为空',
            'name.unique'=>'权限/菜单名称不能重复',
        ];
    }
}
