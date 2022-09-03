var express=require('express');
var mysql=require('mysql2');
var router=express.Router();
var cont=require("../Controller/controller-main");
router.get("/",cont.entrance);
router.get("/about",cont.about);
router.post("/",cont.addata);
module.exports=router;