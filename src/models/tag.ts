import { Course } from "./course";

export class Tag {
  id!: number;
  name!: string;
  categoryId!: number;
  availableForEcommerce!: number;
  category_tag_courses!: Course[];
}