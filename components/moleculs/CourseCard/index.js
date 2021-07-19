import Image from 'next/image';
import React from 'react';
import { ImgThumbnail } from '../../../assets';

const CourseCard = ({
  courseName = 'Default Course Name',
  courseAthor = 'Esto',
  courseLang = 'JavaScript',
  courseSlug = 'default',
  ...rest
}) => {
  return (
    <div className="course-card" tabIndex={0}>
      <div className="course-card-thumbnail">
        <Image src={ImgThumbnail} alt="Course name here" />
      </div>
      <p className="course-card-title">{courseName}</p>
      <p className="course-card-subtitle">
        {courseAthor} • {courseLang}
      </p>
    </div>
  );
};

export default CourseCard;
