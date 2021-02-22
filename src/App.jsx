import Saludo from "./components/Saludo.jsx";
import Contador from "./components/Contador";
import Listado from "./components/Listado";
import Temperatura from "./components/operadorTernario";
import Form from "./components/form";
import User from "./components/User";

function App() {
  return (
    <div className="flex flex-wrap justify-between bg-blue-300 text-white">
      <div className='p-3 mx-3'>
        <p className='text-4xl font-bold'> Algo de texto </p>
        <Saludo/>
        <Contador/>
      </div>
      <div className='p-3 mx-3'>
        <Listado/>
      </div>
      <div className='p-3 mx-3'>
        <Temperatura/>
      </div>
      <div>
        <Form></Form>
      </div>
      <div className='w-full'>
        <User
          test='ago'
        />
      </div>
    </div>
  );
}

export default App;
