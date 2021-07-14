export class Course {
  id!: string;
  title!: string;
  subtitle!: string;
  description!: string;
  workload!: string;
  videosDuration!: number;
  image!: string;
  instructorId!: number;
  available!: boolean;
  wordpressId!: string;
  releasedAt!: string;
  createdAt!: Date;
  updatedAt!: Date;
  instructor!: {
    id: number;
    userId: number;
    name: string;
    description: string;
    avatar: string;
    createdAt: Date;
    updatedAt: Date;
  };
  courseId!: number | 0;
  edools!: { course: number; } | { course: 0; };
  name!: string;
  duration!: string;
}