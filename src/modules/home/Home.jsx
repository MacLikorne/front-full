import React, { Fragment } from 'react'
import heavy from '../../assets/images/heavy.jpg'

const style = {
    img: {
        width: '70%',
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'block'
    }
}

const Home = props => {
    return (
        <Fragment>
            <h1>Bienvenue sur ma super application !!!</h1>
            <img src={heavy} alt="heavy stuff" style={style.img} />
        </Fragment>
    )
}

export default Home