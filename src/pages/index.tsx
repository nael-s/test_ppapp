import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useGetAllDashboard } from "@/services/dashboard.service";
import { ArrowRight, Flame } from "lucide-react";

export default function Home() {
  const { data, isLoading, error } = useGetAllDashboard();

  if (error) {
    return <div>Error Get Data</div>;
  }

  if (isLoading) {
    return <div>loading Get Data</div>;
  }

  return (
    <>
      <div className="flex items-center justify-center my-8">
        <p className="text-2xl font-light capitalize text-center">
          Pendataan Keluarga Satu Pintu
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
        {data?.data?.map((item, index) => (
          <Card key={index} className="w-[250px] bg-white shadow-lg rounded-lg">
            <div className="flex justify-start items-start p-3">
              <div className="bg-[#8B84D7]/90 text-white rounded-full p-3">
                <Flame strokeWidth={2.5} />
              </div>
            </div>
            <CardHeader className="m-0 p-3">
              <CardTitle className="text-md font-semibold truncate">
                {item.label}
              </CardTitle>
              <CardDescription className="text-gray-500 text-sm truncate">
                {item.description}
              </CardDescription>
            </CardHeader>
            <CardFooter className="flex items-center gap-2 m-0 p-3">
              <CardDescription className="text-blue-600 cursor-pointer">
                Selengkapnya
              </CardDescription>
              <ArrowRight strokeWidth={2.5} className="text-blue-600" />
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
}
