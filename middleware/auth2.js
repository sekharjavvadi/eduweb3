const passport = require("passport")
const mongoose=require('mongoose');
const Blogs=require('../models/schema')

var arr1=new Array();//dummy
var arr2=new Array();//dummy
var arr3=new Array();
var vtopics=new Array();
var vlinks=new Array();
var vdescription=new Array();
// load config
const dotenv = require('dotenv')
dotenv.config({path:'./config/config.env'});

module.exports ={
    ensureAuth: function (req,res,next){
        if(req.isAuthenticated()){
            console.log('authenticatedd')
            return next()
        }
        else{
            console.log('unauthenicated')
            const validd=false;
            Blogs.findOne({coursename:req.params.id})
    .then(function(dott){
        if(!dott){
            console.log('no records')
            res.send('no records on database')
        }
        else{
    arr1=dott.links;
    arr2=dott.topics;
    arr3=dott.description;
    // var k,m;
    // for(i=1;i<=100;i++){
    //     k="l"+i;
    //     m="t"+i;
    //     if(arr1[k] && arr2[m]){
    //        // console.log(arr[k])
    // vlinks[i]=arr1[k]
    // vtopics[i]=arr2[m]
    
    //     }
    //     else
    //     {
    //        console.log('break')
    //        break;
          
    //     }
    // }
    // console.log(vlinks)
    // vtopics[0]="ksjdlj"
    // console.log(vtopics)
    //17th oct
    vlinks=[];
    vtopics=[];
    vdescription=[];
    vlinks=arr1;
    vtopics=arr2;
    vdescription=arr3;
    //
    res.render('topics',{vtopics,vlinks,vdescription,validd:validd,})
    //console.log(req.users.displayname)
        }
    })
          
        }
    },
    ensureGuest:function(req,res,next){
        if(!req.isAuthenticated()){
            return next()
            
        }
        else
        {
            console.log('guest authenticated')
            res.redirect('/index')
           
        }
    },
}