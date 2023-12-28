import RegisterForm from "./components/form/RegisterForm";
import Navbar from "./components/navbar/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen   flex-col">
      <Navbar />
      <RegisterForm />
    </main>
  );
}
