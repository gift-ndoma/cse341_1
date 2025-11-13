const mongoose = require('mongoose');   

const contactSchema = new mongoose.Schema({
    name: {
        firstName: { 
            type: String, 
            required: [true, 'First name is required'] 
        },
        lastName: {     
            type: String, 
            required: [true, 'Last name is required'] 
        },
        favoriteColor: {
            type: String, 
            required: [true, 'Favorite color is required']  
        },
        birthday: {
            type: Date, 
            required: [true, 'Birthday is required']  
        }
    }
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
