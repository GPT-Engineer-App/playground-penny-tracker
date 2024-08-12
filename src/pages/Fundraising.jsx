import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Progress } from "@/components/ui/progress"
import { PlusCircle } from "lucide-react"

const Fundraising = () => {
  const [donations, setDonations] = useState([]);
  const [newDonation, setNewDonation] = useState({ donor: '', amount: '', date: '' });
  const [goal, setGoal] = useState(10000);

  const handleAddDonation = () => {
    setDonations([...donations, { ...newDonation, id: Date.now() }]);
    setNewDonation({ donor: '', amount: '', date: '' });
  };

  const totalRaised = donations.reduce((sum, donation) => sum + parseFloat(donation.amount || 0), 0);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Fundraising Progress</h1>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Fundraising Goal</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-4 mb-4">
            <Progress value={(totalRaised / goal) * 100} className="w-full" />
            <span className="text-sm font-medium">{((totalRaised / goal) * 100).toFixed(1)}%</span>
          </div>
          <p className="text-lg font-semibold">${totalRaised.toLocaleString()} raised of ${goal.toLocaleString()} goal</p>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Log New Donation</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <Label htmlFor="donor">Donor Name</Label>
              <Input
                id="donor"
                value={newDonation.donor}
                onChange={(e) => setNewDonation({...newDonation, donor: e.target.value})}
              />
            </div>
            <div>
              <Label htmlFor="amount">Amount</Label>
              <Input
                id="amount"
                type="number"
                value={newDonation.amount}
                onChange={(e) => setNewDonation({...newDonation, amount: e.target.value})}
              />
            </div>
            <div>
              <Label htmlFor="date">Date</Label>
              <Input
                id="date"
                type="date"
                value={newDonation.date}
                onChange={(e) => setNewDonation({...newDonation, date: e.target.value})}
              />
            </div>
          </div>
          <Button className="mt-4" onClick={handleAddDonation}>
            <PlusCircle className="mr-2 h-4 w-4" /> Log Donation
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Donation History</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Donor</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {donations.map((donation) => (
                <TableRow key={donation.id}>
                  <TableCell>{donation.donor}</TableCell>
                  <TableCell>${parseFloat(donation.amount).toFixed(2)}</TableCell>
                  <TableCell>{donation.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Fundraising;
