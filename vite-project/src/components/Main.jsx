import { Button } from "antd";
import Greeting from "./ItemListContainer";

function Main() {
  const name = "Martin";
  return (
    <main className="p-4 grow">
      <h2 className="text-xl mb-4 text-slate-500">Productos</h2>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 users">

        <Greeting name="Whey Pro"
        precio="18000"
        marca="Nutrilabs"
        categoria="proteinas"
         />

        <Greeting name="Creatina"
        precio="22000"
        marca="Nutrilabs"
        categoria="creatinas"  />

        <Greeting name="BCAA"
        precio="25000"
        marca="Nutrilabs"
        categoria="proteinas" />
      </section>
    </main>
  );
}

export default Main;
