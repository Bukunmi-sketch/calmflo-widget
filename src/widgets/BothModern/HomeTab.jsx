// HomeTab Component
import { MessageCircle, FileText, X, Send, ChevronDown, Home, User, MoreHorizontal, Star, Globe, Loader2, Upload, Phone, Mail } from "lucide-react";
import PoweredBy from "./poweredBy";


const HomeTab = ({ formData, actionText, switchTab, setShowLeadsForm }) => {
  return (
    <div className="h-full overflow-y-auto">
      {/* Extended Home Header */}
      {/* <div className="bg-black text-white p-6">
        <div className="flex items-center space-x-4 mb-4">
          {formData?.allowWidgetDisplayPicture && formData?.widget_image && (
            <img src={formData?.widget_image} alt="Assistant" className="w-12 h-12 rounded-full border-2 border-white/30" />
          )}
          <div>
            <h1 className="text-2xl font-bold mb-1">{formData?.name || 'Hi Sophie 👋'}</h1>
            <p className="text-gray-300 text-sm leading-relaxed max-w-sm">
              {actionText || "Welcome! We're here to help you with anything you need. Let's get started!"}
            </p>
          </div>
        </div>
      </div> */}

      <div className="p-4 space-y-4 pb-20">
        {/* Welcome Section */}
        <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
          <div className="flex items-center space-x-3 mb-3">
            <div className="flex -space-x-2">
              <img className="w-8 h-8 rounded-full border-2 border-white shadow-sm" src="https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=32&h=32&fit=crop&crop=face" alt="Team" />
              <img className="w-8 h-8 rounded-full border-2 border-white shadow-sm" src="https://images.unsplash.com/photo-1570612861542-284f4c12e75f?w=32&h=32&fit=crop&crop=face" alt="Team" />
              <img className="w-8 h-8 rounded-full border-2 border-white shadow-sm" src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?w=32&h=32&fit=crop&crop=face" alt="Team" />
            </div>
            <div>
              <p className="text-xs text-gray-600">Our usual reply time</p>
              <p className="text-sm font-semibold text-gray-800 flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span>
                A few minutes
              </p>
            </div>
          </div>
          <button
            onClick={() => switchTab("chat")}
            className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 px-4 rounded-full flex items-center justify-center space-x-2 transition-colors"
          >
            <span>Send us a message</span>
            <Send className="w-4 h-4" />
          </button>
        </div>

        {/* Quick Actions */}
        <div className="space-y-2">
          <h3 className="font-semibold text-gray-800 text-sm">Quick Actions</h3>
          {formData?.actionButtons?.map((button, index) => (
            <a key={index} href={button.link || "#"} className="block">
              <div className="flex justify-between items-center p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors border border-gray-200">
                <span className="text-sm text-gray-700">{button.text || "Default Label"}</span>
                <ChevronDown className="w-4 h-4 text-gray-400 transform -rotate-90" />
              </div>
            </a>
          ))}
          <button
            onClick={() => setShowLeadsForm(true)}
            className="w-full flex justify-between items-center p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors border border-gray-200"
          >
            <span className="text-sm text-gray-700">Get in Touch</span>
            <Mail className="w-4 h-4 text-gray-400" />
          </button>
        </div>

        {/* FAQ Section */}
        <div className="space-y-2">
          <h3 className="font-semibold text-gray-800 text-sm">Frequently Asked</h3>
          <div className="space-y-2">
            {formData?.actionFaq?.map((faq, index) => (
              <details key={index} className="group bg-gray-50 rounded-lg border border-gray-200">
                <summary className="flex cursor-pointer list-none items-center justify-between p-3 font-medium text-sm">
                  <span className="text-gray-700">{faq.question}</span>
                  <span className="transition group-open:rotate-180">
                    <ChevronDown className="w-4 h-4 text-gray-400" />
                  </span>
                </summary>
                <div className="px-3 pb-3">
                  <p className="text-xs text-gray-600">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>


        <div className="mb-6">
          <h4 className="text-lg font-bold text-gray-800 mb-4">Latest Updates</h4>
          <div className="space-y-4">
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover-lift">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h5 className="font-semibold text-gray-800 text-sm mb-1">New AI Features Released</h5>
                  <p className="text-xs text-gray-600 mb-2">Enhanced chat capabilities with improved response accuracy and faster processing.</p>
                  <span className="text-xs text-gray-400">2 hours ago</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover-lift">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h5 className="font-semibold text-gray-800 text-sm mb-1">System Maintenance Complete</h5>
                  <p className="text-xs text-gray-600 mb-2">All services are now running optimally with improved performance.</p>
                  <span className="text-xs text-gray-400">1 day ago</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover-lift">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h5 className="font-semibold text-gray-800 text-sm mb-1">Mobile App Update</h5>
                  <p className="text-xs text-gray-600 mb-2">Version 2.1 now available with dark mode and better notifications.</p>
                  <span className="text-xs text-gray-400">3 days ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>



      </div>
      {/* <PoweredBy/> */}
    </div>
  );
};

export default HomeTab;