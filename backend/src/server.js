import cors from 'cors';
import express from 'express';
import { connectToDB, db } from "./db.js";
const app = express()
app.use(cors())
app.use(express.json())
app.get('/',(req,res)=>{
    res.json("server is running successfully!");
})

app.post('/addgroup/:groupname/:color',async(req,res)=>
{
    await db.collection("Groups").findOne({Groupname:req.params.groupname})
    .then(async(details1)=>
    {
        if(details1)
        {
            res.json("exist");
        }
        else
        {
            await db.collection("Groups").insertOne({ Groupname: req.params.groupname, Color: req.params.color })
                .then((details) => {
                    res.json(details)
                })
                .catch((e) => console.log(e));
        }
    })
})

app.post('/allgroups',async(req,res)=>
{
    // await db.listCollections().toArray()
    await db.collection("Groups").find().toArray()
    .then((details)=>
    {
        res.json(details)
    })
    .catch((e)=>console.log(e))
})
app.post('/notes/:group',async(req,res)=>
{
    await db.collection("Groups").find({Groupname:req.params.group}).toArray()
    .then((details)=>
    {
        res.json(details);
    })
    .catch((e)=>console.log(e))
})
app.post('/sendnotes/:group/:note/:date/:time',async(req,res)=>
{
    await db.collection("Groups").findOneAndUpdate({Groupname:req.params.group},{$push:{Notes:{Note:req.params.note,Date:req.params.date,Time:req.params.time}}})
    .then((details)=>
    {
        res.json(details);
    })
    .catch((e)=>console.log(e))
})

connectToDB(()=>{
    app.listen(8000,()=>{
        console.log("server running at 8000");
    })
})