import {ISelectOption} from "../shared/types/select";

type FilterOptionsResult = {
  exist: boolean;
  options: ISelectOption[];
};

export default function filterByLabel(options: ISelectOption[], filter: string): FilterOptionsResult {
  const filteredOptions = options.filter(item => item.label.toLowerCase().includes(filter.toLowerCase()));
  const filteredExist = filteredOptions.length > 0;

  return {
    exist: filteredExist,
    options: filteredOptions
  }
}
