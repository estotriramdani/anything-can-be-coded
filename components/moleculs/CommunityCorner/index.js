import React from 'react';
import { LinkComponent as Link } from '../../atoms';

const CommunityCorner = () => {
  return (
    <ul className="community-corner-links">
      <li>
        <Link title="Menjadi Tutor" />
      </li>
      <li>
        <Link title="Koreksi Materi" />
      </li>
      <li>
        <Link title="Request Materi" />
      </li>
      <li>
        <Link title="Belajar" />
      </li>
    </ul>
  );
};

export default CommunityCorner;
