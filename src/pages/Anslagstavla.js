import ButtonSend from '../components/ButtonSend'
import {useNavigate} from 'react-router-dom';

export default function Home() {

    const Navigate = useNavigate();
    const NavigateToAnslagstavlan = () => {
    //this is so the user returns back to the same page after clicking the send button
    Navigate('/pages/anslagstavlan');
  };

    return (
        <form>    
            <h1>Anslagstavla</h1>
            <div>
                <textarea></textarea>
                <br />
                <ButtonSend onClick={NavigateToAnslagstavlan}></ButtonSend>
            </div> 

            <div>
                <h1>Här kommer posterna hamna...</h1>
            </div>
        </form>
        
    )
     
}