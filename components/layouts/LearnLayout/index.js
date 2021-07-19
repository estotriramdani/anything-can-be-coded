import React from 'react';
import LearnLeftSide from '../../ions/LearnLeftSide';
import LearnRightSide from '../../ions/LearnRightSide';

const LearnLayout = ({ Component }) => {
  return (
    <div className="learn-container">
      <LearnLeftSide />
      {<Component />}
      <LearnRightSide />
    </div>
  );
};

export default LearnLayout;
