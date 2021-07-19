import React from 'react';
import { Button, Gap } from '../../atoms';
import CourseCard from '../CourseCard';

const OtherClasses = () => {
  return (
    <div>
      <h2 className="heading-2">Kelas Lainnya</h2>
      <Gap height={15} />
      <CourseCard />
      <Gap height={10} />
      <CourseCard />
      <Gap height={10} />
      <Button title="Lihat Semua Kelas" />
      <Gap height={23} />
    </div>
  );
};

export default OtherClasses;
