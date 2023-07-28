import React from 'react';
import styles from "./SelectList.module.scss";
import filterByLabel from "../../../tools/filter";
import SelectEmpty from "../SelectEmpty/SelectEmpty";
import { SelectListProps } from "../../../shared/types/select";


export default function SelectList(props: SelectListProps) {
  const { option, filter, opened } = props;

  const { exist, options } = filterByLabel(props.options, filter);

  return (
    <div className={styles.Container} data-opened={opened} tabIndex={-1} role="listbox">
      {
        exist
          ? options.map(option)
          : <SelectEmpty />
      }
    </div>
  );
};

