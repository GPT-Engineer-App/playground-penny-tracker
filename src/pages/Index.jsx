import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { PlusCircle, DollarSign, FileText, CheckSquare } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

const Index = () => {
  const [budget, setBudget] = useState(10000);
  const [fundsRaised, setFundsRaised] = useState(5000);
  const [expenses, setExpenses] = useState(2000);
  const { toast } = useToast();

  const generateReport = () => {
    const report = `
      Project Report:
      Total Budget: $${budget.toLocaleString()}
      Funds Raised: $${fundsRaised.toLocaleString()}
      Total Expenses: $${expenses.toLocaleString()}
      Remaining Balance: $${(fundsRaised - expenses).toLocaleString()}
      Fundraising Progress: ${((fundsRaised / budget) * 100).toFixed(2)}%
    `;
    toast({
      title: "Project Report Generated",
      description: report,
      duration: 10000,
    });
  };

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Village Playground Renovation</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Total Budget</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">${budget.toLocaleString()}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Funds Raised</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">${fundsRaised.toLocaleString()}</p>
            <Progress value={(fundsRaised / budget) * 100} className="mt-2" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Remaining Balance</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">${(fundsRaised - expenses).toLocaleString()}</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="expenses" className="w-full">
        <TabsList>
          <TabsTrigger value="expenses">Expenses</TabsTrigger>
          <TabsTrigger value="fundraising">Fundraising</TabsTrigger>
          <TabsTrigger value="tasks">Tasks</TabsTrigger>
        </TabsList>
        <TabsContent value="expenses">
          <Card>
            <CardHeader>
              <CardTitle>Expense Management</CardTitle>
              <CardDescription>Track and categorize project expenses</CardDescription>
            </CardHeader>
            <CardContent>
              <Button><PlusCircle className="mr-2 h-4 w-4" /> Add Expense</Button>
              {/* Expense list and management components will go here */}
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="fundraising">
          <Card>
            <CardHeader>
              <CardTitle>Fundraising Progress</CardTitle>
              <CardDescription>Monitor donations and set goals</CardDescription>
            </CardHeader>
            <CardContent>
              <Button><DollarSign className="mr-2 h-4 w-4" /> Log Donation</Button>
              {/* Fundraising components will go here */}
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="tasks">
          <Card>
            <CardHeader>
              <CardTitle>Task Management</CardTitle>
              <CardDescription>Organize and track project tasks</CardDescription>
            </CardHeader>
            <CardContent>
              <Button><CheckSquare className="mr-2 h-4 w-4" /> Add Task</Button>
              {/* Task management components will go here */}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="mt-8 flex justify-end">
        <Button variant="outline" className="mr-4" onClick={generateReport}>
          <FileText className="mr-2 h-4 w-4" /> Generate Report
        </Button>
      </div>
    </div>
  );
};

export default Index;
