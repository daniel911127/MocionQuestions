import '../styles/Start.css';
import { Link } from 'react-router-dom';

export const Start = () => {
  return (
    <div className="container-start">
      <h1>Welcom to the Trivia Challenge!</h1>
      <p>You will be presented with 10 True or False questions.</p>
      <p>Can you Score 100% ?</p>
      <button className='begin'><Link className='continue' to ='/play'>BEGIN</Link></button>
    </div>
  );
};
