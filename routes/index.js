const router = require('express').Router();

router.use('/api-docs', require('./swagger'));

router.get('/', (req, res) => {
    //#swagger.tags=['Hello World']
    res.send('Hello World');
});
 
console.log('📍 About to load contacts routes...');
try {
  const contactsRouter = require('./contacts');
  router.use('/contacts', contactsRouter);
  console.log('✅ Contacts routes loaded successfully');
} catch (error) {
  console.error('❌ Error loading contacts routes:', error);
}

module.exports = router;