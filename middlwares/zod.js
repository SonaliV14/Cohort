 const express = require("express");
 const app=express();
 const zod=require("zod");

 const schema=zod.array(zod.number());

 app.use(express.json());
 