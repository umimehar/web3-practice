import React, { useState } from "react";
import { Box, Flex, IconButton } from "@chakra-ui/react";
import ReactDatePicker, { ReactDatePickerProps } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Heading } from "@chakra-ui/react";
import { Input, InputProps, InputGroup, InputRightElement } from "../Input";
// import { Icon } from '../Icon';

const DatePickerHeader: DatePickerProps["renderCustomHeader"] = ({
  date,
  decreaseMonth,
  increaseMonth,
}) => {
  const monthName = date.toLocaleString("default", {
    month: "long",
    year: "numeric",
  });

  return (
    <Flex alignItems="center" justifyContent="space-between" mb="lg">
      <IconButton
        variant="ghost"
        size={"sm"}
        aria-label="Previous Month"
        // icon={<Icon icon='chevron-left' color='neutral.black' />}
        onClick={decreaseMonth}
      />
      <Heading variant="h6" fontWeight="regular">
        {monthName}
      </Heading>
      <IconButton
        variant="ghost"
        size={"sm"}
        aria-label="Next Month"
        // icon={<Icon icon='chevron-right' color='neutral.black' />}
        onClick={increaseMonth}
      />
    </Flex>
  );
};

interface DatePickerInputProps extends InputProps {
  onlyOpenCalenderOnIconClick: boolean;
  setCalenderOpen: (v: boolean) => void;
}
const DatePickerInput = React.forwardRef<
  HTMLInputElement,
  DatePickerInputProps
>((props, ref) => {
  const { onlyOpenCalenderOnIconClick, setCalenderOpen, ...restProps } = props;
  return (
    <InputGroup>
      <Input ref={ref} {...restProps} />
      <InputRightElement>
        {onlyOpenCalenderOnIconClick ? (
          <IconButton
            variant="ghost"
            size={"sm"}
            aria-label="Open Calender"
            // icon={<Icon icon='calendar' color='neutral.800' boxSize='sm' />}
            onClick={() => setCalenderOpen(true)}
          />
        ) : (
          <>Icon</>
          // <Icon icon='calendar' color='neutral.800' boxSize='sm' />
        )}
      </InputRightElement>
    </InputGroup>
  );
});

export interface DatePickerProps<Modifiers extends string = string>
  extends ReactDatePickerProps<Modifiers> {
  inputProps?: Partial<InputProps>;
  onlyOpenCalenderOnIconClick?: boolean;
}

const DatePicker = ({
  inputProps = {},
  onlyOpenCalenderOnIconClick = false,
  onSelect,
  ...rest
}: DatePickerProps): React.ReactElement => {
  const [calenderOpen, setCalenderOpen] = useState<boolean>(
    !onlyOpenCalenderOnIconClick
  );

  return (
    <Box
      __css={{
        ".react-datepicker": {
          borderColor: "neutral.400",
          borderRadius: "md",
          borderWidth: "0.5px",
          boxShadow: "dropdown",
          fontFamily: "body",
        },
        ".react-datepicker__header": {
          backgroundColor: "neutral.white",
          border: "none",
          padding: "none",
          margin: "xl",
        },
        ".react-datepicker__day-name": {
          color: "neutral.800",
          fontSize: "sm",
          lineHeight: "22px",
          letterSpacing: "base",
          width: "md",
          margin: "none",
          _notLast: {
            mr: "xl",
          },
        },
        ".react-datepicker__day": {
          color: "neutral.black",
          lineHeight: "22px",
          letterSpacing: "base",
          fontSize: "md",
          fontWeight: "bold",
          width: "md",
          margin: "none",
          mb: "md",
          _notLast: {
            mr: "xl",
          },
          _hover: {
            backgroundColor: "neutral.400",
            borderRadius: "2px",
          },
        },
        ".react-datepicker__day--selected, .react-datepicker__day--keyboard-selected":
          {
            color: "neutral.white",
            backgroundColor: "primary.400",
            borderRadius: "2px",
            _hover: {
              backgroundColor: "primary.400",
            },
          },
        ".react-datepicker__day--selected": {
          color: "white !important",
        },
        ".react-datepicker__day--weekend, .react-datepicker__day--outside-month":
          {
            color: "text.secondary",
            fontWeight: "normal",
          },
      }}
    >
      <ReactDatePicker
        dateFormat="dd/MM/yyyy"
        open={onlyOpenCalenderOnIconClick ? calenderOpen : undefined}
        customInput={
          <DatePickerInput
            {...inputProps}
            onlyOpenCalenderOnIconClick={onlyOpenCalenderOnIconClick}
            setCalenderOpen={setCalenderOpen}
          />
        }
        onClickOutside={
          onlyOpenCalenderOnIconClick
            ? () => {
                setCalenderOpen(false);
              }
            : undefined
        }
        onSelect={(date, e) => {
          setCalenderOpen(false);
          if (onSelect !== undefined) {
            onSelect(date, e);
          }
        }}
        renderCustomHeader={DatePickerHeader}
        showPopperArrow={false}
        {...rest}
      />
    </Box>
  );
};

export default DatePicker;
