import React, { useState, useEffect, useRef } from 'react';
import { Send, Users, MessageCircle, Heart, Globe, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import ChatPopup from '@/components/ChatPopup';
import VolunteerCard from '@/components/VolunteerCard';

interface Message {
  id: string;
  sender: string;
  message: string;
  timestamp: Date;
  type: 'volunteer' | 'aspirant' | 'moderator';
  isOnline: boolean;
}

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

const VolunteerChat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'Priya Sharma',
      message: 'Hi everyone! I\'ve been volunteering with Bhumi for 2 years now. Happy to help with any questions about our environmental projects!',
      timestamp: new Date(Date.now() - 300000),
      type: 'volunteer',
      isOnline: true
    },
    {
      id: '2',
      sender: 'Rahul Gupta',
      message: 'What kind of time commitment is expected for weekend cleanup drives?',
      timestamp: new Date(Date.now() - 240000),
      type: 'aspirant',
      isOnline: true
    },
    {
      id: '3',
      sender: 'Anjali Patel',
      message: 'Usually 4-6 hours on weekends, but it\'s very flexible. We understand everyone has different schedules!',
      timestamp: new Date(Date.now() - 180000),
      type: 'volunteer',
      isOnline: true
    }
  ]);

  const [volunteers, setVolunteers] = useState<Volunteer[]>([
    {
      id: '1',
      name: 'Priya Sharma',
      role: 'Environmental Lead',
      experience: '2 years',
      location: 'Mumbai',
      expertise: ['Tree Plantation', 'Waste Management', 'Community Outreach'],
      isOnline: true,
      joinedDate: '2022',
      avatar: '🌱'
    },
    {
      id: '2',
      name: 'Anjali Patel',
      role: 'Education Coordinator',
      experience: '3 years',
      location: 'Delhi',
      expertise: ['Teaching', 'Curriculum Development', 'Child Psychology'],
      isOnline: true,
      joinedDate: '2021',
      avatar: '📚'
    },
    {
      id: '3',
      name: 'Vikram Singh',
      role: 'Rural Development',
      experience: '1.5 years',
      location: 'Bangalore',
      expertise: ['Agriculture', 'Sustainable Farming', 'Water Conservation'],
      isOnline: false,
      joinedDate: '2023',
      avatar: '🌾'
    },
    {
      id: '4',
      name: 'Meera Krishnan',
      role: 'Health & Wellness',
      experience: '4 years',
      location: 'Chennai',
      expertise: ['Healthcare', 'Nutrition', 'Community Health'],
      isOnline: true,
      joinedDate: '2020',
      avatar: '🏥'
    }
  ]);

  const [newMessage, setNewMessage] = useState('');
  const [userType, setUserType] = useState<'volunteer' | 'aspirant'>('aspirant');
  const [userName, setUserName] = useState('');
  const [activeTab, setActiveTab] = useState<'chat' | 'connect'>('chat');
  const [showPopup, setShowPopup] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (newMessage.trim() && userName.trim()) {
      const message: Message = {
        id: Date.now().toString(),
        sender: userName,
        message: newMessage,
        timestamp: new Date(),
        type: userType,
        isOnline: true
      };
      setMessages([...messages, message]);
      setNewMessage('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    });
  };

  const getMessageStyle = (type: string) => {
    const baseStyle = "p-3 rounded-lg max-w-xs break-words";
    switch (type) {
      case 'volunteer':
        return `${baseStyle} bg-green-100 text-green-800 border-l-4 border-green-500`;
      case 'aspirant':
        return `${baseStyle} bg-blue-100 text-blue-800 border-l-4 border-blue-500`;
      case 'moderator':
        return `${baseStyle} bg-purple-100 text-purple-800 border-l-4 border-purple-500`;
      default:
        return `${baseStyle} bg-gray-100`;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-teal-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-green-100 rounded-full">
                <Heart className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Volunteer Connect</h1>
                <p className="text-gray-600">Connect, Learn, and Grow Together</p>
              </div>
            </div>
            <Button 
              onClick={() => setShowPopup(true)}
              className="bg-green-600 hover:bg-green-700 text-white shadow-md"
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              Quick Chat
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Navigation Tabs */}
        <div className="flex space-x-1 bg-white p-1 rounded-lg shadow-sm mb-8 w-fit">
          <button
            onClick={() => setActiveTab('chat')}
            className={`px-6 py-3 rounded-md font-medium transition-all ${
              activeTab === 'chat'
                ? 'bg-green-600 text-white shadow-sm'
                : 'text-gray-600 hover:text-green-600'
            }`}
          >
            <MessageCircle className="h-4 w-4 inline mr-2" />
            Community Chat
          </button>
          <button
            onClick={() => setActiveTab('connect')}
            className={`px-6 py-3 rounded-md font-medium transition-all ${
              activeTab === 'connect'
                ? 'bg-green-600 text-white shadow-sm'
                : 'text-gray-600 hover:text-green-600'
            }`}
          >
            <Users className="h-4 w-4 inline mr-2" />
            Connect with Volunteers
          </button>
        </div>

        {activeTab === 'chat' ? (
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Chat Section */}
            <div className="lg:col-span-3">
              <Card className="h-[600px] flex flex-col shadow-lg">
                <CardHeader className="bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-t-lg">
                  <CardTitle className="flex items-center">
                    <MessageCircle className="h-5 w-5 mr-2" />
                    <span className="text-base md:text-lg font-semibold">Community Discussion</span>
                    <Badge variant="secondary" className="ml-auto bg-white/20 text-white">
                      {messages.length} messages
                    </Badge>
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="flex-1 flex flex-col p-0">
                  {/* Messages */}
                  <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {messages.map((message) => (
                      <div key={message.id} className="flex flex-col space-y-1">
                        <div className="flex items-center space-x-2">
                          <span className="font-semibold text-sm text-gray-700">
                            {message.sender}
                          </span>
                          <Badge 
                            variant="outline" 
                            className={`text-xs ${
                              message.type === 'volunteer' 
                                ? 'border-green-300 text-green-700' 
                                : message.type === 'aspirant'
                                ? 'border-blue-300 text-blue-700'
                                : 'border-purple-300 text-purple-700'
                            }`}
                          >
                            {message.type === 'volunteer' ? 'Volunteer' : 
                             message.type === 'aspirant' ? 'Aspirant' : 'Moderator'}
                          </Badge>
                          {message.isOnline && (
                            <span className="h-2 w-2 bg-green-400 rounded-full"></span>
                          )}
                          <span className="text-xs text-gray-500">
                            {formatTime(message.timestamp)}
                          </span>
                        </div>
                        <div className={getMessageStyle(message.type)}>
                          {message.message}
                        </div>
                      </div>
                    ))}
                    <div ref={messagesEndRef} />
                  </div>

                  {/* Message Input */}
                  <div className="border-t p-4 bg-gray-50">
                    <div className="flex space-x-2 mb-2">
                      <Input
                        placeholder="Enter your name"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        className="flex-1"
                      />
                      <select
                        value={userType}
                        onChange={(e) => setUserType(e.target.value as 'volunteer' | 'aspirant')}
                        className="px-3 py-2 border rounded-md bg-white"
                      >
                        <option value="aspirant">Aspirant</option>
                        <option value="volunteer">Volunteer</option>
                      </select>
                    </div>
                    <div className="flex space-x-2">
                      <Input
                        placeholder="Ask your question or share your thoughts..."
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        onKeyPress={handleKeyPress}
                        className="flex-1"
                      />
                      <Button 
                        onClick={handleSendMessage}
                        disabled={!newMessage.trim() || !userName.trim()}
                        className="bg-green-600 hover:bg-green-700"
                      >
                        <Send className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Online Users */}
            <div className="lg:col-span-1">
              <Card className="shadow-lg">
                <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-lg">
                  <CardTitle className="flex items-center text-lg">
                    <Users className="h-5 w-5 mr-2" />
                    Online Now
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="space-y-3">
                    {volunteers.filter(v => v.isOnline).map((volunteer) => (
                      <div key={volunteer.id} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50">
                        <div className="text-2xl">{volunteer.avatar}</div>
                        <div className="flex-1">
                          <p className="font-medium text-sm">{volunteer.name}</p>
                          <p className="text-xs text-gray-600">{volunteer.role}</p>
                        </div>
                        <div className="h-3 w-3 bg-green-400 rounded-full"></div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        ) : (
          /* Connect Tab */
          <div>
            <div className="mb-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Meet Our Amazing Volunteers</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Connect with experienced volunteers who are passionate about making a difference. 
                Get insights, ask questions, and find your perfect volunteering opportunity.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {volunteers.map((volunteer) => (
                <VolunteerCard key={volunteer.id} volunteer={volunteer} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Chat Popup */}
      <ChatPopup isOpen={showPopup} onClose={() => setShowPopup(false)} />
    </div>
  );
};

export default VolunteerChat;