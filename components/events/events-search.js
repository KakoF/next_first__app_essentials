import { useRef } from "react";
import Button from "../ui/button";
import classes from "./eventes-search.module.css";

function EventSearch(props) {
  const yearInput = useRef();
  const monthInput = useRef();
  function submitHandler(event) {
    event.preventDefault();
    const selectedYear = yearInput.current.value;
    const selectedMonth = monthInput.current.value;
    props.onSearch(selectedYear, selectedMonth);
  }
  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor="year">Ano</label>
          <select id="year" ref={yearInput}>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor="month">Mês</label>
          <select id="month" ref={monthInput}>
            <option value="1">Janeiro</option>
            <option value="2">Favereiro</option>
            <option value="3">Março</option>
            <option value="4">Abril</option>
            <option value="5">Maio</option>
            <option value="6">Junho</option>
            <option value="7">Julho</option>
            <option value="8">Agosto</option>
            <option value="9">Setembro</option>
            <option value="10">Outubro</option>
            <option value="11">Novembro</option>
            <option value="12">Dezembro</option>
          </select>
        </div>
      </div>
      <Button>Buscar</Button>
    </form>
  );
}

export default EventSearch;
