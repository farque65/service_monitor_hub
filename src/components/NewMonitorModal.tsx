import React, { useState } from "react";
import { X, Database, BrainCircuit } from "lucide-react";
type Service = "supabase" | "openai" | "mongodb";
interface NewMonitorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: any) => void;
}
export const NewMonitorModal = ({
  isOpen,
  onClose,
  onSubmit,
}: NewMonitorModalProps) => {
  const [selectedService, setSelectedService] = useState<Service>("supabase");
  if (!isOpen) return null;
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally collect all form data
    onSubmit({
      service: selectedService,
      // Add other form data here
    });
    onClose();
  };
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-md p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X className="h-5 w-5" />
        </button>
        <h2 className="text-xl font-semibold text-gray-900 mb-6">
          Create New Monitor
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Service Type
            </label>
            <div className="grid grid-cols-3 gap-3">
              <button
                type="button"
                onClick={() => setSelectedService("supabase")}
                className={`p-3 border rounded-lg flex flex-col items-center justify-center space-y-2 ${selectedService === "supabase" ? "border-blue-600 bg-blue-50" : "border-gray-200 hover:border-gray-300"}`}
              >
                <Database className="h-6 w-6 text-blue-600" />
                <span className="text-sm">Supabase</span>
              </button>
              <button
                type="button"
                onClick={() => setSelectedService("openai")}
                className={`p-3 border rounded-lg flex flex-col items-center justify-center space-y-2 ${selectedService === "openai" ? "border-blue-600 bg-blue-50" : "border-gray-200 hover:border-gray-300"}`}
              >
                <BrainCircuit className="h-6 w-6 text-purple-600" />
                <span className="text-sm">OpenAI</span>
              </button>
              <button
                type="button"
                onClick={() => setSelectedService("mongodb")}
                className={`p-3 border rounded-lg flex flex-col items-center justify-center space-y-2 ${selectedService === "mongodb" ? "border-blue-600 bg-blue-50" : "border-gray-200 hover:border-gray-300"}`}
              >
                <Database className="h-6 w-6 text-green-600" />
                <span className="text-sm">MongoDB</span>
              </button>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Monitor Name
            </label>
            <input
              type="text"
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-600 focus:border-blue-600"
              placeholder="Production API"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Endpoint URL
            </label>
            <input
              type="url"
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-600 focus:border-blue-600"
              placeholder="https://api.example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Check Interval
            </label>
            <select className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-600 focus:border-blue-600">
              <option value="30">Every 30 seconds</option>
              <option value="60">Every minute</option>
              <option value="300">Every 5 minutes</option>
              <option value="900">Every 15 minutes</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Response Time Threshold (ms)
            </label>
            <input
              type="number"
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-600 focus:border-blue-600"
              placeholder="1000"
            />
          </div>
          <div className="flex space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Create Monitor
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
