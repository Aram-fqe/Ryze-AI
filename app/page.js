import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import Table from "@/components/ui/Table";
import Sidebar from "@/components/ui/Sidebar";
import Navbar from "@/components/ui/Navbar";
import Chart from "@/components/ui/Chart";

export default function Home() {
  const chartData = [
    { label: "Jan", value: 400 },
    { label: "Feb", value: 300 },
    { label: "Mar", value: 550 },
    { label: "Apr", value: 450 },
    { label: "May", value: 600 },
  ];

  const tableData = [
    { id: 1, name: "Alice", role: "Admin" },
    { id: 2, name: "Bob", role: "User" },
    { id: 3, name: "Charlie", role: "Editor" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Navbar navLinks={[{ label: "Docs", href: "#" }, { label: "Pricing", href: "#" }]} />

      <main className="pt-24 px-8 max-w-7xl mx-auto grid grid-cols-12 gap-8">
        {/* Sidebar Mock */}
        <div className="col-span-3">
          <Card>
            <Sidebar
              items={[
                { id: 'dashboard', label: 'Dashboard', icon: '📊' },
                { id: 'settings', label: 'Settings', icon: '⚙️' },
              ]}
              onSelect={(id) => console.log(id)}
            />
          </Card>
        </div>

        {/* Main Content */}
        <div className="col-span-9 space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">Components</h2>
            <div className="flex gap-4 mb-8">
              <Button>Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="danger">Danger</Button>
            </div>
          </section>

          <div className="grid grid-cols-2 gap-6">
            <Card title="Input Example">
              <Input label="Email Address" placeholder="hello@ryze.ai" />
            </Card>

            <Card title="Chart Example">
              <Chart title="Monthly Users" data={chartData} />
            </Card>
          </div>

          <Card title="Users Table">
            <Table headers={["ID", "Name", "Role"]} data={tableData} />
          </Card>
        </div>
      </main>
    </div>
  );
}
