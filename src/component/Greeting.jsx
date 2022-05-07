import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { fetchGreeting } from '../redux/reducer/greetingsReducer';

const Greeting = () => {
  const dispatch = useDispatch();
  const greeting = useSelector(({ greetingReducer }) => greetingReducer.message);

  useEffect(() => {
    dispatch(fetchGreeting());
  }, []);

  const refreshPage = () => {
    window.location.reload(false);
  };

  const Newgreeting = 'Hello Friend';
  return (
    <div className="mt-20 flex flex-col items-center">
      <h1 className=" font-bold">{Newgreeting}</h1>
      <h1 className=" font-bold">{greeting && greeting.message}</h1>
      <button
        type="button"
        onClick={refreshPage}
        className="bg-purple-600 py-3 px-6 mt-4 rounded text-white"
      >
        Get a greeting
      </button>
    </div>
  );
};

export default Greeting;
