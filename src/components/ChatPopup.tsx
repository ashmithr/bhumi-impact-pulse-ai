import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Users, Heart, Globe, Leaf, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface ChatPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const ChatPopup: React.FC<ChatPopupProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white rounded-lg shadow-xl max-w-lg w-full relative p-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl font-bold"
          aria-label="Close"
        >
          ×
        </button>
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Quick Volunteer Chat</h2>
          <p className="text-gray-600">Ask questions, get guidance, and connect instantly with our volunteer community!</p>
        </div>
      </div>
    </div>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-teal-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-green-100 rounded-full">
                <Heart className="h-12 w-12 text-green-600" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 sm:text-6xl mb-6">
              Welcome to <span className="text-green-600">Bhumi</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Connecting hearts, transforming communities. Join thousands of volunteers 
              making a real difference in education, environment, and social development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/volunteer-chat">
                <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg">
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Connect with Volunteers
                </Button>
              </Link>
              <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-3 text-lg">
                <Users className="h-5 w-5 mr-2" />
                Become a Volunteer
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            How We're Making a Difference
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Through dedicated volunteers and innovative programs, we're creating lasting impact across communities.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center hover:shadow-lg transition-shadow border-l-4 border-l-green-500">
            <CardHeader>
              <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-green-600" />
              </div>
              <CardTitle className="text-green-600">Education</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Empowering underprivileged children through quality education, 
                skill development, and mentorship programs.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow border-l-4 border-l-blue-500">
            <CardHeader>
              <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Leaf className="h-6 w-6 text-blue-600" />
              </div>
              <CardTitle className="text-blue-600">Environment</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Protecting our planet through tree plantation, waste management, 
                and sustainable development initiatives.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow border-l-4 border-l-purple-500">
            <CardHeader>
              <div className="mx-auto w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-purple-600" />
              </div>
              <CardTitle className="text-purple-600">Community</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Building stronger communities through healthcare, rural development, 
                and social awareness programs.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Ready to Make a Difference?</h3>
          <p className="text-lg mb-6 opacity-90">
            Connect with our community of passionate volunteers and start your journey of impact today.
          </p>
          <Link to="/volunteer-chat">
            <Button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
              <MessageCircle className="h-5 w-5 mr-2" />
              Start Chatting with Volunteers
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChatPopup;