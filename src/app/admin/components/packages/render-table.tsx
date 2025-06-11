import { getPackages } from "@/actions/package";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import { Packages } from "@/types/types";

export async function getData(): Promise<Packages[]> {
  // Fetch data from your API here.
  const packages: any = await getPackages();
  return packages;
}

export default async function PackageTable() {
  const data = await getData();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
