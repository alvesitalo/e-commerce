import { Tag } from "./tag";

export class Category {
  id!: number;
  name!: string;
  schoolId!: number;
  category_tags!: Tag[]; 
  createdAt!: Date;
  updatedAt!: Date;
}
