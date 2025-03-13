import React, {useState, useEffect}from 'react';
import classes from './Credit.module.sass';
import { TextField, InputAdornment } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';

const Contribution = () => {
    const timeList = ['1 месяц','2 месяца','3 месяца','4 месяца','5 месяцев','6 месяцев','1 год','2 года','3 года','4 года','5 лет','6 лет','7 лет','8 лет','9 лет','10 лет'];
    const [amount, setAmount] = useState(100000); // Сумма кредита
    const [price, setPrice] = useState(18); // Процентная ставка (годовая ставка)
    const [months, setMonths] = useState(1); // Количество месяцев

    const calculateLoanPayment = (P, annualRate, months) => {
        const r = annualRate / 100; // Преобразуем годовую ставку в десятичное число
        const A = P * (1 + r * months/12); // Формула для простых процентов
        return A;
    };

    const handleChangeTime = (event, value) => {
      if (value) {
        let number = parseInt(value, 10);
        if (value.includes('год') || value.includes('лет')) {
          number *= 12; // Переводим годы в месяцы
        }
        setMonths(number);
      }
    };

    const handleChangeAmount = (event) => {
      const value = event.target.value;
      if (!isNaN(value) || value === '') {
        setAmount(Number(value));
      }
    };

    // Функция для расчета ежемесячного платежа, если все данные есть
    const getMonthlyPayment = () => {
      if (amount && price > 0 && months > 0) {
        return calculateLoanPayment(amount, price, months).toFixed(2);
      }
      return 0;
    };

    return (
        <div className={classes.Credit}>
            <div className={classes.CreditLeft}>
                <div>
                    <p>Сумма вклада</p>
                    <TextField
                      value={amount}
                      onChange={handleChangeAmount}
                      type="number"
                      InputProps={{
                        endAdornment: <span>c</span>, // можно использовать валютный символ
                      }}
                      variant="outlined"
                      sx={{ width: 300 }}
                    />
                </div>
                <div>
                    <p>Срок вклада</p>
                    <Autocomplete
                      options={timeList}
                      sx={{ width: 300 }}
                      onChange={handleChangeTime}
                      value={timeList[0]}
                      renderInput={(params) => <TextField {...params}/>}
                    />
                </div>
                <p className={classes.CreditLeftText}>Предварительный расчёт. Не является публичной офертой</p>
            </div>
            <div className={classes.CreditRight}>
                <p className={classes.CreditRightLabel}>Накопите к концу срока</p>
                <p className={classes.CreditRightPrice}>{getMonthlyPayment()} с</p>
                <button>Подать заявку</button>
            </div>
        </div>
    );
};

export default Contribution;