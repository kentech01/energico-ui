import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Plus, Trash2, Calculator as CalcIcon, Zap } from "lucide-react";

interface CalculatorProps {
  onBack: () => void;
}

interface Device {
  id: number;
  type: string;
  model: string;
  quantity: number;
  energyUsage: number;
}

export function Calculator({ onBack }: CalculatorProps) {
  const [devices, setDevices] = useState<Device[]>([
    { id: 1, type: "computer", model: "", quantity: 1, energyUsage: 0 },
  ]);

  const addDevice = () => {
    const newDevice: Device = {
      id: Date.now(),
      type: "computer",
      model: "",
      quantity: 1,
      energyUsage: 0,
    };
    setDevices([...devices, newDevice]);
  };

  const removeDevice = (id: number) => {
    if (devices.length > 1) {
      setDevices(devices.filter((device) => device.id !== id));
    }
  };

  const updateDevice = (id: number, field: keyof Device, value: any) => {
    setDevices(
      devices.map((device) =>
        device.id === id ? { ...device, [field]: value } : device
      )
    );
  };

  const totalEnergy = devices.reduce(
    (sum, device) => sum + device.quantity * device.energyUsage,
    0
  );

  const monthlyKwh = totalEnergy * 24 * 30; // Assuming per hour usage
  const monthlyCost = monthlyKwh * 0.12; // €0.12 per kWh average in Kosovo
  const yearlyKwh = monthlyKwh * 12;
  const yearlyCost = monthlyCost * 12;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-gray-900 mb-2">Energy Calculator</h1>
          <p className="text-gray-600">
            Estimate your device energy consumption and costs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Device Form */}
          <div className="lg:col-span-2">
            <Card className="border-none shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Your Devices</span>
                  <Button
                    onClick={addDevice}
                    className="bg-emerald-500 hover:bg-emerald-600"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Add Device
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {devices.map((device, index) => (
                  <div
                    key={device.id}
                    className="p-6 bg-gray-50 rounded-xl space-y-4"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-gray-900">Device {index + 1}</span>
                      {devices.length > 1 && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeDevice(device.id)}
                          className="text-red-600 hover:text-red-700 hover:bg-red-50"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label>Device Type</Label>
                        <Select
                          value={device.type}
                          onValueChange={(value) =>
                            updateDevice(device.id, "type", value)
                          }
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="computer">Computer</SelectItem>
                            <SelectItem value="lights">Lights</SelectItem>
                            <SelectItem value="conditioner">
                              Air Conditioner
                            </SelectItem>
                            <SelectItem value="refrigerator">
                              Refrigerator
                            </SelectItem>
                            <SelectItem value="heater">Heater</SelectItem>
                            <SelectItem value="printer">Printer</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label>Model Name</Label>
                        <Input
                          placeholder="e.g., Dell OptiPlex 7090"
                          value={device.model}
                          onChange={(e) =>
                            updateDevice(device.id, "model", e.target.value)
                          }
                        />
                      </div>

                      <div>
                        <Label>Quantity</Label>
                        <Input
                          type="number"
                          min="1"
                          value={device.quantity}
                          onChange={(e) =>
                            updateDevice(
                              device.id,
                              "quantity",
                              parseInt(e.target.value) || 1
                            )
                          }
                        />
                      </div>

                      <div>
                        <Label>Energy Usage (kWh per hour)</Label>
                        <Input
                          type="number"
                          step="0.01"
                          min="0"
                          placeholder="e.g., 0.15"
                          value={device.energyUsage || ""}
                          onChange={(e) =>
                            updateDevice(
                              device.id,
                              "energyUsage",
                              parseFloat(e.target.value) || 0
                            )
                          }
                        />
                      </div>
                    </div>

                    {device.quantity > 0 && device.energyUsage > 0 && (
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-600">Device Total:</span>
                          <span className="text-gray-900">
                            {(device.quantity * device.energyUsage).toFixed(2)}{" "}
                            kWh/hour
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Results Panel */}
          <div className="lg:col-span-1">
            <Card className="border-none shadow-sm sticky top-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CalcIcon className="w-5 h-5 text-emerald-600" />
                  Total Calculation
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Immediate Total */}
                <div className="p-4 bg-emerald-50 rounded-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="w-5 h-5 text-emerald-600" />
                    <span className="text-gray-600">Total Power</span>
                  </div>
                  <p className="text-emerald-600">{totalEnergy.toFixed(2)} kWh/hour</p>
                </div>

                {/* Monthly Estimates */}
                <div>
                  <h3 className="text-gray-900 text-lg font-medium mb-3">Monthly Estimates</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Energy Usage</span>
                      <span className="text-gray-900">
                        {monthlyKwh.toFixed(0)} kWh
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 ">Estimated Cost</span>
                      <span className="text-gray-900">
                        €{monthlyCost.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <h3 className="text-gray-900 text-lg font-medium mb-3">Yearly Estimates</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Energy Usage</span>
                      <span className="text-gray-900">
                        {yearlyKwh.toFixed(0)} kWh
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Estimated Cost</span>
                      <span className="text-gray-900">
                        €{yearlyCost.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <p className="text-gray-500 text-xs">
                    * Calculations based on 24/7 usage and €0.12/kWh average
                    rate
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
