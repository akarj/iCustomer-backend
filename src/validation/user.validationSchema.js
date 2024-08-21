const { z } = require('zod');

const userSchema = z.object({
    name: z.string().min(2, 'Name is required.').max(20),
    family_name: z.string().min(2, 'Family name is required.').max(200),
    email: z.string().email('A valid email is required.').max(50),
    picture: z.string().url('Picture must be a valid URL.').optional(),
});

module.exports = userSchema;
