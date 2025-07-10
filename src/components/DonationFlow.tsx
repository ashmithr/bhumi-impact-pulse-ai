import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, CreditCard, Smartphone, Banknote } from "lucide-react";

interface DonationFlowProps {
  onDonate: (amount: number) => void;
}

const DonationFlow = ({ onDonate }: DonationFlowProps) => {
  const [customAmount, setCustomAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [showPaymentForm, setShowPaymentForm] = useState(false);

  const handleCustomDonate = () => {
    const amount = parseInt(customAmount);
    if (amount && amount > 0) {
      setShowPaymentForm(true);
    }
  };

  const handlePayment = () => {
    const amount = parseInt(customAmount);
    if (amount && amount > 0) {
      onDonate(amount);
    }
  };

  const paymentMethods = [
    { id: "card", name: "Credit/Debit Card", icon: CreditCard },
    { id: "upi", name: "UPI", icon: Smartphone },
    { id: "netbanking", name: "Net Banking", icon: Banknote }
  ];

  if (showPaymentForm) {
    return (
      <div className="max-w-md mx-auto">
        <Card className="shadow-warm">
          <CardHeader className="text-center">
            <div className="bg-gradient-hero text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="h-6 w-6" />
            </div>
            <CardTitle>Complete Your Donation</CardTitle>
            <p className="text-muted-foreground">₹{customAmount} will help transform lives</p>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Payment Method Selection */}
            <div>
              <label className="text-sm font-medium mb-2 block">Payment Method</label>
              <div className="space-y-2">
                {paymentMethods.map((method) => (
                  <label
                    key={method.id}
                    className={`flex items-center space-x-3 p-3 border rounded-lg cursor-pointer transition-colors ${
                      paymentMethod === method.id ? 'border-primary bg-primary/5' : 'border-border hover:bg-muted/50'
                    }`}
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      value={method.id}
                      checked={paymentMethod === method.id}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="sr-only"
                    />
                    <method.icon className="h-4 w-4 text-primary" />
                    <span className="text-sm">{method.name}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Mock Payment Form */}
            {paymentMethod === "card" && (
              <div className="space-y-3">
                <Input placeholder="1234 5678 9012 3456" />
                <div className="grid grid-cols-2 gap-3">
                  <Input placeholder="MM/YY" />
                  <Input placeholder="CVV" />
                </div>
                <Input placeholder="Cardholder Name" />
              </div>
            )}

            {paymentMethod === "upi" && (
              <div className="space-y-3">
                <Input placeholder="your-upi-id@okaxis" />
                <div className="text-center p-4 bg-muted rounded-lg">
                  <div className="text-sm text-muted-foreground">
                    Or scan QR code with any UPI app
                  </div>
                  <div className="w-32 h-32 bg-gradient-trust/20 rounded-lg mx-auto mt-2 flex items-center justify-center">
                    <Smartphone className="h-8 w-8 text-trust" />
                  </div>
                </div>
              </div>
            )}

            {paymentMethod === "netbanking" && (
              <div className="space-y-3">
                <select className="w-full p-2 border border-border rounded-md">
                  <option>Select Your Bank</option>
                  <option>State Bank of India</option>
                  <option>HDFC Bank</option>
                  <option>ICICI Bank</option>
                  <option>Axis Bank</option>
                </select>
              </div>
            )}

            <Button variant="donate" className="w-full" onClick={handlePayment}>
              Donate ₹{customAmount} Now
            </Button>

            <Button 
              variant="ghost" 
              className="w-full" 
              onClick={() => setShowPaymentForm(false)}
            >
              Back
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto">
      <Card className="shadow-warm">
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Custom Donation Amount</CardTitle>
          <p className="text-muted-foreground">Every rupee counts towards creating change</p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label htmlFor="amount" className="text-sm font-medium block mb-2">
              Enter Amount (₹)
            </label>
            <Input
              id="amount"
              type="number"
              placeholder="500"
              value={customAmount}
              onChange={(e) => setCustomAmount(e.target.value)}
              className="text-lg text-center"
              min="1"
            />
          </div>
          
          {customAmount && parseInt(customAmount) > 0 && (
            <div className="bg-impact-light p-4 rounded-lg text-center">
              <p className="text-sm text-impact font-medium">
                Your ₹{customAmount} can provide:
              </p>
              <div className="grid grid-cols-2 gap-2 mt-2 text-xs">
                <div>{Math.floor(parseInt(customAmount) / 50)} books</div>
                <div>{Math.floor(parseInt(customAmount) / 25)} meals</div>
                <div>{Math.floor(parseInt(customAmount) / 100)} checkups</div>
                <div>{Math.floor(parseInt(customAmount) / 100)} children helped</div>
              </div>
            </div>
          )}

          <Button 
            variant="donate" 
            className="w-full" 
            onClick={handleCustomDonate}
            disabled={!customAmount || parseInt(customAmount) <= 0}
          >
            Proceed to Donate
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default DonationFlow;