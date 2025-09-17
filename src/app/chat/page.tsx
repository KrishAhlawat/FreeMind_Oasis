import ChatDashboardSidebar from '@/components/chat/ChatDashboardSidebar';
import AIChatInterface from '@/components/chat/AIChatInterface';

export default function ChatPage() {
  return (
    <div className="chat-dashboard flex h-screen bg-gray-50">
      {/* Left Sidebar - Dashboard */}
      <ChatDashboardSidebar />
      
      {/* Main Content - AI Chat Interface */}
      <AIChatInterface />
    </div>
  );
}