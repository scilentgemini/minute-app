"use client";

import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function MinuteForm() {
  const [meetingDate, setMeetingDate] = useState<Date | null>(null);

  return (
    <div className="p-4">
      <form
        action="/submit-minute"
        method="post"
        className="border rounded-md shadow-md p-4 flex flex-col space-y-4"
      >
        <h1 className="mb-4">Meeting Minutes</h1>
        <div className="flex flex-col space-y-4">
          <div className="flex items-center">
            <label
              htmlFor="meetingDate"
              className="text-sm font-medium text-gray-700 w-1/3"
            >
              Meeting Date and Time:
            </label>
            <DatePicker
              id="meetingDate"
              selected={meetingDate}
              onChange={(date: Date | null) => setMeetingDate(date)}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={15}
              dateFormat="MMMM d, yyyy h:mm aa"
              value={new Date().toLocaleString()}
              className="block w-2/3 border-purple-500 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              required
            />
            {/* Hidden input to send the selected date as a string */}
            <input
              type="hidden"
              name="meetingDate"
              value={meetingDate ? meetingDate.toISOString() : ""}
            />
          </div>
          <div className="flex items-center">
            <label
              htmlFor="venue"
              className="text-sm font-medium text-gray-700 w-1/3"
            >
              Venue:
            </label>
            <input
              type="text"
              name="venue"
              placeholder="Meeting Venue"
              className="block w-2/3 border-purple-500 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50 self-start"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
