
import './App.css';
import { useForm } from "react-hook-form";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
      alert('Заявка отправлена')
      console.log(data);

  }
  const texts = ['3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27'];
	const [value, setValue] = useState('');
	const textNum =['1','2','3', '4', '5', '6', '7', '8', '9', '10']
  const [valueNum, setValueNum] = useState('');
	const options = texts.map((text, index) => {
		return <option key={index}>{text}</option>;
	});
  const optionsNum = textNum.map((text, index) => {
		return <option key={index}>{text}</option>;
	});


  const [startDate, setStartDate] = useState(new Date());
  return (

    <div>
     

        <form id='form' onSubmit={handleSubmit(onSubmit)}>
            <h1 className='text-center'>Бронирование переговорной</h1>
        <div className='input-group mb-3  flex-nowrap'>
        <select className="form-control" {...register("tour", { required: true })}>
        <option value="">Башня</option>
        <option value="A">Башня A</option>
        <option value="B">Башня B</option>
      </select>
      </div>
      <div className='input-group mb-3'>
      <select className="form-control" {...register("floor", { required: true })}
      value={value} onChange={(event) => setValue(event.target.value)}>
        <option value="">Этаж</option>
			{options}
		</select>
    </div>
    <div className='input-group mb-3'>
    <select className="form-control" {...register("num", { required: true })}
      value={valueNum} onChange={(event) => setValueNum(event.target.value)}>
        <option value="">Номер переговорной</option>
			{optionsNum}
		</select>
    </div>
    <div className='input-group mb-3'>
    <DatePicker className="form-control"{...register("date")} selected={startDate} onChange={(date) => setStartDate(date)} showTimeSelect
  dateFormat="Pp" />
  </div>
 
  <div className='input-group mb-3'>
      <textarea className="form-control" {...register("coment")} placeholder="Коментарий.." />
     
           </div>
        <div className='text-center'>
          <input className='btn btn-outline-primary' type="submit" />
        </div>
        </form>
</div>
  );
}

export default App;
