import { useParams } from "react-router-dom";

const DashboardPage = () => {
  const { first_name } = useParams();
  console.log(first_name);
  return (
    <div className="bg-sky-500 h-screen  w-screen flex justify-center items-center flex-col">
      <div className="text-3xl text-white my-4">Hai {first_name}, </div>
      <div className="text-2xl text-slate-100">Welcome to dashboard page!</div>
    </div>
  );
};

export default DashboardPage;
