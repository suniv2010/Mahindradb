/**
 * UsersController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = { 
    add: function(req, res){
       var username = req.body.username;
       var usertype = req.body.usertype;
       var status = req.body.status;
       var activationdate = req.body.activationdate;
       var initiator = req.body.initiator;
       var approver = req.body.approver;
       var head = req.body.head

       Userdetails.create({username:username, usertype:usertype,status:status,activationdate:activationdate,initiator:initiator,approver:approver,head:head}).exec(function(err){
        if(err){
            res.send(500, {error: 'Database Error'});
        }

       res.send("success");
    });
  },

  list: function(req, res){
    Userdetails.find({}).exec(function(err,users){
        if(err){
              //res.send(500,{error:'database error'});
        }
        console.log(users);
        return res.json({"data":users})
       // res.send("success", );
        //res.view('questions/list', { questions: questions });
       // res.view('articles/list', articles);
        //res.view('/articles/list',{articles:articles});
    })
},
getuser: function(req, res){
    console.log(req.params.username)
    Userdetails.findOne({username: req.params.username}).exec(function(err,user){
        if(err){
              //res.send(500,{error:'database error'});
        }
        //console.log(user);
        return res.json(user)
       // res.send("success", );
        //res.view('questions/list', { questions: questions });
       // res.view('articles/list', articles);
        //res.view('/articles/list',{articles:articles});
    })
}
};

