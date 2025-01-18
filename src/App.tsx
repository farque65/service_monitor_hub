import React, { useState } from "react";
import {
  Plus,
  Database,
  BrainCircuit,
  Server,
  Settings,
  Home,
  AlertCircle,
} from "lucide-react";
import { LoginPage } from "./components/LoginPage";
import { Navbar } from "./components/Navbar";
export function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  if (!isAuthenticated) {
    return <LoginPage onLogin={() => setIsAuthenticated(true)} />;
  }
  return (
    <div className="flex flex-col w-full min-h-screen bg-gray-50">
      <Navbar onLogout={() => setIsAuthenticated(false)} />
      <div className="flex flex-1">
        <div className="w-64 bg-white border-r border-gray-200 p-4">
          <div className="flex items-center space-x-2 mb-8">
            <Server className="h-6 w-6 text-blue-600" />
            <h1 className="font-semibold text-xl">Monitor Hub</h1>
          </div>
          <nav className="space-y-1">
            <a
              href="#"
              className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-blue-50 text-blue-700"
            >
              <Home className="h-5 w-5" />
              <span>Dashboard</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-2 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-50"
            >
              <AlertCircle className="h-5 w-5" />
              <span>Alerts</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-2 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-50"
            >
              <Settings className="h-5 w-5" />
              <span>Settings</span>
            </a>
          </nav>
          <div className="mt-8">
            <h2 className="px-3 text-sm font-medium text-gray-500 uppercase">
              Services
            </h2>
            <div className="mt-2 space-y-1">
              <a
                href="#"
                className="flex items-center space-x-2 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-50"
              >
                <Database className="h-5 w-5" />
                <span>Supabase</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-2 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-50"
              >
                <BrainCircuit className="h-5 w-5" />
                <span>OpenAI</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-2 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-50"
              >
                <Database className="h-5 w-5" />
                <span>MongoDB</span>
              </a>
            </div>
          </div>
        </div>
        <div className="flex-1 p-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-semibold text-gray-900">
              Monitoring Dashboard
            </h1>
            <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              <Plus className="h-5 w-5" />
              <span>New Monitor</span>
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <Database className="h-6 w-6 text-blue-600" />
                  <div>
                    <h3 className="font-medium text-gray-900">Supabase API</h3>
                    <p className="text-sm text-gray-500">Production Database</p>
                  </div>
                </div>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Healthy
                </span>
              </div>
              <div className="mt-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Response Time</span>
                  <span className="text-gray-900">234ms</span>
                </div>
                <div className="flex justify-between text-sm mt-2">
                  <span className="text-gray-500">Uptime</span>
                  <span className="text-gray-900">99.9%</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <BrainCircuit className="h-6 w-6 text-purple-600" />
                  <div>
                    <h3 className="font-medium text-gray-900">OpenAI API</h3>
                    <p className="text-sm text-gray-500">GPT-4 Endpoint</p>
                  </div>
                </div>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                  Warning
                </span>
              </div>
              <div className="mt-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Response Time</span>
                  <span className="text-gray-900">1.2s</span>
                </div>
                <div className="flex justify-between text-sm mt-2">
                  <span className="text-gray-500">Success Rate</span>
                  <span className="text-gray-900">98.5%</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <Database className="h-6 w-6 text-green-600" />
                  <div>
                    <h3 className="font-medium text-gray-900">MongoDB Atlas</h3>
                    <p className="text-sm text-gray-500">Main Cluster</p>
                  </div>
                </div>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Healthy
                </span>
              </div>
              <div className="mt-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Response Time</span>
                  <span className="text-gray-900">156ms</span>
                </div>
                <div className="flex justify-between text-sm mt-2">
                  <span className="text-gray-500">Uptime</span>
                  <span className="text-gray-900">99.99%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
