import React from 'react';
import classes from './CardMini.module.sass'

const CardMini = ({type, label, Icon, Iliustration}) => {
    return (
        <div className={classes.Card}> 
            <div className={classes.CardTop}>
                <Icon className={classes.CardTopIcon}/>
                <p>{type}</p>
            </div>
            <div className={classes.CardBottom}>
                <div className={classes.CardBottomLeft}>
                    <p>{label}</p>
                    <button>Оформить оналайн</button>
                </div>
                <Iliustration className={classes.CardBottomRight}/>
            </div>
        </div>
    );
};

export default CardMini;