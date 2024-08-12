import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { PlusCircle, DollarSign, FileText, CheckSquare } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const Index = () => {
  const [budget, setBudget] = useState(10000);
  const [fundsRaised, setFundsRaised] = useState(5000);
  const [expenses, setExpenses] = useState(2000);
  const [newExpense, setNewExpense] = useState({ amount: '', description: '' });
  const [newDonation, setNewDonation] = useState({ amount: '', donor: '' });
  const [newTask, setNewTask] = useState({ description: '', deadline: '' });
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

  const handleAddExpense = () => {
    if (newExpense.amount && newExpense.description) {
      setExpenses(expenses + parseFloat(newExpense.amount));
      setNewExpense({ amount: '', description: '' });
      toast({
        title: "Expense Added",
        description: `Added expense: $${newExpense.amount} for ${newExpense.description}`,
      });
    }
  };

  const handleAddDonation = () => {
    if (newDonation.amount && newDonation.donor) {
      setFundsRaised(fundsRaised + parseFloat(newDonation.amount));
      setNewDonation({ amount: '', donor: '' });
      toast({
        title: "Donation Logged",
        description: `Logged donation: $${newDonation.amount} from ${newDonation.donor}`,
      });
    }
  };

  const handleAddTask = () => {
    if (newTask.description && newTask.deadline) {
      // In a real app, you'd add this to a tasks array
      setNewTask({ description: '', deadline: '' });
      toast({
        title: "Task Added",
        description: `Added task: ${newTask.description} due ${newTask.deadline}`,
      });
    }
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
              <div className="flex space-x-2 mb-4">
                <div className="flex-1">
                  <Label htmlFor="expenseAmount">Amount</Label>
                  <Input
                    id="expenseAmount"
                    value={newExpense.amount}
                    onChange={(e) => setNewExpense({...newExpense, amount: e.target.value})}
                    type="number"
                    placeholder="Enter amount"
                  />
                </div>
                <div className="flex-1">
                  <Label htmlFor="expenseDescription">Description</Label>
                  <Input
                    id="expenseDescription"
                    value={newExpense.description}
                    onChange={(e) => setNewExpense({...newExpense, description: e.target.value})}
                    placeholder="Enter description"
                  />
                </div>
              </div>
              <Button onClick={handleAddExpense}><PlusCircle className="mr-2 h-4 w-4" /> Add Expense</Button>
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
              <div className="flex space-x-2 mb-4">
                <div className="flex-1">
                  <Label htmlFor="donationAmount">Amount</Label>
                  <Input
                    id="donationAmount"
                    value={newDonation.amount}
                    onChange={(e) => setNewDonation({...newDonation, amount: e.target.value})}
                    type="number"
                    placeholder="Enter amount"
                  />
                </div>
                <div className="flex-1">
                  <Label htmlFor="donorName">Donor Name</Label>
                  <Input
                    id="donorName"
                    value={newDonation.donor}
                    onChange={(e) => setNewDonation({...newDonation, donor: e.target.value})}
                    placeholder="Enter donor name"
                  />
                </div>
              </div>
              <Button onClick={handleAddDonation}><DollarSign className="mr-2 h-4 w-4" /> Log Donation</Button>
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
              <div className="flex space-x-2 mb-4">
                <div className="flex-1">
                  <Label htmlFor="taskDescription">Task Description</Label>
                  <Input
                    id="taskDescription"
                    value={newTask.description}
                    onChange={(e) => setNewTask({...newTask, description: e.target.value})}
                    placeholder="Enter task description"
                  />
                </div>
                <div className="flex-1">
                  <Label htmlFor="taskDeadline">Deadline</Label>
                  <Input
                    id="taskDeadline"
                    value={newTask.deadline}
                    onChange={(e) => setNewTask({...newTask, deadline: e.target.value})}
                    type="date"
                  />
                </div>
              </div>
              <Button onClick={handleAddTask}><CheckSquare className="mr-2 h-4 w-4" /> Add Task</Button>
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
