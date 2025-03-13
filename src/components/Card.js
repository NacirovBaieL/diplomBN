import React from 'react';
import classes from './Card.module.sass'

const Card = ({btnText, mainText, secondText, Icon}) => {
    return (
        <div className={classes.Card}>
            <div className={classes.CardInner}>
                <button>{btnText}</button>
                <p className={classes.CardInnerBigText}>{mainText}</p>
                <p className={classes.CardInnerSmallText}>{secondText}</p>
            </div>
            <Icon className={classes.CardIcon} />
        </div>
    );
};

export default Card;