import { ReactElement, useEffect, useRef, useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import { TextField } from "@mui/material";
import { useThemeContext } from "@/theme/ThemeContextProvider";
import ThemedIcon from "@/components/ThemedIcon";
import ArrowIcon from "@/assets/icons/arrowDown.svg?react";
import { enGB } from "date-fns/locale/en-GB";
import isFutureDate from "@/utils/isFutureDate";
import { useSearchParams } from "react-router-dom";
import { UpworkFeedSearchBy } from "@/common/enums/upwork-feed/upwork-feed-search-by.enum";
import SortDirectionButton from "@/views/UpworkFeed/UpworkFeedTable/TableFooter/SortDirectionButton";
import getAbbreviatedWeekday from "@/utils/getAbbreviatedWeekday";
import formatDateRange from "@/utils/formatDateRange";
import colors from "@/styles/colors.module.scss";

registerLocale("enGB", enGB);

function PublishedInput(): ReactElement {
  const { mode } = useThemeContext();
  const datePickerRef = useRef<DatePicker>(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const publishedParam = searchParams.get(UpworkFeedSearchBy.Published);

  const [startDate, setStartDate] = useState<Date | undefined>(undefined);
  const [endDate, setEndDate] = useState<Date | undefined>(undefined);

  useEffect(() => {
    if (publishedParam) {
      const dates = publishedParam
        .split(" - ")
        .map((dateStr) => new Date(dateStr));
      if (dates.length === 2) {
        setStartDate(dates[0]);
        setEndDate(dates[1]);
      } else if (dates.length === 1) {
        setStartDate(dates[0]);
      }
    }
  }, [publishedParam]);

  const handleFocus = (): void => {
    if (datePickerRef.current) {
      datePickerRef.current.setOpen(true);
    }
  };

  const handleChange = (dates: [Date | null, Date | null]): void => {
    const [newStartDate, newEndDate] = dates;
    setStartDate(newStartDate || undefined);
    setEndDate(newEndDate || undefined);
    if (newStartDate && newEndDate) {
      const formattedDate = formatDateRange(newStartDate, newEndDate);
      const newParams = new URLSearchParams(searchParams);
      newParams.set(UpworkFeedSearchBy.Published, formattedDate);
      setSearchParams(newParams);
    }
  };

  const isDateSelected = (date: Date): boolean | undefined => {
    return (
      (startDate && date.toDateString() === startDate.toDateString()) ||
      (endDate && date.toDateString() === endDate.toDateString())
    );
  };

  return (
    <div className="px-2 flex flex-col ">
      <div className="flex flex-row justify-between items-center mb-8">
        <h4>Published</h4>
        <SortDirectionButton />
      </div>
      <DatePicker
        selectsRange
        startDate={startDate}
        endDate={endDate}
        ref={datePickerRef}
        dateFormat="MM/dd/yyyy"
        formatWeekDay={getAbbreviatedWeekday}
        onChange={handleChange}
        locale="enGB"
        calendarClassName={`p-4 shadow-drop rounded-xl  ${
          mode === "light" ? "bg-white" : "bg-black-100"
        }`}
        dayClassName={(date) =>
          "w-10 h-10 flex cursor-pointer items-center justify-center" +
          " rounded-2 hover:border-2 hover:border-light" +
          (isFutureDate(date) && " disable-date") +
          (isDateSelected(date)
            ? " border-2 border-light"
            : " hover:border-2 hover:border-light")
        }
        previousMonthButtonLabel={
          <ThemedIcon
            icon={<ArrowIcon />}
            lightFill={colors.gray600}
            className="transform rotate-90"
          />
        }
        nextMonthButtonLabel={
          <ThemedIcon
            icon={<ArrowIcon />}
            lightFill={colors.gray600}
            className="transform -rotate-90"
          />
        }
        customInput={
          <TextField
            type="text"
            onFocus={handleFocus}
            className="w-full"
            slotProps={{
              input: {
                sx: {
                  borderRadius: "8px",
                },
              },
            }}
          />
        }
      />
    </div>
  );
}

export default PublishedInput;
