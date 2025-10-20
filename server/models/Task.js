import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true,
    maxlength: [100, 'Title cannot be more than 100 characters']
  },
  desc: {
    type: String,
    required: [true, 'Description is required'],
    trim: true,
    maxlength: [500, 'Description cannot be more than 500 characters']
  }
}, {
  timestamps: true // Adds createdAt and updatedAt fields
});

// Create a virtual 'id' field that returns the _id as string
taskSchema.virtual('id').get(function() {
  return this._id.toString();
});

// Ensure virtual fields are serialized
taskSchema.set('toJSON', {
  virtuals: true
});

export default mongoose.model('Task', taskSchema);