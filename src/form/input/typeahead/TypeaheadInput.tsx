import React, {useEffect} from "react";
import classNames from "classnames";

import Input from "../Input";
import useDebounce from "../../../core/utils/hooks/debounce";

export interface TypeaheadInputProps {
  onQueryChange: (value: string) => void;
  value?: string;
  testid?: string;
  customClassName?: string;
  id?: string;
  name: string;
  isDisabled?: boolean;
  initialValue?: string;
  placeholder: string;
  queryChangeDebounceTimeout?: number;
  onFocus?: React.ReactEventHandler<HTMLInputElement>;
  onBlur?: React.ReactEventHandler<HTMLInputElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  role?: string;
  children?: React.ReactNode;
  inputContainerRef?: React.RefObject<HTMLDivElement>;
}

const DEFAULT_DEBOUNCE_TIMEOUT = 250;

function TypeaheadInput(props: TypeaheadInputProps) {
  const {
    testid,
    placeholder,
    name,
    customClassName,
    onFocus,
    onBlur,
    id,
    role,
    onKeyDown,
    onQueryChange,
    isDisabled = false,
    leftIcon,
    rightIcon,
    initialValue = "",
    value,
    queryChangeDebounceTimeout = DEFAULT_DEBOUNCE_TIMEOUT,
    inputContainerRef
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
      inputContainerRef={inputContainerRef}
      customClassName={classNames("typeahead-input", customClassName)}
      id={id}
      testid={testid}
      name={name}
      placeholder={placeholder}
      onChange={handleInputChange}
      onFocus={onFocus}
      onBlur={onBlur}
      onKeyDown={onKeyDown}
      value={inputValue}
      isDisabled={isDisabled}
      leftIcon={leftIcon}
      rightIcon={rightIcon}
      role={role}
    />
  );

  function handleInputChange(event: React.SyntheticEvent<HTMLInputElement>) {
    setInputValue(event.currentTarget.value);
  }
}

export default TypeaheadInput;
