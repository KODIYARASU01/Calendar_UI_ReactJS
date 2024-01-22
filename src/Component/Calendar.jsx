import React, { useState } from "react";
import "./Calendar.scss";
import { generateDate } from "../utils/calendar";
import cn from "../utils/cn";
import dayjs from "dayjs";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

import { months } from "../utils/calendar";
const Calendar = () => {
  let days = ["S", "M", "T", "W", "T", "F", "S"];
  let currentDate = dayjs();

  let [today, setToday] = useState(currentDate);
  let [selectDate, setSelectDate] = useState(currentDate);
  return (
    <>
      <div className="calendar_container">
        <div className="container">
          <div className="top_detail">
            <div className="current_details">
              <p>
                {months[today.month()]},{today.year()}{" "}
              </p>
            </div>

            <div className="actions">
              <GrFormPrevious
                onClick={() => {
                  setToday(today.month(today.month() - 1));
                }}
                className="icon"
              />
              <p
                onClick={() => {
                  setToday(currentDate);
                }}
              >
                Today
              </p>
              <GrFormNext
                onClick={() => {
                  setToday(today.month(today.month() + 1));
                }}
                className="icon"
              />
            </div>
          </div>
          <div className="days">
            {days.map((day, index) => {
              return <p key={index}>{day}</p>;
            })}
          </div>
          <div className="dates">
            {generateDate(today.month(), today.year()).map(
              ({ date, currentMonth, today }, index) => (
                <div key={index}>
                  <p
                    className={cn(
                      currentMonth ? "" : "prev-month",
                      today ? "current_day" : "",
                      selectDate.toDate().toString() ===
                        date.toDate().toString()
                        ? "current_day"
                        : ""
                    )}
                    id="date"
                    onClick={() => setSelectDate(date)}
                  >
                    {date.date()}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
        <div className="current_calendar_date">
          <p>{selectDate.toDate().toString()}</p>
        </div>
      </div>
    </>
  );
};

export default Calendar;
