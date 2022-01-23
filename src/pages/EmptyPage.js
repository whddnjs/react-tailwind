import { Link } from 'react-router-dom';

function EmptyPage() {
  return (
    <div className="flex flex-col items-center justify-around h-screen">
      <div className="text-9xl">잘못된 접근입니다.</div>
      <Link to="/" className="text-9xl">
        돌아가기
      </Link>
    </div>
  );
}

export default EmptyPage;
