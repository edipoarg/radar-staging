import styles from "./DateSelectionInputs.module.css";
import ReactPopup from "reactjs-popup";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import type { MinAndMaxDates } from "../../helpers/minAndMaxDates";
import {
  getMaxDateMillisFromJsMaxDate,
  getMinAndMaxJsDatesFromDates,
  getMinDateMillisFromJsMinDate,
} from "../../helpers/minAndMaxDates";

type Props = {
  className: string;
  setDates: (newDates: MinAndMaxDates) => void;
  minAndMaxSelectedDates: MinAndMaxDates;
};

export const DateSelectionInputs = ({
  className,
  minAndMaxSelectedDates,
  setDates,
}: Props) => {
  const { min, max } = getMinAndMaxJsDatesFromDates(minAndMaxSelectedDates);

  const setSelectedMaxDate = (newMaxDate: Date): void => {
    setDates({
      min: minAndMaxSelectedDates.min,
      max: getMaxDateMillisFromJsMaxDate(newMaxDate),
    });
  };

  const setSelectedMinDate = (newMinDate: Date): void => {
    setDates({
      min: getMinDateMillisFromJsMinDate(newMinDate),
      max: minAndMaxSelectedDates.max,
    });
  };

  const minDateText = min.toLocaleDateString("es-AR");
  const maxDateText = max.toLocaleDateString("es-AR");

  return (
    <section className={`${styles.DateSelectionInputs} ${className}`}>
      <ReactPopup
        modal
        trigger={
          <button type="button" className={styles.dateSelectorButton}>
            {minDateText}
          </button>
        }
        position="center center"
        contentStyle={{ width: "fit-content" }}
      >
        <DayPicker
          required
          className={styles.dayPicker}
          mode="single"
          selected={min}
          onSelect={setSelectedMinDate}
          footer={`Fecha de inicio seleccionada: ${minDateText}`}
        />
      </ReactPopup>
      <ReactPopup
        modal
        trigger={
          <button type="button" className={styles.dateSelectorButton}>
            {maxDateText}
          </button>
        }
        position="center center"
        contentStyle={{ width: "fit-content" }}
      >
        <DayPicker
          required
          className={styles.dayPicker}
          mode="single"
          selected={max}
          onSelect={setSelectedMaxDate}
          footer={`Fecha de fin seleccionada: ${maxDateText}`}
        />
      </ReactPopup>
    </section>
  );
};
