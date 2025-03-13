import React from 'react';
import classes from './Footer.module.sass';
import { ReactComponent as TargetIcon} from "../images/iconTarget.svg"
import { ReactComponent as TGIcon} from "../images/IconTelegram.svg"
import { ReactComponent as VKIcon} from "../images/iconVk.svg"
const Footer = () => {
    return (
        <div className={classes.Footer}>
            <div className={classes.FooterInner}>
                <div className={classes.FooterInnerLeft}>
                    <div className={classes.FooterInnerLeftTop}>
                        <TargetIcon className={classes.FooterInnerLeftTopIcon}/>
                        <p>Бишкек</p>
                    </div>
                    <div className={classes.FooterInnerLeftNumbers}>
                        <div>
                            <p className={classes.FooterInnerLeftNumbersText}>Частым лицам</p>
                            <p className={classes.FooterInnerLeftNumbersNum}>+996 550 000-000</p>
                        </div>
                        <div>
                            <p className={classes.FooterInnerLeftNumbersText}>Бизнесу</p>
                            <p className={classes.FooterInnerLeftNumbersNum}>+996 550 000-000</p>
                        </div>
                    </div>
                    <div className={classes.FooterInnerLeftIcons}>
                        <TGIcon className={classes.FooterInnerLeftIconsIcon}/>
                        <VKIcon className={classes.FooterInnerLeftIconsIcon}/>
                    </div>
                </div>
                <div className={classes.FooterInnerRight}>
                    <div className={classes.FooterInnerRightArr}>
                        <p className={classes.FooterInnerRightArrLabel}>Сервисы</p>
                        <ul>
                            <li>Курсы валют</li>
                            <li>Курсы металлов</li>
                            <li>Отделение</li>
                            <li>Банкоматы</li>
                        </ul>
                    </div>
                    <div className={classes.FooterInnerRightArr}>
                        <p className={classes.FooterInnerRightArrLabel}>Банк</p>
                        <ul>
                            <li>О банке</li>
                            <li>Вакансии</li>
                            <li>Реквизиты</li>
                        </ul>
                    </div>
                    <div className={classes.FooterInnerRightArr}>
                        <p className={classes.FooterInnerRightArrLabel}>Поддержка</p>
                        <ul>
                            <li>Обратная связь</li>
                            <li>Безопасность</li>
                            <li>Реквизиты</li>
                        </ul>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Footer;