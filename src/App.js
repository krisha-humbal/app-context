import logo from './logo.svg';
import './App.css';
import Process1 from './UseContext/Process1';
import Form from './UseContext/Form';
import Process from './Compoents/Process';
// import UseMemo from './Compoents/UseMemo';
import UseCallback from './Compoents/UseCallback';
import Store from './Redux/Store';
import ButtonUi from './Redux/ButtonUi';
import { CounterSlice } from './Redux/CounterSlice';
import Check from './Redux/Check';
function App() {
  return (
   <>
   {/* <Process1></Process1> */}
   {/* <Form></Form> */}
   {/* <Process></Process> */}
   {/* <UseMemo></UseMemo> */}
   {/* <UseCallback></UseCallback> */}
    <ButtonUi></ButtonUi>
    {/* <Check></Check> */}
   </>
  );
}

export default App;
