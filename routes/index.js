const router = require('express').Router();

const apiUsers = require('./api/users');
const apiThoughts = require('./api/thoughts');

router.use('/api', apiUsers);
router.use('/api', apiThoughts);


router.use((req, res) => {
  res.status(404).send('<h1>These Are Not The Routes You Are Looking For</h1>');
});

module.exports = router;