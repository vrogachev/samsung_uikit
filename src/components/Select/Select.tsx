import styles from "./Select.module.scss";
import Icon from "../Icon/Icon";
import SelectList from "./SelectList/SelectList";
import React, { createRef, FC, useRef } from "react";
import SelectSearch from "./SelectSearch/SelectSearch";
import SelectOption from "./SelectOption/SelectOption";
import useSelect from "../../semantic/select/useSelect";
import { SharedSelectProps} from "../../shared/types/select";
import useOutsideClick from "../../interactions/outside-click/useOutsideClick";

const Select:FC<SharedSelectProps> = (props) => {
  const { options, disabled = false } = props;
  const selectRef = useRef(null);
  const inputRef = createRef<HTMLInputElement>();

  const { selectProps, searchProps, selectActions, opened, search } = useSelect(props, inputRef);

  useOutsideClick(selectRef, () => selectActions.toggleHandler('close'));

  return (
    <div className={styles.Select} ref={selectRef} {...selectProps}>
        {opened ? (
            <Icon name="search" className={styles.Search} />
        ) : (
            <Icon name="arrowDropDown" className={styles.Arrow} />
        )}
      <SelectSearch ref={inputRef} {...searchProps} />
      <SelectList
        filter={search}
        opened={opened}
        options={options}
        option={option => (
          <SelectOption
            option={option}
            key={option.value}
            onChange={selectActions.selectHandler}
          />
        ) }
      />
    </div>
  );
};

export default Select;
