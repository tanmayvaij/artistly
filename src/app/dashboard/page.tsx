import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { mockSubmissions } from "@/data";

export default function DashboardPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold text-center mb-10 text-pink-600">
        Artist Submissions
      </h1>

      <div className="rounded-md border overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-100 text-gray-700 uppercase text-xs">
              <TableHead className="py-3 px-4">Name</TableHead>
              <TableHead className="py-3 px-4">Category</TableHead>
              <TableHead className="py-3 px-4">City</TableHead>
              <TableHead className="py-3 px-4">Fee</TableHead>
              <TableHead className="py-3 px-4">Action</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {mockSubmissions.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={5}
                  className="text-center py-6 text-gray-500"
                >
                  No artist submissions found.
                </TableCell>
              </TableRow>
            ) : (
              mockSubmissions.map((artist) => (
                <TableRow key={artist.id}>
                  <TableCell className="py-3 px-4 font-medium">
                    {artist.name}
                  </TableCell>
                  <TableCell className="py-3 px-4 text-pink-700">
                    {artist.categories.join(", ")}
                  </TableCell>
                  <TableCell className="py-3 px-4">{artist.location}</TableCell>
                  <TableCell className="py-3 px-4">{artist.feeRange}</TableCell>
                  <TableCell className="py-3 px-4">
                    <Button
                      size="sm"
                      className="bg-pink-600 hover:bg-pink-500 text-white"
                    >
                      View
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </main>
  );
}

export const metadata = {
  title: "Manager Dashboard - Artistly",
  description:
    "View all submitted artist profiles with category, location and pricing. Manage submissions efficiently.",
};
