import './style.css';
import {Plus, FileEarmarkText, DeviceSsd} from 'react-bootstrap-icons';


export default function FloatingButton(){
    return(
        <div class = "btn-container">
            <input type="checkbox" id="btn-mas"/>
            <div class="sub-btn">
                <a href="/"><FileEarmarkText/></a>
                <a href="/"><DeviceSsd/></a>
            </div>
            <div class="btn-mas">
                <label for="btn-mas"><Plus/></label>
            </div>
        </div>
    );
}