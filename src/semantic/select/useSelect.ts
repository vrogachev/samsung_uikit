import { ISelectOption } from "../../shared/types/select";
import {ChangeEvent, HTMLAttributes, RefObject, useCallback, useEffect, useMemo, useRef, useState} from "react";
import {SharedInputElement} from "../../shared/types/input";

type ToggleAction = 'close' | 'open';

interface UseSelectProps<T = HTMLElement>  {
  loading?: boolean;
  disabled?: boolean;
  placeholder?: string;
  searchable?: boolean;
  onChange?: (option: ISelectOption) => void;
}

interface SelectProps {
  toggleHandler: (action: ToggleAction) => void;
  selectHandler: (option: ISelectOption) => void
}

interface UseSelectResult<T> {
  opened: boolean;
  search: string;
  selectActions: SelectProps;
  selected: ISelectOption | null;
  searchProps: HTMLAttributes<HTMLElement>;
  selectProps: HTMLAttributes<HTMLElement>;
}

export default function useSelect<T extends HTMLElement>(
  props: UseSelectProps<T>,
  inputRef: RefObject<HTMLInputElement | HTMLTextAreaElement>
): UseSelectResult<T> {
  const selectRef = useRef<UseSelectProps>(props);

  selectRef.current = {
    ...props,
    disabled: props.disabled || props.loading
  };

  const [search, setSearch] = useState<string>("");
  const [opened, setOpened] = useState<boolean>(false);
  const [selected, setSelected] = useState<ISelectOption | null>(null)

  const toggleHandler = useCallback((action: ToggleAction) => {
    setOpened(action !== 'close');
  }, []);

  const selectHandler = (option: ISelectOption) => {
    setSelected(option);

    if (props?.onChange) {
      props?.onChange(option);
    }

    const timeOut = setTimeout(
      () => setSearch(""),
      300);

    return () => clearTimeout(timeOut);
  };

  const selectProps = useMemo(() => {
    const props: HTMLAttributes<HTMLElement> = {};

    props.onClick = (e) => {
      const { disabled } = selectRef.current;

      if (disabled) return;

      toggleHandler('open')
    }

    return props;
  }, [])

  const searchProps = useMemo(() => {
    const props: SharedInputElement<HTMLInputElement> = {
      placeholder: selectRef.current.placeholder
    };


    props.onChange = (event: ChangeEvent<HTMLInputElement>) => {
      const { disabled } = selectRef.current;

      if (disabled) return;

      const { value } = event.target;

      setSearch(value)
    }

    props.onFocus = () => {
      const { disabled } = selectRef.current;

      if (disabled) return;

      props['data-focused'] = true;

      setSelected(null);
    }

    props.onPointerLeave = () => {
      const { disabled } = selectRef.current;

      if (disabled) return;

      props['data-focused'] = false;
    }

    return props;
  }, []);

  useEffect(() => {
    if (inputRef.current) {
      const syntheticEvent = Object.create({})
      syntheticEvent.target = inputRef.current
      syntheticEvent.currentTarget = inputRef.current
      inputRef.current.value = selected?.label ?? "";
    }

    toggleHandler('close');
  }, [selected]);

  return {
    opened,
    search,
    selected,
    selectProps,
    searchProps,
    selectActions: {
      toggleHandler,
      selectHandler
    }
  }
}
