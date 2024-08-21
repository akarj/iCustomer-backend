const User = require("../models/user.model");

module.exports = {
   createUser: async (userData) => {
      const res = await new User(userData).save();
      return res;
   },

   updateUserByEmailId: async (emailId, userData) => {
      const res = await User.findOneAndUpdate({ email: emailId }, userData, { new: true });
      return res;
   },

   deleteUserByEmailId: async (emailId) => {
      const res = await User.findOneAndDelete({ email: emailId });
      return res;
   },

   getUserByEmailId: async (emailId) => {
      const res = await User.findOne({ email: emailId });
      return res;
   }
}