import { ChangeEvent, useCallback, useRef, useState } from "react";
import { SelectOption } from "../../shared/types/select";

interface UseSelectProps<T = HTMLElement> {
  loading: boolean | undefined;
}

interface InputProps {
  value: string;
  onChange: (e: ChangeEvent) => void;
}

type ToggleAction = 'close' | 'open';

interface SelectProps {
  toggleHandler: (action: ToggleAction) => void;
  selectHandler: (option: SelectOption) => void
}

interface UseSelectResult<T> {
  opened: boolean;
  selectActions: SelectProps;
  selected: SelectOption | null;
  //inputProps: InputProps;
}

export default function useSelect<T extends HTMLElement>(props: UseSelectProps<T>): UseSelectResult<T> {
  const select = useRef(props);

  const [search, setSearch] = useState<string>("");
  const [opened, setOpened] = useState<boolean>(false);
  const [selected, setSelected] = useState<SelectOption | null>(null)

  const searchHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearch(value)

    return value;
  }

  const toggleHandler = useCallback((action: ToggleAction) => {
    setOpened(action !== 'close');
  }, []);

  const selectHandler = (option: SelectOption) => {
    setSelected(option)
  };

  return {
    opened,
    selected,
    selectActions: {
      toggleHandler,
      selectHandler
    }
  }
}