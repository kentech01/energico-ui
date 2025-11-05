import { useState, React } from "react";
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
import { Badge } from "./ui/badge";
import {
  Sun,
  MapPin,
  Zap,
  DollarSign,
  TrendingUp,
  Leaf,
  Award,
} from "lucide-react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";



export function RenewableSimulator() {
  const [formData, setFormData] = useState({
    location: "",
    areaSize: "",
    orientation: "south",
    tilt: "30",
    systemType: "grid-tied",
  });

  const [showResults, setShowResults] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowResults(true);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  // Simulated calculations based on Kosovo's average solar irradiance (1,450 kWh/m²/year)
  const areaSizeNum = parseFloat(formData.areaSize) || 0;
  const efficiency = 0.18; // 18% panel efficiency
  const performanceRatio = 0.75; // Account for losses
  const kosovoIrradiance = 1450; // kWh/m²/year

  const annualProduction = areaSizeNum * kosovoIrradiance * efficiency * performanceRatio;
  const monthlyProduction = annualProduction / 12;
  const electricityCost = 0.12; // €/kWh in Kosovo
  const annualSavings = annualProduction * electricityCost;
  const monthlySavings = annualSavings / 12;

  const installationCost = areaSizeNum * 150; // €150 per m²
  const roi = installationCost / annualSavings;
  const co2Reduction = annualProduction * 0.5; // kg CO₂ per kWh

  // Monthly production data
  const monthlyData = [
    { month: "Jan", production: monthlyProduction * 0.6, savings: monthlySavings * 0.6 },
    { month: "Feb", production: monthlyProduction * 0.75, savings: monthlySavings * 0.75 },
    { month: "Mar", production: monthlyProduction * 0.95, savings: monthlySavings * 0.95 },
    { month: "Apr", production: monthlyProduction * 1.1, savings: monthlySavings * 1.1 },
    { month: "May", production: monthlyProduction * 1.25, savings: monthlySavings * 1.25 },
    { month: "Jun", production: monthlyProduction * 1.3, savings: monthlySavings * 1.3 },
    { month: "Jul", production: monthlyProduction * 1.35, savings: monthlySavings * 1.35 },
    { month: "Aug", production: monthlyProduction * 1.25, savings: monthlySavings * 1.25 },
    { month: "Sep", production: monthlyProduction * 1.05, savings: monthlySavings * 1.05 },
    { month: "Oct", production: monthlyProduction * 0.85, savings: monthlySavings * 0.85 },
    { month: "Nov", production: monthlyProduction * 0.65, savings: monthlySavings * 0.65 },
    { month: "Dec", production: monthlyProduction * 0.55, savings: monthlySavings * 0.55 },
  ];

  // 10-year projection
  const yearlyProjection = Array.from({ length: 10 }, (_, i) => ({
    year: `Year ${i + 1}`,
    savings: annualSavings * (i + 1),
    investment: installationCost,
  }));

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-gray-900 mb-2">Renewable Energy Simulator</h1>
          <p className="text-gray-600">
            Calculate your solar potential and savings based on your location
          </p>
        </div>

        {!showResults ? (
          /* Input Form */
          <Card className="border-none shadow-sm max-w-3xl mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sun className="w-6 h-6 text-emerald-600" />
                Solar System Configuration
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Location */}
                <div>
                  <Label className="flex items-center gap-2 mb-2">
                    <MapPin className="w-4 h-4 text-emerald-600" />
                    Location
                  </Label>
                  <Select
                    value={formData.location}
                    onValueChange={(value) => handleInputChange("location", value)}
                    required
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select your city" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="prishtina">Prishtina</SelectItem>
                      <SelectItem value="prizren">Prizren</SelectItem>
                      <SelectItem value="peja">Peja</SelectItem>
                      <SelectItem value="gjakova">Gjakova</SelectItem>
                      <SelectItem value="ferizaj">Ferizaj</SelectItem>
                      <SelectItem value="gjilan">Gjilan</SelectItem>
                      <SelectItem value="mitrovica">Mitrovica</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-gray-500 text-xs mt-1">
                    Your location affects solar irradiance calculations
                  </p>
                </div>

                {/* Area Size */}
                <div>
                  <Label>Available Roof Area (m²)</Label>
                  <Input
                    type="number"
                    placeholder="e.g., 50"
                    value={formData.areaSize}
                    onChange={(e) => handleInputChange("areaSize", e.target.value)}
                    required
                    min="1"
                    step="0.1"
                  />
                  <p className="text-gray-500 text-xs mt-1">
                    Typical small business roofs range from 30-100 m²
                  </p>
                </div>

                {/* Panel Orientation */}
                <div>
                  <Label>Panel Orientation</Label>
                  <Select
                    value={formData.orientation}
                    onValueChange={(value) => handleInputChange("orientation", value)}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="south">South (Optimal)</SelectItem>
                      <SelectItem value="southwest">Southwest</SelectItem>
                      <SelectItem value="southeast">Southeast</SelectItem>
                      <SelectItem value="east">East</SelectItem>
                      <SelectItem value="west">West</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Tilt Angle */}
                <div>
                  <Label>Tilt Angle (degrees)</Label>
                  <Select
                    value={formData.tilt}
                    onValueChange={(value) => handleInputChange("tilt", value)}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="15">15° (Summer optimized)</SelectItem>
                      <SelectItem value="30">30° (Recommended)</SelectItem>
                      <SelectItem value="35">35° (Kosovo latitude)</SelectItem>
                      <SelectItem value="45">45° (Winter optimized)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* System Type */}
                <div>
                  <Label>System Type</Label>
                  <Select
                    value={formData.systemType}
                    onValueChange={(value) => handleInputChange("systemType", value)}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="grid-tied">
                        Grid-Tied (Most common)
                      </SelectItem>
                      <SelectItem value="hybrid">
                        Hybrid (With battery backup)
                      </SelectItem>
                      <SelectItem value="off-grid">Off-Grid</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-emerald-500 hover:bg-emerald-600"
                >
                  Calculate Solar Potential
                </Button>
              </form>
            </CardContent>
          </Card>
        ) : (
          /* Results Dashboard */
          <div className="space-y-6">
            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="border-none shadow-sm">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                      <Sun className="w-5 h-5 text-yellow-600" />
                    </div>
                    <div>
                      <p className="text-gray-600">Annual Production</p>
                      <p className="text-gray-900">{annualProduction.toFixed(0)} kWh</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-sm">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                      <DollarSign className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <p className="text-gray-600">Annual Savings</p>
                      <p className="text-emerald-600">€{annualSavings.toFixed(0)}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-sm">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-gray-600">ROI Period</p>
                      <p className="text-gray-900">{roi.toFixed(1)} years</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-sm">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <Leaf className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-gray-600">CO₂ Reduction</p>
                      <p className="text-green-600">{co2Reduction.toFixed(0)} kg/year</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Monthly Production */}
              <Card className="border-none shadow-sm">
                <CardHeader>
                  <CardTitle>Monthly Energy Production</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={monthlyData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis dataKey="month" stroke="#999" />
                      <YAxis stroke="#999" />
                      <Tooltip />
                      <Bar dataKey="production" fill="#10B981" radius={[8, 8, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* 10-Year Projection */}
              <Card className="border-none shadow-sm">
                <CardHeader>
                  <CardTitle>10-Year Financial Projection</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={yearlyProjection}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis dataKey="year" stroke="#999" />
                      <YAxis stroke="#999" />
                      <Tooltip />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="savings"
                        stroke="#10B981"
                        strokeWidth={2}
                        name="Cumulative Savings (€)"
                      />
                      <Line
                        type="monotone"
                        dataKey="investment"
                        stroke="#EF4444"
                        strokeWidth={2}
                        strokeDasharray="5 5"
                        name="Initial Investment (€)"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            {/* Installation Details */}
            <Card className="border-none shadow-sm">
              <CardHeader>
                <CardTitle>Installation Cost Breakdown</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-gray-600 mb-2">System Size</p>
                    <p className="text-gray-900">
                      {(areaSizeNum * efficiency).toFixed(1)} kWp
                    </p>
                    <p className="text-gray-500 text-xs mt-1">
                      Based on {areaSizeNum} m² at 18% efficiency
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-gray-600 mb-2">Estimated Cost</p>
                    <p className="text-gray-900">€{installationCost.toFixed(0)}</p>
                    <p className="text-gray-500 text-xs mt-1">
                      Including panels, inverter, and installation
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-gray-600 mb-2">Monthly Savings</p>
                    <p className="text-emerald-600">€{monthlySavings.toFixed(0)}</p>
                    <p className="text-gray-500 text-xs mt-1">
                      Average across the year
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card className="border-none shadow-sm bg-gradient-to-r from-emerald-500 to-green-600 text-white">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <Award className="w-12 h-12" />
                  <div>
                    <h3 className="mb-2">Environmental Impact</h3>
                    <p className="text-emerald-50 mb-4">
                      By installing this solar system, you'll offset approximately{" "}
                      {co2Reduction.toFixed(0)} kg of CO₂ emissions annually. That's
                      equivalent to planting {(co2Reduction / 21).toFixed(0)} trees
                      every year!
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-white text-emerald-600">
                        {(co2Reduction / 21).toFixed(0)} Trees Equivalent
                      </Badge>
                      <Badge className="bg-white text-emerald-600">
                        {(co2Reduction / 120).toFixed(1)} Cars Off Road
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <Button
                variant="outline"
                onClick={() => setShowResults(false)}
                className="flex-1"
              >
                Modify Configuration
              </Button>
              <Button className="flex-1 bg-emerald-500 hover:bg-emerald-600">
                Get Professional Quote
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
