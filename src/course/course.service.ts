
import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto.js';
import { UpdateCourseDto } from './dto/update-course.dto.js';

@Injectable()
export class CourseService {
  createCourse(createCourseDto: CreateCourseDto) {
    return {
      message: 'Course created successfully',
      data: createCourseDto,
    };
  }

  getAllCourses() {
    return {
      message: 'All courses fetched successfully',
      data: [],
    };
  }

  getCourseById(id: string) {
    return {
      message: 'Course fetched successfully',
      id: id,
    };
  }

  updateCourse(id: string, updateCourseDto: UpdateCourseDto) {
    return {
      message: 'Course updated successfully',
      id: id,
      data: updateCourseDto,
    };
  }

  patchCourse(id: string, updateCourseDto: UpdateCourseDto) {
    return {
      message: 'Course patched successfully',
      id: id,
      updatedFields: Object.keys(updateCourseDto),
    };
  }

  deleteCourse(id: string) {
    return {
      message: 'Course deleted successfully',
      id: id,
    };
  }

  uploadCourseMaterial(id: string, file: Express.Multer.File) {
    return {
      message: 'Material uploaded successfully',
      courseId: id,
      filename: file.filename,
      path: `uploads/${file.filename}`,
    };
  }
}
