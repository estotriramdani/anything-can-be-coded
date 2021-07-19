import LearnContent from '../../components/ions/LearnContent';
import LearnLeftSide from '../../components/ions/LearnLeftSide';
import LearnRightSide from '../../components/ions/LearnRightSide';

export default function Learn() {
  return (
    <div className="learn-container">
      <LearnLeftSide />
      <LearnContent />
      <LearnRightSide />
    </div>
  );
}
