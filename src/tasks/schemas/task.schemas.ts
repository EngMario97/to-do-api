import * as mongoose from 'mongoose';

export const TaskSchema = new mongoose.Schema({
    description: String,
    category: String,
    completed: Boolean,
    favorited: Boolean,
})