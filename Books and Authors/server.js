var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');
var session = require('session')

var app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname + '/views'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/angularProject/dist'));

mongoose.connect('mongodb://localhost/authors');

mongoose.Promise = global.Promise

var authorSchema = new mongoose.Schema({
    firstName: {type: String, required: [true, "You need a first name "], minlength: 1},
    lastName: {type: String, required: [true, "You need a last name "], minlength: 1}
}, {timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'}});
mongoose.model('Author', authorSchema);
var Author = mongoose.model('Author');

//Get All Authors
app.get('/authors', function(request, response){
    console.log("## server.js ## GET ALL AUTHORS ##")
    Author.find({}, function(err, authors){
        if(err){
            console.log("There was an error", err)
            response.json({message: 'error', error: err})
        } else {
            console.log("Success")
            // authors.reverse()
            // authors.sort({_id: 1})
            response.json({message: 'Get All Authors Successful', authors: authors})
        }
    })
});

//Get Single Author By ID

app.get('/authors/:id', function(request, response){
    console.log("## server.js ## GET SINGLE AUTHOR BY ID ##")
    console.log("passedID is",request.params.id)
    let id = request.params.id
    Author.find({_id: id}, function(err, author){
        if(err){
            console.log("There was an error", err)
            response.json({message: "Error", error: err})
        } else {
            console.log("Success")
            response.json({message: "Get Single Author Successful", author: author})
        }
    })
})

//Creat New Author

app.post('/authors', function(request, response){
    console.log("## server.js ## CREATE NEW AUTHOR ##")
    var author = new Author({firstName: request.body.firstName, lastName: request.body.lastName})
    author.save(function(err){
        if(err){
            console.log("There was an error", err)
            response.json({message: "errer", error: err})
        } else {
            console.log("Success")
            response.json({message: "Create New Author Successful", newAuthor: author})
        }
    })
})

//Update Single Author By ID

app.put('/authors/:id', function(request, response){
    console.log("## server.js ## UPDATE SINGLE AUTHOR BY ID ##")
    console.log("passedID is", request.params.id)
    let id = request.params.id
    Author.update({_id: id}, {firstName: request.body.firstName, lastName:request.body.lastName}, function(err, author){
        if(err){
            console.log("There was an error", err)
            response.json({message: "error", error: err})
        } else {
            console.log("Success")
            response.json({message: "Update Single Author Successful", author: author})
        }
    })
})

//Delete Single Author by ID

app.delete('/authors/:id', function(request, response){
    console.log("## server.js ## DELETE SINGLE AUTHOR BY ID ##")
    console.log("passedID is", request.params.id)
    let id = request.params.id
    Author.remove({_id: id}, function(err){
        if(err){
            console.log("There was an error", err)
            response.json({message: "error", error: err})
        } else {
            console.log("Success")
            response.json({message: "Delete Single Author Successful"})
        }
    })
})

//Delete All Authors

app.delete('/deleteAll', function(request, response){
    console.log("## server.js ## DELETE ALL AUTHORS ##")
    Author.remove({}, function(err){
        if(err){
            console.log("There was an error", err)
            response.json({message: "error", error: err})
        } else {
            console.log("Success")
            response.json({message: "Delete All Authors Successful"})
        }
    })
})

//Listen

app.all("*", (request, response, next) => {
    response.sendFile(path.resolve("./angularProject/dist/index.html"))
});

app.listen(8000, function(){
    console.log("running this express project on port 8000")
});


