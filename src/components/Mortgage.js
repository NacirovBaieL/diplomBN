import React, { useState } from 'react';
import classes from './Credit.module.sass';
import { TextField } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';

const Mortgage = () => {
    const timeList = ['1 месяц', '2 месяца', '3 месяца', '4 месяца', '5 месяцев', '6 месяцев', '1 год', '2 года', '3 года', '4 года', '5 лет', '6 лет', '7 лет', '8 лет', '9 лет', '10 лет'];

    const [amount, setAmount] = useState(1000000); // Общая сумма кредита
    const [initialPayment, setInitialPayment] = useState(0); // Первоначальный взнос
    const [months, setMonths] = useState(1); // Количество месяцев
    const [selectedTime, setSelectedTime] = useState(timeList[0]); // Срок, начальное значение - "1 месяц"
    const fixedRate = 30; // Фиксированная процентная ставка
  
    // Функция расчета ежемесячного платежа (с учетом первоначального взноса)
    const calculateLoanPayment = (P, annualRate, months) => {
      const loanAmount = P - initialPayment; // Вычитаем первоначальный взнос из общей суммы
      const r = annualRate / 12 / 100; // Преобразуем годовую ставку в месячную
      const A = (loanAmount * r * Math.pow(1 + r, months)) / (Math.pow(1 + r, months) - 1); // Формула для аннуитетного платежа
      return A;
    };
  
    const handleChangeTime = (event, value) => {
      if (value) {
        setSelectedTime(value); // Сохраняем выбранное значение
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
  
    const handleChangeInitialPayment = (event) => {
      const value = event.target.value;
      if (!isNaN(value) || value === '') {
        setInitialPayment(Number(value));
      }
    };
  
    // Функция для расчета ежемесячного платежа, если все данные есть
    const getMonthlyPayment = () => {
      if (amount && fixedRate > 0 && months > 0) {
        return calculateLoanPayment(amount, fixedRate, months).toFixed(2);
      }
      return 0;
    };
  
    return (
      <div className={classes.Credit}>
        <div className={classes.CreditLeft}>
          <div>
            <p>Сколько вам нужно</p>
            <TextField
              value={amount}
              onChange={handleChangeAmount}
              type="number"
              InputProps={{
                endAdornment: <span>₽</span>, // Валютный символ
              }}
              variant="outlined"
              sx={{ width: 300 }}
            />
          </div>
          <div>
            <p>Первоначальный взнос</p>
            <TextField
              value={initialPayment}
              onChange={handleChangeInitialPayment}
              type="number"
              InputProps={{
                endAdornment: <span>₽</span>, // Валютный символ
              }}
              variant="outlined"
              sx={{ width: 300 }}
            />
          </div>
          <div>
            <p>На срок</p>
            <Autocomplete
              options={timeList}
              sx={{ width: 300 }}
              value={selectedTime} // Используем значение из состояния
              onChange={handleChangeTime}
              renderInput={(params) => <TextField {...params} />}
            />
          </div>
          <p className={classes.CreditLeftText}>Предварительный расчёт. Не является публичной офертой</p>
        </div>
        <div className={classes.CreditRight}>
          <p className={classes.CreditRightLabel}>Ежемесячный платёж</p>
          <p className={classes.CreditRightPrice}>{getMonthlyPayment()} ₽</p>
          <button>Подать заявку</button>
        </div>
      </div>
    );
  };

export default Mortgage;
