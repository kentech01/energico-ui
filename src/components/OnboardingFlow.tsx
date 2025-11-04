import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Progress } from "./ui/progress";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Upload, Camera, Laptop, Wind, Lightbulb, Thermometer, Coffee } from "lucide-react";
import { Checkbox } from "./ui/checkbox";

interface OnboardingFlowProps {
  onComplete: () => void;
}

export function OnboardingFlow({ onComplete }: OnboardingFlowProps) {
  const [step, setStep] = useState(1);
  const [billFile, setBillFile] = useState<File | null>(null);
  const [selectedDevices, setSelectedDevices] = useState<string[]>([]);
  const [savingsGoal, setSavingsGoal] = useState("");

  const devices = [
    { id: "computers", label: "Computers & Monitors", icon: Laptop },
    { id: "ac", label: "Air Conditioning", icon: Wind },
    { id: "lighting", label: "Lighting", icon: Lightbulb },
    { id: "heating", label: "Heating System", icon: Thermometer },
    { id: "kitchen", label: "Kitchen Appliances", icon: Coffee },
  ];

  const handleDeviceToggle = (deviceId: string) => {
    setSelectedDevices(prev =>
      prev.includes(deviceId)
        ? prev.filter(id => id !== deviceId)
        : [...prev, deviceId]
    );
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setBillFile(e.target.files[0]);
    }
  };

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      onComplete();
    }
  };

  const canProceed = () => {
    if (step === 1) return billFile !== null;
    if (step === 2) return selectedDevices.length > 0;
    if (step === 3) return savingsGoal !== "";
    return false;
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
              <Lightbulb className="w-5 h-5 text-white" />
            </div>
            <span className="text-gray-900">Energico Setup</span>
          </div>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-600">Step {step} of 3</span>
            <span className="text-gray-600">{Math.round((step / 3) * 100)}% complete</span>
          </div>
          <Progress value={(step / 3) * 100} className="h-2" />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-2xl">
          {step === 1 && (
            <Card>
              <CardHeader>
                <CardTitle>Upload Your Energy Bill</CardTitle>
                <p className="text-gray-600">
                  Upload your latest energy bill so we can analyze your usage patterns
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center hover:border-emerald-500 transition-colors cursor-pointer">
                  <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <Label htmlFor="bill-upload" className="cursor-pointer">
                    <span className="text-emerald-600">Click to upload</span>
                    <span className="text-gray-600"> or drag and drop</span>
                  </Label>
                  <p className="text-gray-500 mt-2">PDF, PNG, or JPG (max 10MB)</p>
                  <Input
                    id="bill-upload"
                    type="file"
                    accept=".pdf,.png,.jpg,.jpeg"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                </div>

                {billFile && (
                  <div className="flex items-center gap-3 p-4 bg-emerald-50 rounded-lg">
                    <div className="w-10 h-10 bg-emerald-100 rounded flex items-center justify-center">
                      <Upload className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-900">{billFile.name}</p>
                      <p className="text-gray-500">{(billFile.size / 1024).toFixed(1)} KB</p>
                    </div>
                  </div>
                )}

                <div className="flex items-center gap-2 text-gray-600">
                  <Camera className="w-5 h-5" />
                  <span>Or take a photo with your phone</span>
                </div>
              </CardContent>
            </Card>
          )}

          {step === 2 && (
            <Card>
              <CardHeader>
                <CardTitle>Select Your Devices</CardTitle>
                <p className="text-gray-600">
                  Which devices and appliances do you have in your workspace?
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                {devices.map((device) => {
                  const Icon = device.icon;
                  const isSelected = selectedDevices.includes(device.id);
                  
                  return (
                    <div
                      key={device.id}
                      className={`flex items-center gap-4 p-4 border-2 rounded-lg cursor-pointer transition-all ${
                        isSelected
                          ? "border-emerald-500 bg-emerald-50"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                      onClick={() => handleDeviceToggle(device.id)}
                    >
                      <Checkbox
                        checked={isSelected}
                        onCheckedChange={() => handleDeviceToggle(device.id)}
                      />
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                        isSelected ? "bg-emerald-100" : "bg-gray-100"
                      }`}>
                        <Icon className={`w-6 h-6 ${
                          isSelected ? "text-emerald-600" : "text-gray-600"
                        }`} />
                      </div>
                      <span className="flex-1 text-gray-900">{device.label}</span>
                    </div>
                  );
                })}
              </CardContent>
            </Card>
          )}

          {step === 3 && (
            <Card>
              <CardHeader>
                <CardTitle>Set Your Savings Goal</CardTitle>
                <p className="text-gray-600">
                  How much would you like to save on energy costs each month?
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="savings-goal">Monthly Savings Goal (€)</Label>
                  <Input
                    id="savings-goal"
                    type="number"
                    placeholder="100"
                    value={savingsGoal}
                    onChange={(e) => setSavingsGoal(e.target.value)}
                    className="text-2xl h-16"
                  />
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <Button
                    variant="outline"
                    onClick={() => setSavingsGoal("50")}
                    className="h-auto py-4"
                  >
                    <div>
                      <div className="mb-1">€50</div>
                      <div className="text-gray-500">Starter</div>
                    </div>
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => setSavingsGoal("150")}
                    className="h-auto py-4"
                  >
                    <div>
                      <div className="mb-1">€150</div>
                      <div className="text-gray-500">Moderate</div>
                    </div>
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => setSavingsGoal("300")}
                    className="h-auto py-4"
                  >
                    <div>
                      <div className="mb-1">€300</div>
                      <div className="text-gray-500">Ambitious</div>
                    </div>
                  </Button>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-blue-900">
                    💡 Tip: Most small businesses save between €100-€250/month with Energico recommendations.
                  </p>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Navigation */}
          <div className="flex justify-between mt-6">
            {step > 1 && (
              <Button variant="outline" onClick={() => setStep(step - 1)}>
                Back
              </Button>
            )}
            <Button
              onClick={handleNext}
              disabled={!canProceed()}
              className="ml-auto bg-emerald-500 hover:bg-emerald-600"
            >
              {step === 3 ? "Complete Setup" : "Continue"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
