import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { connect } from 'react-redux';
import s from './DateComponent.module.css'

let DateComponent = (className, num) => {
    const [startDate, setStartDate] = useState(new Date("2014/02/08"));
    const [endDate, setEndDate] = useState(new Date("2014/02/10"));
    return (
      <div className={s.date_wrapper} >
        <DatePicker
          selected={startDate}
          onChange={date => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          monthsShown={2}
          shouldCloseOnSelect={false}
          calendarClassName={s.calendar + " " + s.calendar1}
        />
        <DatePicker
          selected={endDate}
          onChange={date => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          monthsShown={2}
          calendarClassName={s.calendar + " " + s.calendar2}
        />
      </div>
    )
}

const mStP = (state) => {

    return {

        date: state.hotel.date

    }

}

export default connect(mStP, {})(DateComponent);