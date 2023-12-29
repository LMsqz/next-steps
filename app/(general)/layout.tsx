import { Navbar } from "@/components";



export default function GeneralLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center p-20 ">
          <span className="text-lg">Hola mundo</span>
          {children}
      </main>
    </>
  );
}