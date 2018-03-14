const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('public'))

let comments1 = [];
let comments2 = [];
let comments3 = [];
let id = 0;
let id2 = 0;
let id3 = 0;

app.get('/api/comments1', (req, res) => {
    res.send(comments1);
  });

app.post('/api/comments1', (req, res) => {
    id = id + 1;
    let comment = {id:id, text:req.body.text, author:req.body.author};
    comments1.push(comment);
    res.send(comments1);
  });

  app.delete('/api/comments1/:id', (req,res) => {
      let id = parseInt(req.params.id);
      let removeIndex = comments1.map(comment => { return comment.id; }).indexOf(id);
      comments1.splice(removeIndex, 1);
      res.sendStatus(200);
  });

// App 2

app.get('/api/comments2', (req, res) => {
  res.send(comments2);
});

app.post('/api/comments2', (req, res) => {
  id2 = id2 + 1;
  let comment = {id:id, text:req.body.text, author:req.body.author};
  comments2.push(comment);
  res.send(comments2);
});

app.delete('/api/comments2/:id', (req,res) => {
    let id2 = parseInt(req.params.id);
    let removeIndex = comments2.map(comment => { return comment.id; }).indexOf(id);
    comments2.splice(removeIndex, 1);
    res.sendStatus(200);
});
 

// App 3

app.get('/api/comments3', (req, res) => {
  res.send(comments3);
});

app.post('/api/comments3', (req, res) => {
  id3 = id3 + 1;
  let comment = {id:id, text:req.body.text, author:req.body.author};
  comments3.push(comment);
  res.send(comments3);
});

app.delete('/api/comments3/:id', (req,res) => {
    let id3 = parseInt(req.params.id);
    let removeIndex = comments3.map(comment => { return comment.id; }).indexOf(id);
    comments3.splice(removeIndex, 1);
    res.sendStatus(200);
});

app.listen(2050, () => console.log('Server listening on port 2050!'))