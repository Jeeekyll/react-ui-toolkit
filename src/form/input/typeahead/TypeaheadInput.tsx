import React, {useEffect} from "react";
import classNames from "classnames";

import Input from "../Input";
import {InputProps, InputTypes} from "../util/inputTypes";
import useDebounce from "../../../core/utils/hooks/useDebounce";

export type TypeaheadInputProps = Omit<InputProps, "onChange" | "type"> & {
  onQueryChange: (value: string) => void;
  type?: Extract<InputTypes, "text" | "number">;
  initialValue?: string;
  queryChangeDebounceTimeout?: number;
  onFocus?: React.ReactEventHandler<HTMLInputElement>;
  onBlur?: React.ReactEventHandler<HTMLInputElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children?: React.ReactNode;
};

const DEFAULT_DEBOUNCE_TIMEOUT = 250;

const TypeaheadInput = React.forwardRef<HTMLInputElement, TypeaheadInputProps>(
  (props, ref) => {
    const {
      testid,
      placeholder,
      name,
      type = "text",
      customClassName,
      onFocus,
      onBlur,
      id,
      onKeyDown,
      onQueryChange,
      isDisabled = false,
      leftIcon,
      rightIcon,
      initialValue = "",
      value,
      queryChangeDebounceTimeout = DEFAULT_DEBOUNCE_TIMEOUT,
      ...otherProps
    } = props;

    const [inputValue, setInputValue] = useDebounce(
      onQueryChange,
      initialValue,
      queryChangeDebounceTimeout
    );

    useEffect(() => {
      if (typeof value === "string") {
        setInputValue(value);
      }
    }, [value, setInputValue]);

    return (
      <Input
        ref={ref}
        customClassName={classNames("typeahead-input", customClassName)}
        id={id}
        testid={testid}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={handleInputChange}
        onFocus={onFocus}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
        value={inputValue}
        isDisabled={isDisabled}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        {...otherProps}
      />
    );

    function handleInputChange(event: React.SyntheticEvent<HTMLInputElement>) {
      setInputValue(event.currentTarget.value);
    }
  }
);

export default TypeaheadInput;
