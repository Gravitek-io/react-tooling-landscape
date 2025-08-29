'use client';

import { useState } from 'react';
import { DemoHeader, ViewMode } from "@/components/demo/DemoHeader";
import { DemoLandscape } from "@/components/demo/DemoLandscape";
import { DemoList } from "@/components/demo/DemoList";

export default function Home() {
  const [currentView, setCurrentView] = useState<ViewMode>('landscape');

  return (
    <div className="min-h-screen bg-gray-50">
      <DemoHeader 
        currentView={currentView} 
        onViewChange={setCurrentView}
      />
      {currentView === 'landscape' ? <DemoLandscape /> : <DemoList />}
    </div>
  );
}
