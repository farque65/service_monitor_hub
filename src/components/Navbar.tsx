import React from "react";
import { Server, LogOut } from "lucide-react";
export const Navbar = ({ onLogout }: { onLogout: () => void }) => {
  return (
    <div className="bg-white border-b border-gray-200">
      <div className="flex justify-between items-center px-4 py-3">
        <div className="flex items-center space-x-2">
          <Server className="h-6 w-6 text-blue-600" />
          <span className="font-semibold text-xl">Monitor Hub</span>
        </div>
        <button
          onClick={onLogout}
          className="flex items-center space-x-2 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100"
        >
          <LogOut className="h-5 w-5" />
          <span>Sign out</span>
        </button>
      </div>
    </div>
  );
};
