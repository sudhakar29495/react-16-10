import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>
        Landing
      </div>
      <a onClick={() => navigate('/dashboard')} className='cursor-pointer'>Navigate to Dashboard</a>
    </>
  );
}

export default Landing;
