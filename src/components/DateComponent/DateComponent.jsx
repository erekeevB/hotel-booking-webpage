import React, { useRef } from 'react';
import DatePicker from 'react-datepicker';
import { connect } from 'react-redux';
import { setDate } from '../../redux/hotelReducer';
import s from './DateComponent.module.css'

let DateComponent = ({className, num, setDate, startDate, endDate}) => {
    const dateRef = useRef();

    return (
        <div className={s.date_wrapper} >
            <DatePicker
                selected={startDate}
                onChange={date => {
                    console.log(date)
                    setDate(date, 1)
                }}
                onSelect={() => dateRef.current.deferFocusInput()}
                selectsStart
                startDate={startDate}
                endDate={endDate}
                monthsShown={2}
                calendarClassName={s.calendar + " " + s.calendar1}
                showDisabledMonthNavigation
                minDate={new Date()}
            />
            <DatePicker
                ref={dateRef} 
                selected={endDate}
                onChange={date => setDate(date, 0)}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={new Date()}
                monthsShown={2}
                calendarClassName={s.calendar + " " + s.calendar2}
                showDisabledMonthNavigation
            />
        </div>
    )
}

const mStP = (state) => {

    return {

        startDate: state.hotel.input.startDate,
        endDate: state.hotel.input.endDate

    }

}

export default connect(mStP, {setDate})(DateComponent);