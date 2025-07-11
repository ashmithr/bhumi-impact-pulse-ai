import React, { useState } from 'react';
import { MapPin, Calendar, Star, MessageCircle, Mail, Phone } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

interface Volunteer {
  id: string;
  name: string;
  role: string;
  experience: string;
  location: string;
  expertise: string[];
  isOnline: boolean;
  joinedDate: string;
  avatar: string;
}

interface VolunteerCardProps {
  volunteer: Volunteer;
}

const VolunteerCard: React.FC<VolunteerCardProps> = ({ volunteer }) => {
  const [isConnectOpen, setIsConnectOpen] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleConnect = () => {
    // Here you would typically send the connection request to your backend
    console.log('Connecting with:', volunteer.name, contactForm);
    alert(`Connection request sent to ${volunteer.name}!`);
    setIsConnectOpen(false);
    setContactForm({ name: '', email: '', message: '' });
  };

  return (
    <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-l-4 border-l-green-500">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <div className="text-3xl">{volunteer.avatar}</div>
            <div>
              <h3 className="font-semibold text-lg text-gray-900">{volunteer.name}</h3>
              <p className="text-green-600 font-medium text-sm">{volunteer.role}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            {volunteer.isOnline ? (
              <div className="flex items-center space-x-1">
                <div className="h-2 w-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-xs text-green-600 font-medium">Online</span>
              </div>
            ) : (
              <span className="text-xs text-gray-500">Offline</span>
            )}
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Basic Info */}
        <div className="space-y-2">
          <div className="flex items-center text-sm text-gray-600">
            <MapPin className="h-4 w-4 mr-2 text-gray-400" />
            {volunteer.location}
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Calendar className="h-4 w-4 mr-2 text-gray-400" />
            {volunteer.experience} experience
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Star className="h-4 w-4 mr-2 text-gray-400" />
            Joined in {volunteer.joinedDate}
          </div>
        </div>

        {/* Expertise Tags */}
        <div>
          <p className="text-sm font-medium text-gray-700 mb-2">Expertise:</p>
          <div className="flex flex-wrap gap-1">
            {volunteer.expertise.map((skill, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="text-xs bg-green-100 text-green-800 hover:bg-green-200"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        {/* Connect Button */}
        <Dialog open={isConnectOpen} onOpenChange={setIsConnectOpen}>
          <DialogTrigger asChild>
            <Button 
              className="w-full bg-green-600 hover:bg-green-700 text-white"
              disabled={!volunteer.isOnline}
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              {volunteer.isOnline ? 'Connect Now' : 'Offline'}
            </Button>
          </DialogTrigger>
          
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="flex items-center">
                <div className="text-2xl mr-3">{volunteer.avatar}</div>
                Connect with {volunteer.name}
              </DialogTitle>
            </DialogHeader>
            
            <div className="space-y-4">
              <div className="bg-green-50 p-3 rounded-lg">
                <p className="text-sm text-green-800">
                  <strong>{volunteer.name}</strong> specializes in {volunteer.expertise.join(', ')} 
                  and has been volunteering for {volunteer.experience}.
                </p>
              </div>
              
              <div className="space-y-3">
                <div>
                  <label className="text-sm font-medium text-gray-700">Your Name</label>
                  <Input
                    placeholder="Enter your full name"
                    value={contactForm.name}
                    onChange={(e) => setContactForm(prev => ({ ...prev, name: e.target.value }))}
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-gray-700">Your Email</label>
                  <Input
                    type="email"
                    placeholder="your.email@example.com"
                    value={contactForm.email}
                    onChange={(e) => setContactForm(prev => ({ ...prev, email: e.target.value }))}
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-gray-700">Message</label>
                  <Textarea
                    placeholder="Hi! I'm interested in volunteering and would love to learn more about your experience..."
                    value={contactForm.message}
                    onChange={(e) => setContactForm(prev => ({ ...prev, message: e.target.value }))}
                    className="resize-none"
                  />
                </div>
              </div>
              
              <div className="flex space-x-3">
                <Button 
                  onClick={handleConnect}
                  disabled={!contactForm.name || !contactForm.email || !contactForm.message}
                  className="flex-1 bg-green-600 hover:bg-green-700"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Send Request
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => setIsConnectOpen(false)}
                  className="flex-1"
                >
                  Cancel
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
};

export default VolunteerCard;