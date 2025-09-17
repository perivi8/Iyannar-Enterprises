import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Truck, Package, Calculator, ShoppingCart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";

interface BookingModalProps {
  serviceData: {
    id: string;
    title: string;
    description: string;
    price: string;
    slug: string;
    features: string[];
  };
  children: React.ReactNode;
}

const BookingModal = ({ serviceData, children }: BookingModalProps) => {
  const { addToCart } = useCart();
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  
  const [bookingDetails, setBookingDetails] = useState({
    fromLocation: "",
    toLocation: "",
    vehicleType: "",
    cargoType: "",
    weight: 1,
    weightUnit: "kg" as "kg" | "tons",
    distance: 50,
    specialInstructions: ""
  });

  const vehicleTypes = [
    { value: "mini-truck", label: "Mini Truck (Up to 1 Ton)", multiplier: 1.0 },
    { value: "small-truck", label: "Small Truck (1-3 Tons)", multiplier: 1.2 },
    { value: "medium-truck", label: "Medium Truck (3-7 Tons)", multiplier: 1.5 },
    { value: "large-truck", label: "Large Truck (7-15 Tons)", multiplier: 2.0 },
    { value: "container", label: "Container (20-40 ft)", multiplier: 2.5 },
    { value: "trailer", label: "Trailer (Heavy Cargo)", multiplier: 3.0 }
  ];

  const cargoTypes = [
    "General Cargo",
    "Fragile Items",
    "Heavy Machinery",
    "Bulk Cargo",
    "Perishable Goods",
    "Hazardous Materials",
    "Electronics",
    "Furniture",
    "Construction Materials",
    "Automotive Parts"
  ];

  const calculateEstimatedPrice = () => {
    let basePrice = bookingDetails.distance * 5; // ₹5 per km
    
    const vehicleMultiplier = vehicleTypes.find(v => v.value === bookingDetails.vehicleType)?.multiplier || 1.0;
    const weightMultiplier = bookingDetails.weightUnit === 'tons' 
      ? bookingDetails.weight * 10 
      : bookingDetails.weight * 0.01;
    
    return Math.round(basePrice * vehicleMultiplier * (1 + weightMultiplier));
  };

  const handleInputChange = (field: string, value: string | number) => {
    setBookingDetails(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleAddToCart = () => {
    const enhancedServiceData = {
      ...serviceData,
      fromLocation: bookingDetails.fromLocation,
      toLocation: bookingDetails.toLocation,
      vehicleType: bookingDetails.vehicleType,
      cargoType: bookingDetails.cargoType,
      weight: bookingDetails.weight,
      weightUnit: bookingDetails.weightUnit,
      distance: bookingDetails.distance,
      calculatedPrice: calculateEstimatedPrice()
    };

    addToCart(enhancedServiceData);
    
    toast({
      title: "Added to Cart",
      description: `${serviceData.title} from ${bookingDetails.fromLocation} to ${bookingDetails.toLocation} has been added to your cart.`,
    });
    
    setOpen(false);
  };

  const isFormValid = () => {
    return bookingDetails.fromLocation && 
           bookingDetails.toLocation && 
           bookingDetails.vehicleType && 
           bookingDetails.cargoType &&
           bookingDetails.weight > 0 &&
           bookingDetails.distance > 0;
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Package className="w-5 h-5 text-accent" />
            Book {serviceData.title}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Location Details */}
          <div className="space-y-4">
            <h3 className="font-semibold flex items-center gap-2">
              <MapPin className="w-4 h-4 text-accent" />
              Pickup & Delivery Locations
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="fromLocation">From Location *</Label>
                <Input
                  id="fromLocation"
                  value={bookingDetails.fromLocation}
                  onChange={(e) => handleInputChange('fromLocation', e.target.value)}
                  placeholder="Enter pickup location"
                />
              </div>
              <div>
                <Label htmlFor="toLocation">To Location *</Label>
                <Input
                  id="toLocation"
                  value={bookingDetails.toLocation}
                  onChange={(e) => handleInputChange('toLocation', e.target.value)}
                  placeholder="Enter delivery location"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="distance">Estimated Distance (km) *</Label>
              <Input
                id="distance"
                type="number"
                value={bookingDetails.distance}
                onChange={(e) => handleInputChange('distance', parseInt(e.target.value) || 0)}
                placeholder="Enter distance in kilometers"
                min="1"
              />
            </div>
          </div>

          {/* Vehicle & Cargo Details */}
          <div className="space-y-4">
            <h3 className="font-semibold flex items-center gap-2">
              <Truck className="w-4 h-4 text-accent" />
              Vehicle & Cargo Specifications
            </h3>
            
            <div>
              <Label htmlFor="vehicleType">Vehicle Type *</Label>
              <Select value={bookingDetails.vehicleType} onValueChange={(value) => handleInputChange('vehicleType', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select vehicle type" />
                </SelectTrigger>
                <SelectContent>
                  {vehicleTypes.map((vehicle) => (
                    <SelectItem key={vehicle.value} value={vehicle.value}>
                      {vehicle.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="cargoType">Cargo Type *</Label>
              <Select value={bookingDetails.cargoType} onValueChange={(value) => handleInputChange('cargoType', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select cargo type" />
                </SelectTrigger>
                <SelectContent>
                  {cargoTypes.map((cargo) => (
                    <SelectItem key={cargo} value={cargo}>
                      {cargo}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="weight">Weight/Volume *</Label>
                <Input
                  id="weight"
                  type="number"
                  value={bookingDetails.weight}
                  onChange={(e) => handleInputChange('weight', parseFloat(e.target.value) || 0)}
                  placeholder="Enter weight"
                  min="0.1"
                  step="0.1"
                />
              </div>
              <div>
                <Label htmlFor="weightUnit">Unit *</Label>
                <Select value={bookingDetails.weightUnit} onValueChange={(value) => handleInputChange('weightUnit', value)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="kg">Kilograms (kg)</SelectItem>
                    <SelectItem value="tons">Tons</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Special Instructions */}
          <div>
            <Label htmlFor="specialInstructions">Special Instructions (Optional)</Label>
            <Textarea
              id="specialInstructions"
              value={bookingDetails.specialInstructions}
              onChange={(e) => handleInputChange('specialInstructions', e.target.value)}
              placeholder="Any special handling requirements or instructions..."
              rows={3}
            />
          </div>

          {/* Price Estimation */}
          <div className="bg-accent/10 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Calculator className="w-4 h-4 text-accent" />
                <span className="font-semibold">Estimated Price:</span>
              </div>
              <div className="text-xl font-bold text-accent">
                ₹{calculateEstimatedPrice().toLocaleString()}
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              *Final price may vary based on actual requirements and market conditions
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <Button
              onClick={handleAddToCart}
              disabled={!isFormValid()}
              className="flex-1 bg-accent hover:bg-accent/90"
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              Add to Cart - ₹{calculateEstimatedPrice().toLocaleString()}
            </Button>
            <Button
              variant="outline"
              onClick={() => setOpen(false)}
              className="px-6"
            >
              Cancel
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;
