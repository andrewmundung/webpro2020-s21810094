import {Year, Day} from '../Utils/Waktu';

const Hello = () =>{
    return(
      <>
      <p>welcome to to Webpro Class</p>
      <p>Year {Year()}</p>
      <p>The date {Day()}</p>
      </>
    );
  };

export default Hello;
