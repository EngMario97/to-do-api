import { Document } from "mongoose";

export class Task extends Document {
    description: string;
    category: string;
    completed: boolean;
    favorited: boolean;
}
