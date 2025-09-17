import { useScrollToTop } from "@/hooks/useScrollToTop";
import Header from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Minus, Plus, Trash2, ShoppingCart, ArrowRight, MapPin, Truck, Package } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";

const Cart = () => {
  useScrollToTop();
  const { state, updateQuantity, removeFromCart, clearCart } = useCart();
  const { toast } = useToast();

  const handleQuantityChange = (id: string, newQuantity: number) => {
    if (newQuantity < 1) {
      removeFromCart(id);
      toast({
        title: "Item Removed",
        description: "Item has been removed from your cart.",
      });
    } else {
      updateQuantity(id, newQuantity);
    }
  };

  const handleRemoveItem = (id: string, title: string) => {
    removeFromCart(id);
    toast({
      title: "Item Removed",
      description: `${title} has been removed from your cart.`,
    });
  };

  const handleClearCart = () => {
    clearCart();
    toast({
      title: "Cart Cleared",
      description: "All items have been removed from your cart.",
    });
  };

  if (state.items.length === 0) {
    return (
      <main className="min-h-screen bg-background">
        <Header />
        
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-md mx-auto">
              <ShoppingCart className="w-24 h-24 text-muted-foreground mx-auto mb-6" />
              <h1 className="font-heading text-3xl font-bold mb-4">Your Cart is Empty</h1>
              <p className="text-muted-foreground mb-8">
                Add some services to your cart to get started with your logistics needs.
              </p>
              <Button asChild className="bg-primary hover:bg-primary/90">
                <Link to="/services">
                  Browse Services
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Your <span className="text-accent">Cart</span>
          </h1>
          <p className="text-xl opacity-90">
            Review your selected services and proceed to checkout
          </p>
        </div>
      </section>

      {/* Cart Items */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="flex justify-between items-center mb-6">
                <h2 className="font-heading text-2xl font-bold">
                  Cart Items ({state.totalItems})
                </h2>
                <Button 
                  variant="outline" 
                  onClick={handleClearCart}
                  className="text-red-600 border-red-600 hover:bg-red-600 hover:text-white"
                >
                  <Trash2 className="w-4 h-4 mr-2" />
                  Clear Cart
                </Button>
              </div>

              <div className="space-y-4">
                {state.items.map((item) => (
                  <Card key={item.id} className="overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center gap-4">
                        <div className="flex-1">
                          <h3 className="font-heading text-xl font-bold mb-2">
                            {item.title}
                          </h3>
                          <p className="text-muted-foreground mb-3">
                            {item.description}
                          </p>
                          
                          {/* Enhanced Details */}
                          {item.fromLocation && item.toLocation && (
                            <div className="mb-3 p-3 bg-secondary/20 rounded-lg">
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                                <div className="flex items-center gap-2">
                                  <MapPin className="w-3 h-3 text-accent" />
                                  <span><strong>From:</strong> {item.fromLocation}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <MapPin className="w-3 h-3 text-accent" />
                                  <span><strong>To:</strong> {item.toLocation}</span>
                                </div>
                                {item.vehicleType && (
                                  <div className="flex items-center gap-2">
                                    <Truck className="w-3 h-3 text-accent" />
                                    <span><strong>Vehicle:</strong> {item.vehicleType.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}</span>
                                  </div>
                                )}
                                {item.cargoType && (
                                  <div className="flex items-center gap-2">
                                    <Package className="w-3 h-3 text-accent" />
                                    <span><strong>Cargo:</strong> {item.cargoType}</span>
                                  </div>
                                )}
                                {item.weight && (
                                  <div className="flex items-center gap-2">
                                    <span><strong>Weight:</strong> {item.weight} {item.weightUnit}</span>
                                  </div>
                                )}
                                {item.distance && (
                                  <div className="flex items-center gap-2">
                                    <span><strong>Distance:</strong> {item.distance} km</span>
                                  </div>
                                )}
                              </div>
                            </div>
                          )}
                          
                          <div className="flex items-center justify-between">
                            <p className="text-accent font-semibold text-lg">
                              {item.calculatedPrice && item.calculatedPrice > 0 
                                ? `₹${item.calculatedPrice.toLocaleString()}` 
                                : item.price}
                            </p>
                            {item.calculatedPrice && item.calculatedPrice > 0 && item.price !== `₹${item.calculatedPrice.toLocaleString()}` && (
                              <p className="text-sm text-muted-foreground line-through">
                                {item.price}
                              </p>
                            )}
                          </div>
                          
                          {/* Features */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-1 mt-3">
                            {item.features.slice(0, 4).map((feature, index) => (
                              <div key={index} className="flex items-center text-sm text-muted-foreground">
                                <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2 flex-shrink-0"></div>
                                <span>{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="flex items-center gap-4">
                          {/* Quantity Controls */}
                          <div className="flex items-center border rounded-lg">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                              className="h-10 w-10 p-0"
                            >
                              <Minus className="w-4 h-4" />
                            </Button>
                            <span className="px-4 py-2 font-medium min-w-[3rem] text-center">
                              {item.quantity}
                            </span>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                              className="h-10 w-10 p-0"
                            >
                              <Plus className="w-4 h-4" />
                            </Button>
                          </div>

                          {/* Remove Button */}
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleRemoveItem(item.id, item.title)}
                            className="text-red-600 border-red-600 hover:bg-red-600 hover:text-white"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="sticky top-4">
                <CardContent className="p-6">
                  <h3 className="font-heading text-xl font-bold mb-4">
                    Order Summary
                  </h3>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span>Total Items:</span>
                      <span className="font-medium">{state.totalItems}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Services:</span>
                      <span className="font-medium">{state.items.length}</span>
                    </div>
                    <div className="border-t pt-3">
                      <div className="flex justify-between text-lg font-bold">
                        <span>Total:</span>
                        <span className="text-accent">
                          {state.totalPrice > 0 ? `₹${state.totalPrice.toLocaleString()}` : 'Custom Quote'}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">
                        {state.totalPrice > 0 
                          ? 'Estimated total based on your specifications' 
                          : 'Final pricing will be calculated based on your specific requirements'
                        }
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Button 
                      asChild 
                      className="w-full bg-accent hover:bg-accent/90"
                    >
                      <Link to="/checkout">
                        Proceed to Checkout
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      asChild 
                      className="w-full"
                    >
                      <Link to="/services">
                        Continue Shopping
                      </Link>
                    </Button>
                  </div>

                  {/* Trust Indicators */}
                  <div className="mt-6 pt-6 border-t">
                    <div className="text-center text-sm text-muted-foreground">
                      <p className="mb-2">✓ Secure checkout process</p>
                      <p className="mb-2">✓ Professional service guarantee</p>
                      <p>✓ 24/7 customer support</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Cart;
