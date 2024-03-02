import { Navbar } from "../components";

export default function PagesLayout({
  children
 }: {
  children: React.ReactNode;
 }) {
   return (
     <>
      <Navbar/>
       <h1 className="grid place-items-center mt-10">Este Layout es un Contenedor para rutas anidadas</h1>
       <div className="grid place-items-center">
        {children}
       </div>
     </>
   );
 }
