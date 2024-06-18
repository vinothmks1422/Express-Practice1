var express = require('express');
var router = express.Router();

let data = [];

// Create User (While Creating User Id is mandatory)
router.post('/create-user', (req, res, next) => {
  console.log('req.body: ', req.body);
  data.push(req.body);
  res.send({
    data,
    status: 'success',
    message: 'User created Successfully'
  });
});

// Get All Users
router.get('/', (req, res, next) => {
  console.log(req.url);
  res.send({
    data,
    status: 'success',
    message: 'Users Details found Successfully'
  });
});

// Get User By Id
router.get('/:id', (req, res) => {
  console.log('req.url: ', req.url);
  const getUser = data.filter(value => value.id == req.params.id);
  console.log('getUser: ', getUser);
  res.send({
    getUser,
    status: 'success',
    message: 'User detail found Successfully'
  });
});

// Update User
router.put('/update-user/:id', (req, res) => {
  console.log('req.url: ', req.url);
  data = data.map(user => {
    if (user.id == req.params.id) {
      return { ...user, ...req.body }
    }
    return user;
  });
  res.send({
    data,
    status: 'success',
    message: 'User Updated Successfully'
  }
  );
});

// Delete User
router.delete('/delete-user/:id', (req, res, next) => {
  data = data.filter(user => user.id != req.params.id);
  res.send({
    data,
    status: 'success',
    message: 'User Deleted Successfully'
  });
});

module.exports = router;
