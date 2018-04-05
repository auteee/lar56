<?php
/**
 * Created by PhpStorm.
 * User: Xcui.
 * Date: 18-3-19
 * Time: 上午12:47
 * Desc:
 */










///////////////////////////////////////////////////////////////////////
//1,建立MODEL 同时生成迁移
//2，建立路由
//3，建立表现页面
//4，由表现页面构建数据迁移文件或者由迁移文件构建表现页面，二者是相关，相互形成的
//

///////////////////////////////////////////////////////////////////////////////////
//* 方法	        路径	                动作	            路由名称        //
//* GET	            /photos	                index	            photos.index    //
//* GET	            /photos/create	        create	            photos.create   //
//* POST	        /photos	                store	            photos.store    //
//* GET	            /photos/{photo}	        show	            photos.show     //
//* GET	            /photos/{photo}/edit	edit	            photos.edit     //
//* PUT/PATCH	    /photos/{photo}	        update	            photos.update   //
//* DELETE	        /photos/{photo}	        destroy	            photos.destroy  //
//////////////////////////////////////////////////////////////////////////////////