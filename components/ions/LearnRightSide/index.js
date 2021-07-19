import React from 'react';
import { Gap } from '../../atoms';
import { AllCoursesList } from '../../moleculs';

const LearnRightSide = () => {
  return (
    <div className="learn-right-side">
      <h2 className="heading-2">Pelajaran di Kelas Ini</h2>
      <Gap height={23} />
      <AllCoursesList
        title="Pendahuluan (Ilmu Komputer, Pemrograman, d..."
        episodeNumber={1}
        style={{ color: '#fe0000' }}
      />
      <AllCoursesList
        title="Memahami Fungsi Komentar Pada Bahasa Pemrograman"
        episodeNumber={2}
      />
    </div>
  );
};

export default LearnRightSide;
