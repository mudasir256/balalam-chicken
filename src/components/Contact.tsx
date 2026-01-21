import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, Car, Accessibility, Send, Users, Flame } from "lucide-react";
import puplicinrestaurent1 from "@/assets/puplicinrestaurent1.png";
import puplicinrestaurent2 from "@/assets/puplicinrestaurent2.png";

const contactInfo = [
  {
    icon: MapPin,
    title: "Location",
    info: "Prince Muhammad Ibn Abd Al Aziz, As Sulimaniyah",
    subInfo: "Riyadh 12211, Saudi Arabia",
  },
  {
    icon: Phone,
    title: "Phone",
    info: "+966 11 512 7373",
    subInfo: "+966 11 011 3087",
  },
  {
    icon: Mail,
    title: "Email",
    info: "itskamikhalil@gmail.com",
  },
  {
    icon: Clock,
    title: "Hours",
    info: "Always Open",
    subInfo: "Closes 4 AM",
  },
];

const amenities = [
  "Wheelchair accessible",
  "Free parking",
  "Outdoor seating",
  "Dine-in & Takeout",
  "Delivery available",
  "Kids friendly",
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="container px-4 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <span className="inline-block px-6 py-3 bg-gradient-primary/20 rounded-full text-primary font-semibold mb-6 border border-primary/30 shadow-lg">
            Visit Us
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
            Come <span className="text-gradient">Hungry</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-md mx-auto">
            Find us in the heart of Riyadh. Walk-ins welcome, or order for delivery!
          </p>
        </div>

        {/* Contact Form Section */}
        <div className="mb-16">
          <div className="max-w-2xl mx-auto">
            <div className="bg-card rounded-3xl border-2 border-border p-8 md:p-12 shadow-xl">
              <h3 className="text-3xl font-bold mb-2 text-center">Get In Touch</h3>
              <p className="text-muted-foreground text-center mb-8">
                Have a question or feedback? We'd love to hear from you!
              </p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-semibold">
                      Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="h-12"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-semibold">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="h-12"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm font-semibold">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="h-12"
                    placeholder="+966 5XX XXX XXXX"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-semibold">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="min-h-[150px] resize-none"
                    placeholder="Tell us what's on your mind..."
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-primary hover:opacity-90 text-primary-foreground font-semibold text-lg py-7"
                >
                  Send Message
                  <Send className="w-5 h-5 ml-2" />
                </Button>
              </form>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-card border-2 border-border hover:border-primary/70 transition-all duration-300 card-hover"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-sm text-muted-foreground mb-1 font-semibold">{item.title}</h3>
                <p className="font-semibold text-lg">{item.info}</p>
                {item.subInfo && (
                  <p className="text-sm text-muted-foreground mt-1">{item.subInfo}</p>
                )}
              </div>
            ))}
          </div>

          {/* Amenities & CTA */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-6">Amenities & Services</h3>
              <div className="flex flex-wrap gap-3 mb-8">
                {amenities.map((amenity, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-muted rounded-full text-sm font-medium border border-border"
                  >
                    {amenity}
                  </span>
                ))}
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4 text-muted-foreground p-4 bg-card rounded-xl border border-border">
                  <Car className="w-6 h-6 text-primary" />
                  <span className="font-medium">Free parking lot & street parking</span>
                </div>
                <div className="flex items-center gap-4 text-muted-foreground p-4 bg-card rounded-xl border border-border">
                  <Accessibility className="w-6 h-6 text-primary" />
                  <span className="font-medium">Fully wheelchair accessible</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button
                variant="default"
                size="lg"
                className="flex-1 bg-gradient-primary hover:opacity-90 text-primary-foreground font-semibold"
                onClick={() => window.open("https://hungerstation.com/sa-en/restaurant/riyadh/riyadh/146982", "_blank")}
              >
                Order Delivery
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="flex-1 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold"
                onClick={() => window.open("https://maps.google.com/?q=PM2W+RC+As+Sulimaniyah,+Riyadh+Saudi+Arabia", "_blank")}
              >
                Get Directions
              </Button>
            </div>
          </div>
        </div>

        {/* Restaurant Images */}
        <div className="mt-16 grid md:grid-cols-2 gap-6">
          <div className="relative rounded-3xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300">
            <img
              src={puplicinrestaurent1}
              alt="Restaurant Interior"
              className="w-full h-full object-cover aspect-video"
            />
          </div>
          <div className="relative rounded-3xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300">
            <img
              src={puplicinrestaurent2}
              alt="Restaurant Interior"
              className="w-full h-full object-cover aspect-video"
            />
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="mb-16">
          <div className="bg-card rounded-3xl border-2 border-border p-8 md:p-12">
            <h3 className="text-3xl font-bold mb-6 text-center">Why Visit Us?</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-primary-foreground" />
                </div>
                <h4 className="font-bold text-lg mb-2">Open Late</h4>
                <p className="text-muted-foreground text-sm">
                  We're open until 4 AM, perfect for late-night cravings!
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary-foreground" />
                </div>
                <h4 className="font-bold text-lg mb-2">Family Friendly</h4>
                <p className="text-muted-foreground text-sm">
                  Great atmosphere for families with kids of all ages.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                  <Flame className="w-8 h-8 text-primary-foreground" />
                </div>
                <h4 className="font-bold text-lg mb-2">Fresh Daily</h4>
                <p className="text-muted-foreground text-sm">
                  All our chicken is prepared fresh daily with premium ingredients.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Map Embed Placeholder */}
        <div className="rounded-3xl overflow-hidden border-2 border-border h-96 bg-muted flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
            <p className="text-lg font-semibold mb-2">PM2W+RC As Sulimaniyah, Riyadh</p>
            <p className="text-muted-foreground mb-4">Prince Muhammad Ibn Abd Al Aziz, As Sulimaniyah</p>
            <Button
              variant="default"
              size="lg"
              className="bg-gradient-primary hover:opacity-90 text-primary-foreground font-semibold"
              onClick={() => window.open("https://maps.google.com/?q=PM2W+RC+As+Sulimaniyah,+Riyadh+Saudi+Arabia", "_blank")}
            >
              Open in Google Maps
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
