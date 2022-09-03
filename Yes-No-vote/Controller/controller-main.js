const mysql2=require('mysql2');
var conn=mysql2.createConnection(
    {
host:"localhost",
user:"root",
password:"password"
    }
)
conn.connect(function(err){if(err){throw err;}else{
    conn.query("use path;")}});
module.exports.entrance=function(req,res)
{
    conn.connect(function(err){if(err){throw err;}else{
        conn.query("select * from votes;",function(err,gata,field)
        {
            console.log(gata[0].Yes)
            res.render("Main",{yes:gata[0].Yes,no:gata[0].No});
        })}});
}
module.exports.about=function(req,res)
{
    res.render("about");
}
module.exports.addata=function(req,res)
{
    conn.connect(function(err){if(err){throw err;}else{
        conn.query("UPDATE votes SET "+req.body.data.toString()+"="+req.body.data.toString()+"+1;",function(err,gata,field)
        {
            if(err)
            {throw err;}
            else
            {
                res.send("Accepted");
            }
        })}});
}
