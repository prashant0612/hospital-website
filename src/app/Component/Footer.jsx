import React from "react";
import { Phone, Mail, GraduationCap, Fan as Fax } from "lucide-react";

const Footer = () => {
  return (
    <div>
      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 to-blue-900 text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3 mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-full flex items-center justify-center">
                <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <span className="text-xl sm:text-2xl font-bold">
                Himalaya Medical College & Hospital
              </span>
            </div>

            <p className="text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base">
              Dedicated to excellence in medical education and patient care
              since 2023. Providing world-class healthcare services and
              comprehensive medical education.
            </p>

            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-xs sm:text-sm text-blue-200 mb-6 sm:mb-8">
              <span>© 2024 HMCH. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <span>www.hmcedu.in</span>
              <span className="hidden sm:inline">•</span>
              <span>Excellence in Healthcare</span>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-6">
              <div className="flex items-center gap-2 text-blue-200 text-xs sm:text-sm">
                <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>24/7 Emergency: +91 9031054080</span>
              </div>
              <div className="flex items-center gap-2 text-blue-200 text-xs sm:text-sm">
                <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>info@hmcedu.in</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
