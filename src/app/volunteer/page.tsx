import DashboardSidebar from '@/components/volunteer/DashboardSidebar';
import MessagingInterface from '@/components/volunteer/MessagingInterface';
import ProfileSection from '@/components/volunteer/ProfileSection';

export default function VolunteerPage() {
  return (
    <div className="volunteer-dashboard flex h-screen bg-gray-50">
      {/* Left Sidebar - Dashboard */}
      <DashboardSidebar />
      
      {/* Main Content - Messaging Interface */}
      <MessagingInterface />
      
      {/* Right Sidebar - Profile Section */}
      <ProfileSection />
    </div>
  );
}