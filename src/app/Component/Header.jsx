import React, { useState, useEffect } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  ChevronDown,
  GraduationCap,
  Users,
  BookOpen,
  UserPlus,
  Building2,
  Briefcase,
  FileText,
  Shield,
  Eye,
  Camera,
  Calendar,
  MessageCircle,
  HeartPulse,
  Stethoscope,
  Ambulance,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigationItems = [
    { name: "Home", href: "#", icon: Building2 },
    {
      name: "About us",
      href: "#",
      icon: Users,
      dropdown: [
        "Our Vision",
        "Our Mission",
        "Management",
        "Principal's Message",
        "Infrastructure",
      ],
    },
    {
      name: "Academics",
      href: "#",
      icon: BookOpen,
      dropdown: [
        "MBBS",
        "Nursing",
        "Paramedical",
        "Academic Calendar",
        "Syllabus",
        "Examination",
      ],
    },
    {
      name: "Admission",
      href: "#",
      icon: UserPlus,
      dropdown: [
        "Admission Process",
        "Eligibility Criteria",
        "Fee Structure",
        "Scholarship",
        "Application Form",
      ],
    },
    {
      name: "Hospital",
      href: "#",
      icon: HeartPulse,
      dropdown: [
        "Services",
        "Departments",
        "Facilities",
        "Emergency",
        "OPD Timings",
      ],
    },
    {
      name: "Department",
      href: "#",
      icon: Stethoscope,
      dropdown: [
        "Medical Departments",
        "Non-Medical Departments",
        "Faculty",
        "Staff",
      ],
    },
    {
      name: "Government Approval",
      href: "#",
      icon: Shield,
      dropdown: [
        "MCI Recognition",
        "University Affiliation",
        "State Government",
        "Other Approvals",
      ],
    },
    {
      name: "Mandatory Disclosure",
      href: "#",
      icon: Eye,
      dropdown: [
        "UGC Disclosure",
        "Annual Report",
        "Financial Statement",
        "Other Documents",
      ],
    },
    {
      name: "Apply for Job",
      href: "#",
      icon: Briefcase,
      dropdown: [
        "Faculty Positions",
        "Staff Positions",
        "Application Process",
        "Current Openings",
      ],
    },
    {
      name: "Gallery",
      href: "#",
      icon: Camera,
      dropdown: ["Campus Photos", "Events", "Achievements", "Infrastructure"],
    },
    {
      name: "HMCH AEBAS Attendance",
      href: "#",
      icon: Calendar,
    },
    {
      name: "Contact",
      href: "#",
      icon: MessageCircle,
    },
  ];

  const actionButtons = [
    {
      name: "Student Enquiry",
      bg: "bg-amber-500 hover:bg-amber-600",
      href: "#",
      icon: UserPlus,
    },
    {
      name: "Notice",
      bg: "bg-emerald-600 hover:bg-emerald-700",
      href: "#",
      icon: FileText,
    },
    {
      name: "Emergency",
      bg: "bg-red-600 hover:bg-red-700",
      href: "#",
      icon: Ambulance,
    },
    {
      name: "Student Login",
      bg: "bg-purple-700 hover:bg-purple-800",
      href: "#",
      icon: GraduationCap,
    },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActiveDropdown(null);
  };

  const handleDropdownToggle = (itemName) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  // Animation variants for the mobile menu
  const mobileMenuVariants = {
    hidden: { x: "-100%" },
    visible: { x: 0 },
    exit: { x: "-100%" },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isMobileMenuOpen]);

  return (
    <div className="relative">
      {/* Top Contact Bar */}
      <div className="bg-[#e37562] text-white py-2 px-4 shadow-sm hidden lg:block">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm">
          {/* Left Section */}
          <div className="flex flex-col md:flex-row items-center space-y-1 md:space-y-0 md:space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-white/80" />
              <span className="text-white/90 text-xs md:text-sm">
                Emergency: 9304637349
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-white/80" />
              <span className="text-white/90 text-xs md:text-sm">
                himalayauniv.hmch@gmail.com
              </span>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-2 mt-1 md:mt-0">
            <MapPin className="w-4 h-4 text-white/80" />
            <span className="text-white/90 text-xs md:text-sm">
              Paliganj, Chiksi, Kinjar Road, State Highway, Patna, Bihar 801110
            </span>
          </div>
        </div>
      </div>

      {/* Main Header */}
     <header
        className={`bg-white shadow-md transition-all duration-300 ${
          isSticky
            ? "fixed top-0 left-0 right-0 z-40 shadow-xl animate-dropIn"
            : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between py-3 md:py-4">
            {/* Mobile Menu Button - Left Side */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 rounded-md text-blue-600 hover:bg-blue-50 transition-colors duration-200"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>

            {/* Logo - Center for Mobile */}
            <div className="lg:hidden flex-shrink-0 mx-auto">
              <div className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg">
                <img
                  src="/logo.png"
                  alt="logo"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Empty div to balance flex layout on mobile */}
            <div className="lg:hidden w-10"></div>

            {/* Logo and College Info - Desktop */}
            <div className="hidden lg:flex items-center space-x-4">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-full flex items-center justify-center shadow-lg">
                  <img
                    src="/logo.png"
                    alt="logo"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div>
                <h1 className="text-xl lg:text-2xl font-bold text-blue-800 leading-tight">
                  HIMALAYA MEDICAL COLLEGE & HOSPITAL
                </h1>
                <div className="text-blue-600 text-xs lg:text-sm space-y-1">
                  <p className="font-semibold">
                    Run By: Himalaya Educational Trust
                  </p>
                  <p>Chiksi, (SH-69), Paliganj, Patna, Bihar - 801110</p>
                </div>
              </div>
            </div>

            {/* Action Buttons - Desktop */}
            <div className="hidden lg:flex items-center space-x-3">
              {actionButtons.map((button, index) => (
                <a
                  key={index}
                  href={button.href}
                  className={`${button.bg} text-white px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-200 hover:shadow-lg flex items-center space-x-2`}
                >
                  <button.icon className="w-4 h-4" />
                  <span className="whitespace-nowrap">{button.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Mobile College Info */}
          <div className="lg:hidden mt-1 text-center pb-2">
            <h1 className="text-base sm:text-lg font-bold text-blue-800 leading-tight">
              HIMALAYA MEDICAL COLLEGE & HOSPITAL
            </h1>
            <div className="text-blue-600 text-xs mt-1 space-y-1">
              <p className="font-semibold">
                Run By: Himalaya Educational Trust
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav
          className={`bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 text-white ${
            isSticky ? "shadow-lg transition-all ease-in-out duration-200" : ""
          }`}
        >
          <div className="w-full mx-auto">
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center justify-center align-middle flex-wrap">
              {navigationItems.map((item, index) => (
                <div key={index} className="relative group">
                  <a
                    href={item.href}
                    className="flex items-center text-xs space-x-1 px-2 py-2 hover:bg-blue-500 hover:bg-opacity-80 transition-colors duration-200 font-medium"
                    onMouseEnter={() =>
                      item.dropdown && setActiveDropdown(item.name)
                    }
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <item.icon className="w-4 h-4" />
                    <span className="whitespace-nowrap">{item.name}</span>
                    {item.dropdown && <ChevronDown className="w-4 h-4" />}
                  </a>

                  {/* Dropdown Menu */}
                  {item.dropdown && activeDropdown === item.name && (
                    <div
                      className="absolute top-full left-0 bg-white text-gray-800 shadow-xl rounded-b-lg min-w-48 z-50 border-t-4 border-blue-400"
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      {item.dropdown.map((dropdownItem, dropIndex) => (
                        <a
                          key={dropIndex}
                          href="#"
                          className="px-4 py-3 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 border-b border-gray-100 last:border-b-0 text-xs font-medium flex items-center space-x-2"
                        >
                          {item.name === "Hospital" && dropIndex === 3 ? (
                            <Ambulance className="w-3 h-3" />
                          ) : item.name === "Department" ? (
                            <Stethoscope className="w-3 h-3" />
                          ) : (
                            <item.icon className="w-3 h-3" />
                          )}
                          <span>{dropdownItem}</span>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Navigation - Slides from left */}
            <AnimatePresence>
              {isMobileMenuOpen && (
                <div className="lg:hidden fixed inset-0 z-50">
                  {/* Overlay with fade animation */}
                  <motion.div
                    className="absolute inset-0 bg-black/60"
                    onClick={toggleMobileMenu}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={overlayVariants}
                    transition={{ duration: 0.3 }}
                  ></motion.div>

                  {/* Menu Content with slide animation */}
                  <motion.div
                    className="absolute left-0 top-0 h-full w-3/4 max-w-xs bg-gradient-to-b from-blue-500 to-blue-600 shadow-xl"
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={mobileMenuVariants}
                    transition={{
                      type: "tween",
                      ease: "easeInOut",
                      duration: 0.3,
                    }}
                  >
                    <div className="h-full flex flex-col">
                      {/* Menu Header */}
                      <div className="flex items-center justify-between p-4 border-b border-blue-400 border-opacity-50">
                        <div className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg bg-white">
                          <img
                            src="/logo.png"
                            alt="logo"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <button
                          onClick={toggleMobileMenu}
                          className="p-2 rounded-md text-white hover:bg-blue-400 hover:bg-opacity-50 transition-colors duration-200"
                        >
                          <X className="w-6 h-6" />
                        </button>
                      </div>

                      {/* Action Buttons */}
                      <div className="border-b border-blue-400 border-opacity-50 p-4">
                        <div className="grid grid-cols-2 gap-2">
                          {actionButtons.map((button, index) => (
                            <motion.a
                              key={index}
                              href={button.href}
                              className={`${button.bg} text-white px-3 py-2 rounded-lg text-xs font-medium transition-colors duration-200 flex items-center justify-center space-x-2`}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.05 + 0.2 }}
                            >
                              <button.icon className="w-3 h-3" />
                              <span>{button.name}</span>
                            </motion.a>
                          ))}
                        </div>
                      </div>

                      {/* Navigation Items */}
                      <div className="flex-1 overflow-y-auto py-2">
                        {navigationItems.map((item, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.03 + 0.2 }}
                          >
                            <div
                              className="flex items-center justify-between px-4 py-3 hover:bg-blue-400 hover:bg-opacity-50 transition-colors duration-200 border-b border-blue-400 border-opacity-30"
                              onClick={() =>
                                item.dropdown && handleDropdownToggle(item.name)
                              }
                            >
                              <div className="flex items-center space-x-3">
                                <item.icon className="w-4 h-4" />
                                <span className="text-sm">{item.name}</span>
                              </div>
                              {item.dropdown && (
                                <ChevronDown
                                  className={`w-4 h-4 transition-transform duration-200 ${
                                    activeDropdown === item.name
                                      ? "rotate-180"
                                      : ""
                                  }`}
                                />
                              )}
                            </div>

                            {/* Dropdown */}
                            {item.dropdown && activeDropdown === item.name && (
                              <motion.div
                                className="bg-blue-400 bg-opacity-80 border-l-4 border-blue-200"
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                              >
                                {item.dropdown.map(
                                  (dropdownItem, dropIndex) => (
                                    <motion.a
                                      key={dropIndex}
                                      href="#"
                                      className="px-8 py-2 text-xs hover:bg-blue-300 hover:bg-opacity-50 transition-colors duration-200 text-blue-50 flex items-center space-x-2"
                                      initial={{ opacity: 0 }}
                                      animate={{ opacity: 1 }}
                                      transition={{ delay: dropIndex * 0.05 }}
                                    >
                                      {item.name === "Hospital" &&
                                      dropIndex === 3 ? (
                                        <Ambulance className="w-3 h-3" />
                                      ) : item.name === "Department" ? (
                                        <Stethoscope className="w-3 h-3" />
                                      ) : (
                                        <item.icon className="w-3 h-3" />
                                      )}
                                      <span>{dropdownItem}</span>
                                    </motion.a>
                                  )
                                )}
                              </motion.div>
                            )}
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              )}
            </AnimatePresence>
          </div>
        </nav>
      </header>

      {/* Spacer for when header becomes sticky */}
      {isSticky && <div className="h-[120px] md:h-[140px]"></div>}
    </div>
  );
};

export default Header;
