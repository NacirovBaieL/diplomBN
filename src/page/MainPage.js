import React, {useState,useEffect}from 'react';
import classes from "./MainPage.module.sass";
import Header from '../components/Header';
import Card from '../components/Card';
import { ReactComponent as CardIcon} from "../images/iconCard.svg"
import { ReactComponent as HouseIcon} from "../images/iconHouse.svg"
import { ReactComponent as InvestIcon} from "../images/iconInvest.svg"
import { ReactComponent as PhoneIcon} from "../images/iconPhone.svg"
import { ReactComponent as USDIcon} from "../images/iconUSA.svg"
import { ReactComponent as EuroIcon} from "../images/iconEuro.svg"
import { ReactComponent as TurkeyIcon} from "../images/iconTurkey.svg"
import { ReactComponent as ChinaIcon} from "../images/iconChina.svg"
import { ReactComponent as BankIcon} from "../images/iconBank.svg"
import { ReactComponent as PointIcon} from "../images/iconPoint.svg"
import { ReactComponent as IngotsIcon} from "../images/iconIngots.svg"
import { ReactComponent as CardMiniIcon} from "../images/iconCardMini.svg"
import { ReactComponent as PercentIcon} from "../images/iconPercent.svg"
import { ReactComponent as CardMainIcon} from "../images/iconCardMain.svg"
import { ReactComponent as CardSecondIcon} from "../images/iconCardSecond.svg"
import { ReactComponent as CalendarIcon} from "../images/IconCalendar.svg"
import CardMini from '../components/CardMini';
import Footer from '../components/Footer';
import{Tabs, Tab, Box} from "@mui/material";
import { TabContext, TabList, TabPanel } from '@mui/lab';
import Credit from '../components/Credit';
import Contribution from '../components/Contribution';
import Mortgage from '../components/Mortgage';
// import { Tab, Tabs } from '@mui/material';
const MainPage = () => {
    const cardData = [
        {btnText: "Карты",mainText: "35% кэшбэк на все самое важное",secondText: "и новая категория каждый месяц",Icon: CardIcon},
        {btnText: "Ипотека",mainText: "Ипотека с низким платежом",secondText: "без комиссии за обслуживание",Icon: HouseIcon},
        {btnText: "Сбережения",mainText: "Вклад на 6 месяцов до 24%",secondText: "лучшая ставка после 4-го месяца",Icon: InvestIcon}
    ];
    const currencies = [
        { name: "Доллар", code: "USD", buy: 89.50, sell: 90.20, icon: <USDIcon /> },
        { name: "Евро", code: "EUR", buy: 97.30, sell: 98.10, icon: <EuroIcon /> },
        { name: "Китайский юань", code: "CNY", buy: 12.40, sell: 12.90, icon: <ChinaIcon /> },
        { name: "Турецкая лира", code: "TRY", buy: 2.80, sell: 3.10, icon: <TurkeyIcon /> }
    ];
    const cardsData = [
        { type: "Дебетовые карты", label: "ТенирКарта", Icon: CardMiniIcon, Illustration: CardMainIcon},
        { type: "Кредиты", label: "Деньги до зарплаты", Icon: PercentIcon, Illustration: CalendarIcon},
        { type: "Дебетовые карты", label: "Молодежная ТенирКарта", Icon: CardMiniIcon, Illustration: CardSecondIcon}
    ];
    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return (
        <div className={classes.Main}>
            <Header/>
            <div className={classes.MainCards}>
                {cardData.map((item, index) => (
                    <Card key={index}btnText={item.btnText} mainText={item.mainText} secondText={item.secondText} Icon={item.Icon}/>
                ))}
            </div>
            <div className={classes.MainPhone}>
                <div className={classes.MainPhoneLeft}>
                    <p className={classes.MainPhoneLeftLabel}>Установите ТенирБанк олайн на телефон</p>
                    <p className={classes.MainPhoneLeftText}>Загрузите приложение в офисе банка или скачате его самостоятельно</p>
                    <div className={classes.MainPhoneLeftBtns}>
                        <button>Установить на Android</button>
                        <button>Установить на IOS</button>
                    </div>
                </div>
                <PhoneIcon className={classes.MainPhoneIcon}/>
            </div>
            <div className={classes.MainCalculation}>
                <div className={classes.MainCalculationInner}>
                    <p className={classes.MainCalculationInnerLabel}>Поможем расчитать</p>
                    <Box sx={{ width: '290px', typography: 'body1' }}>
                        <TabContext value={value}>
                          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList onChange={handleChange} aria-label="lab API tabs example">
                              <Tab label="Кредит" value="1" />
                              <Tab label="Вклад" value="2" />
                              <Tab label="Ипотека" value="3" />
                            </TabList>
                          </Box>
                        </TabContext>
                    </Box>
                </div>
                
                {value==1?<Credit/>:value==2?<Contribution/>:<Mortgage/>}
                {console.log(value)}
            </div>
            <div className={classes.MainRates}>
                <div className={classes.MainRatesLeft}>
                    <p className={classes.MainRatesLeftLabel}>Курсы валют в офисах</p>
                    <ul className={classes.MainRatesLeftRates}>
                        {currencies.map((currency, index,) => (
                            <li key={index} className={classes.MainRatesLeftRatesRate}>
                                <div className={classes.MainRatesLeftRatesRateTop}>
                                    <div className={classes.MainRatesLeftRatesRateTopImage}>{currency.icon}</div>
                                    <p className={classes.MainRatesLeftRatesRateTopСurrency}>{currency.code}</p>
                                </div>
                                <div className={classes.MainRatesLeftRatesRateBottom}>
                                    <p className={classes.MainRatesLeftRatesRateBottomMax}>{currency.buy}</p>
                                    <p className={classes.MainRatesLeftRatesRateBottomMin}>{currency.sell}</p>
                                </div>
                            </li>
                         ))}
                    </ul>
                    <div>
                        <p className={classes.MainRatesLeftText}>Актуально на 17:50 по Бишкеку, 17 февраля 2025 г.</p>
                        <p className={classes.MainRatesLeftText}>Курсы в ТенирБанк Онлайн и разных офисах банка отличаются.</p>
                    </div>     
                </div>
                <button className={classes.MainRatesCenter}>
                    <IngotsIcon className={classes.MainRatesCenterIcon}/>
                    <p>Курсы металлов</p>
                </button>
                <div className={classes.MainRatesRight}>
                    <button className={classes.MainRatesRightBtn}>
                        <BankIcon className={classes.MainRatesRightBtnBank}/>
                        <p>Отделение</p>
                    </button>
                    <button className={classes.MainRatesRightBtn}>
                        <PointIcon className={classes.MainRatesRightBtnPoint}/>
                        <p>Банкоматы</p>
                    </button>
                </div>
            </div>
            <div className={classes.MainFavorite}>
                <p className={classes.MainFavoriteLabel}>Вам может понравиться</p>
                <div className={classes.MainFavoriteInner}>
                    {cardsData.map((card, index) => (
                        <CardMini key={index} type={card.type} label={card.label} Icon={card.Icon} Iliustration={card.Illustration}/>
                    ))}
                </div>
            </div>
            <Footer/>
        </div>
    );
};
export default MainPage;