import React from 'react';
import classes from './Header.module.sass'

const Header = () => {
    return (
        <div className={classes.Header}>
            <div className={classes.HeaderLine}/>
            <div className={classes.HeaderInner}>
                <p className={classes.HeaderInnerLogo}>Тенир Банк</p>
                <ul>
                    <li>Курсы валют</li>
                    <li>Офисы</li>
                    <li>Банкоматы</li>
                    <li>О банке</li>
                    <li>ENG</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;