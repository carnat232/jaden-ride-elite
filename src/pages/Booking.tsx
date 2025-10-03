import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, MapPin, User, Phone, Mail, Car } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Booking = () => {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    carType: "",
    pickupDate: "",
    pickupTime: "",
    dropoffDate: "",
    dropoffTime: "",
    location: "",
    airportTransfer: false,
    driverOption: "self-drive",
    fullName: "",
    phone: "",
    email: "",
    additionalInfo: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Booking Request Received!",
      description: "We'll contact you shortly to confirm your reservation.",
    });
    console.log("Booking data:", formData);
  };

  const carTypes = [
    { value: "economy", label: "Economy Car ($45/day)" },
    { value: "suv", label: "SUV & Family ($75/day)" },
    { value: "executive", label: "Executive ($120/day)" },
    { value: "luxury", label: "Luxury ($200/day)" },
  ];

  return (
    <div className="min-h-screen pt-20 bg-secondary/10">
      {/* Hero Section */}
      <section className="gradient-hero text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Book Your Ride</h1>
          <p className="text-xl text-primary-foreground/90">
            Complete your reservation in just a few steps
          </p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Progress Steps */}
            <div className="flex justify-between mb-12">
              {[1, 2, 3].map((num) => (
                <div
                  key={num}
                  className={`flex items-center ${num < 3 ? "flex-1" : ""}`}
                >
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-semibold transition-smooth ${
                      step >= num
                        ? "bg-accent text-accent-foreground"
                        : "bg-card text-muted-foreground"
                    }`}
                  >
                    {num}
                  </div>
                  {num < 3 && (
                    <div
                      className={`flex-1 h-1 mx-4 transition-smooth ${
                        step > num ? "bg-accent" : "bg-border"
                      }`}
                    ></div>
                  )}
                </div>
              ))}
            </div>

            {/* Form Card */}
            <div className="bg-card rounded-xl shadow-luxury p-8 animate-fade-in">
              <form onSubmit={handleSubmit}>
                {/* Step 1: Vehicle & Dates */}
                {step === 1 && (
                  <div className="space-y-6 animate-fade-in">
                    <h2 className="text-2xl font-bold mb-6 flex items-center">
                      <Car className="w-6 h-6 mr-2 text-accent" />
                      Select Vehicle & Dates
                    </h2>

                    <div>
                      <Label htmlFor="carType">Choose Car Type</Label>
                      <Select
                        value={formData.carType}
                        onValueChange={(value) => handleInputChange("carType", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select a car type" />
                        </SelectTrigger>
                        <SelectContent>
                          {carTypes.map((type) => (
                            <SelectItem key={type.value} value={type.value}>
                              {type.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="pickupDate">Pickup Date</Label>
                        <Input
                          id="pickupDate"
                          type="date"
                          value={formData.pickupDate}
                          onChange={(e) => handleInputChange("pickupDate", e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="pickupTime">Pickup Time</Label>
                        <Input
                          id="pickupTime"
                          type="time"
                          value={formData.pickupTime}
                          onChange={(e) => handleInputChange("pickupTime", e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="dropoffDate">Drop-off Date</Label>
                        <Input
                          id="dropoffDate"
                          type="date"
                          value={formData.dropoffDate}
                          onChange={(e) => handleInputChange("dropoffDate", e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="dropoffTime">Drop-off Time</Label>
                        <Input
                          id="dropoffTime"
                          type="time"
                          value={formData.dropoffTime}
                          onChange={(e) => handleInputChange("dropoffTime", e.target.value)}
                        />
                      </div>
                    </div>

                    <Button
                      type="button"
                      onClick={() => setStep(2)}
                      className="w-full"
                      size="lg"
                    >
                      Continue
                    </Button>
                  </div>
                )}

                {/* Step 2: Location & Driver Option */}
                {step === 2 && (
                  <div className="space-y-6 animate-fade-in">
                    <h2 className="text-2xl font-bold mb-6 flex items-center">
                      <MapPin className="w-6 h-6 mr-2 text-accent" />
                      Location & Driver Preference
                    </h2>

                    <div>
                      <Label htmlFor="location">Pickup Location</Label>
                      <Select
                        value={formData.location}
                        onValueChange={(value) => handleInputChange("location", value)}
                      >
                        <SelectTrigger id="location">
                          <SelectValue placeholder="Select location" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="nairobi-umoja">Nairobi - Bee Center Umoja Phase 2</SelectItem>
                          <SelectItem value="nairobi-jkia">Nairobi - JKIA Airport</SelectItem>
                          <SelectItem value="nairobi-wilson">Nairobi - Wilson Airport</SelectItem>
                          <SelectItem value="mombasa-bamburi">Mombasa - Bamburi Office</SelectItem>
                          <SelectItem value="mombasa-airport">Mombasa - Moi International Airport</SelectItem>
                          <SelectItem value="custom">Custom Address</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label>Driver Option</Label>
                      <RadioGroup
                        value={formData.driverOption}
                        onValueChange={(value) => handleInputChange("driverOption", value)}
                        className="mt-2"
                      >
                        <div className="flex items-center space-x-2 bg-secondary/30 p-4 rounded-lg">
                          <RadioGroupItem value="self-drive" id="self-drive" />
                          <Label htmlFor="self-drive" className="flex-1 cursor-pointer">
                            <div className="font-semibold">Self-Drive</div>
                            <div className="text-sm text-muted-foreground">
                              Drive the car yourself
                            </div>
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2 bg-secondary/30 p-4 rounded-lg">
                          <RadioGroupItem value="chauffeur" id="chauffeur" />
                          <Label htmlFor="chauffeur" className="flex-1 cursor-pointer">
                            <div className="font-semibold">With Chauffeur (+$50/day)</div>
                            <div className="text-sm text-muted-foreground">
                              Professional driver included
                            </div>
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="flex gap-4">
                      <Button
                        type="button"
                        onClick={() => setStep(1)}
                        variant="outline"
                        className="flex-1"
                        size="lg"
                      >
                        Back
                      </Button>
                      <Button
                        type="button"
                        onClick={() => setStep(3)}
                        className="flex-1"
                        size="lg"
                      >
                        Continue
                      </Button>
                    </div>
                  </div>
                )}

                {/* Step 3: Personal Information */}
                {step === 3 && (
                  <div className="space-y-6 animate-fade-in">
                    <h2 className="text-2xl font-bold mb-6 flex items-center">
                      <User className="w-6 h-6 mr-2 text-accent" />
                      Your Information
                    </h2>

                    <div>
                      <Label htmlFor="fullName">Full Name</Label>
                      <Input
                        id="fullName"
                        placeholder="John Doe"
                        value={formData.fullName}
                        onChange={(e) => handleInputChange("fullName", e.target.value)}
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+1 (234) 567-8900"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                      />
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                      />
                    </div>

                    <div>
                      <Label htmlFor="additionalInfo">Additional Information (Optional)</Label>
                      <Textarea
                        id="additionalInfo"
                        placeholder="Any special requests or requirements..."
                        value={formData.additionalInfo}
                        onChange={(e) => handleInputChange("additionalInfo", e.target.value)}
                        rows={4}
                      />
                    </div>

                    <div className="flex gap-4">
                      <Button
                        type="button"
                        onClick={() => setStep(2)}
                        variant="outline"
                        className="flex-1"
                        size="lg"
                      >
                        Back
                      </Button>
                      <Button type="submit" variant="hero" className="flex-1" size="lg">
                        Confirm Reservation
                      </Button>
                    </div>
                  </div>
                )}
              </form>
            </div>

            {/* Contact Alternative */}
            <div className="mt-8 text-center bg-accent/5 p-6 rounded-xl">
              <p className="text-muted-foreground mb-2">
                Prefer to book by phone?
              </p>
              <a
                href="tel:+254704848442"
                className="text-accent font-semibold text-lg hover:underline"
              >
                Call us at 0704848442 / 7
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Booking;
