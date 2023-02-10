import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { getMonth } from "date-fns";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";

const DateInput = ({
  id,
  name,
  label,
  value,
  selected,
  handleDate,
  minDate,
  maxDate,
}) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <Wrapper>
      <div className="date-wrap ">
        <label className="label label-md">{label} </label>
        <DatePicker
          renderCustomHeader={({
            date,
            monthDate,
            changeMonth,
            decreaseMonth,
            increaseMonth,
            prevMonthButtonDisabled,
            nextMonthButtonDisabled,
          }) => (
            <div
              style={{
                margin: 10,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <button
                type="button"
                className="date-controls date-controls-prev"
                onClick={decreaseMonth}
                disabled={prevMonthButtonDisabled}
              >
                <FontAwesomeIcon icon={faArrowUp} />
              </button>
              <span className="react-datepicker__current-month">
                {monthDate.toLocaleString("en-US", {
                  month: "long",
                  year: "numeric",
                })}
              </span>
              <select
                value={months[getMonth(date)]}
                onChange={({ target: { value } }) =>
                  changeMonth(months.indexOf(value))
                }
              >
                {months.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>

              <button
                type="button"
                className="date-controls date-controls-next"
                onClick={increaseMonth}
                disabled={nextMonthButtonDisabled}
              >
                <FontAwesomeIcon icon={faArrowDown} />
              </button>
            </div>
          )}
          value={value}
          name={name}
          placeholderText="mm / dd / yyyy"
          autoComplete="off"
          label={label}
          selected={value}
          minDate={minDate}
          maxDate={maxDate}
          onChange={(date) => handleDate(date, id)}
          className="input box-sm"
          calendarClassName="rasta-stripes"
          dateFormat="MM/dd/yyyy"
          monthsShown={1}
          formatWeekDay={(day) => day.toString().substr(0, 1)}
        >
          <div className="calendar-btn-ct">
            <p onClick={() => handleDate(null)}>Clear</p>
            <p onClick={() => handleDate(new Date())}>Today</p>
          </div>
        </DatePicker>
        <img
          src={process.env.PUBLIC_URL + "/assets/calendar-icon.png"}
          alt="calendar-icon"
          className="calendar-icon"
        />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .box-sm {
    width: 37.1rem;
    height: 4.8rem;
  }
  .box-lg {
    width: 79.8rem;
    height: 4.8rem;
  }
  .date-wrap {
    position: relative;
    width: 37.1rem;
  }
  .calendar-icon {
    position: absolute;
    right: 1.4rem;
    top: 50%;
  }
  .rasta-stripes {
    width: 16rem;
    height: 20.7rem;
    margin-top: -1.6rem;
    border: none;
    filter: drop-shadow(0px 4px 19px rgba(0, 0, 0, 0.17));
    border-radius: 0.4rem;
    position: relative;
    .react-datepicker__header {
      background-color: #ffffff;
      width: 16rem;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-between;
      height: 2.7rem;
      padding: 0.3rem;
      border: none;
      position: relative;
    }
    .react-datepicker__month-container {
      font-size: 0.8rem;
      font-family: inherit;

      .react-datepicker__month {
        padding: 0.4rem 0 0.4rem 0;
        margin-top: 2.4rem;
      }
    }

    .react-datepicker__day-name,
    .react-datepicker__day,
    .react-datepicker__time-name {
      margin-bottom: 0.32rem;
      width: 1.8rem;
    }
    .react-datepicker__day--selected {
      background-color: var(--blue);
      border: 1px solid black;
      border-radius: 1px;
    }
    select {
      width: 1.5rem;
      height: 0.5rem;
      border: none;
      margin-top: 0.2rem;
      cursor: pointer;
    }
    .date-controls {
      border: none;
      background-color: transparent;
      cursor: pointer;
      position: absolute;
      color: var(--pale-black);
      font-size: 1.4rem;
    }
    .date-controls-next {
      right: 1rem;
    }
    .date-controls-prev {
      right: 3rem;
    }
    .calendar-btn-ct {
      width: 13rem;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      p {
        color: var(--blue);
        cursor: pointer;
      }
      position: absolute;
      bottom: 0.7rem;
      left: 1.6rem;
    }
    .react-datepicker__triangle {
      display: none;
    }
    .react-datepicker__input-container {
      margin-bottom: 0;
    }
  }
  .label-md {
    line-height: 3.4rem;
  }
`;
export default DateInput;
