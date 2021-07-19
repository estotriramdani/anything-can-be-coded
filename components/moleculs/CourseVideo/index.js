import React from 'react';
import { Button, Gap } from '../../atoms';

const CourseVideo = () => {
  return (
    <div className="course-video">
      <iframe
        className="course-video-video"
        src="https://www.youtube.com/embed/t4TQGux6r7M"
        title="YouTube video player"
        frameBorder={0}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen={true}
      ></iframe>
      <div className="course-video-heading">
        <div className="course-video-heading-title-subtitle">
          <p className="course-video-heading-title-subtitle-title">
            Mengetahui dan Cara Membuat Variable
          </p>
          <p className="course-video-heading-title-subtitle-subtitle">
            Dasar Pemrograman JavaScript • Episode 3
          </p>
        </div>
        <div className="course-video-heading-button-wrapper">
          <div className="course-video-heading-button-wrapper-action">
            <Button title="Kembali" />
          </div>
          <div className="course-video-heading-button-wrapper-action">
            <Button title="Lanjut" />
          </div>
        </div>
      </div>
      <Gap height={15} />
      <p className="course-video-description">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industrys standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
      <Gap height={15} />
      <p className="course-video-role">oleh</p>
      <p className="course-video-tutor">Esto Triramdani N</p>
      <p className="course-video-role">Front-end Developer</p>
    </div>
  );
};

export default CourseVideo;
