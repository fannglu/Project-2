require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
var passport = require("passport");
var Strategy = require("passport-local").Strategy;
var session = require("cookie-session");

var db = require("./db");

const app = express();
const port = 3000;

app.get('/', function(req, res){
    
})