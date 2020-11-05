import './not-found.css'
import body from '../../assets/nedry/body.png'
import head from '../../assets/nedry/head.png'
import hand from '../../assets/nedry/hand.png'
import haha from '../../assets/nedry/ahahah.mp3'

export const NotFound = props => {
    return (
        <div className="container" >
            <div className="nedry">
                <img className="nedry-body" src={body} alt='body' />
                <img className="nedry-head" src={head} alt='head' />
                <img className="nedry-hand" src={hand} alt='hand' />
            </div>
            <audio id="player" autoPlay loop>
                <source src={haha} type="audio/mp3" />
            </audio>
        </div>
    )
}