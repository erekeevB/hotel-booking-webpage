import React, { useRef } from 'react';
import DatePicker from 'react-datepicker';
import s from './DateComponent.module.css'

let DateComponent = ({num, setDate, startDate, endDate, firstDateHeader, secondDateHeader, className}) => {
    const dateRef1 = useRef();
    const dateRef2 = useRef();

    return (
        <div className={s.date_wrapper} >
            <div className={className} onClick={()=>dateRef1.current.deferFocusInput()}>
                <div>{firstDateHeader}</div>
                <div>
                    <DatePicker
                        ref={dateRef1}
                        selected={startDate}
                        onChange={date => setDate(date, 1)}
                        onSelect={() => dateRef2.current.deferFocusInput()}
                        selectsStart
                        startDate={startDate}
                        endDate={endDate}
                        monthsShown={2}
                        calendarClassName={s.calendar + " " + s.calendar1}
                        showDisabledMonthNavigation
                        minDate={new Date()}
                        dateFormat='dd/MM/yyyy'
                        placeholderText='Checkin Date'
                    />
                </div>
            </div>
            <div className={className} onClick={()=>dateRef2.current.deferFocusInput()}>
                <div>{secondDateHeader}</div>
                <div>
                    <DatePicker
                        ref={dateRef2} 
                        selected={endDate}
                        onChange={date => setDate(date, 0)}
                        selectsEnd
                        startDate={startDate}
                        endDate={endDate}
                        minDate={new Date()}
                        monthsShown={2}
                        calendarClassName={s.calendar + " " + s.calendar2}
                        showDisabledMonthNavigation
                        dateFormat='dd/MM/yyyy'
                        placeholderText='Checkout Date'
                    />
                </div>
            </div>
        </div>
    )
}

export default DateComponent;