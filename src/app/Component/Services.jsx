import React, { useState, useEffect } from "react";
import {
  GraduationCap,
  Stethoscope,
  Briefcase,
  Heart,
  ChevronRight,
  Star,
  Users,
  Award,
  Clock,
  Shield,
  Book,
  Activity,
} from "lucide-react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Services() {
  const [activeService, setActiveService] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      id: 1,
      title: "Academic Support",
      icon: <GraduationCap className="w-6 h-6" />,
      image: "/service/pic1.jpg",
      items: [
        "Tutoring for challenging subjects",
        "Study skills workshops",
        "Access to research resources",
        "Academic counseling",
      ],
      accent: "blue",
      stats: { number: "95%", label: "Success" },
    },
    {
      id: 2,
      title: "Clinical Training",
      icon: <Stethoscope className="w-6 h-6" />,
      image: "/service/pic2.jpg",
      items: [
        "Hands-on clinical training",
        "Experienced supervision",
        "Clinical rotations",
        "Simulation labs",
      ],
      accent: "emerald",
      stats: { number: "500+", label: "Hours" },
    },
    {
      id: 3,
      title: "Career Services",
      icon: <Briefcase className="w-6 h-6" />,
      image: "/service/pic3.jpg",
      items: [
        "Career path guidance",
        "Residency applications",
        "Job placement",
        "Professional workshops",
      ],
      accent: "violet",
      stats: { number: "98%", label: "Placement" },
    },
    {
      id: 4,
      title: "Mental Health",
      icon: <Heart className="w-6 h-6" />,
      image: "/service/pic4.jpg",
      items: [
        "Counseling support",
        "Stress management",
        "Confidential sessions",
        "Wellness programs",
      ],
      accent: "rose",
      stats: { number: "24/7", label: "Support" },
    },
    {
      id: 5,
      title: "Healthcare Services",
      icon: <Shield className="w-6 h-6" />,
      image: "/service/pic5.jpg",
      items: [
        "On-campus healthcare facilities",
        "Preventive health services",
        "Chronic condition support",
        "Immunizations",
      ],
      accent: "blue",
      stats: { number: "100%", label: "Coverage" },
    },
    {
      id: 6,
      title: "Financial Aid",
      icon: <Award className="w-6 h-6" />,
      image: "/service/pic6.jpg",
      items: [
        "Financial aid options",
        "Scholarship assistance",
        "Student loan counseling",
        "Grant applications",
      ],
      accent: "emerald",
      stats: { number: "$10M+", label: "Awarded" },
    },
    {
      id: 7,
      title: "Student Life",
      icon: <Users className="w-6 h-6" />,
      image: "/service/pic7.jpg",
      items: [
        "Medical student organizations",
        "Community service opportunities",
        "Networking events",
        "Social activities",
      ],
      accent: "violet",
      stats: { number: "50+", label: "Clubs" },
    },
    {
      id: 8,
      title: "Professional Development",
      icon: <Star className="w-6 h-6" />,
      image: "/service/pic8.jpg",
      items: [
        "Career workshops",
        "Academic progress support",
        "Publishing assistance",
        "Leadership seminars",
      ],
      accent: "rose",
      stats: { number: "100+", label: "Events" },
    },
    {
      id: 9,
      title: "Library Resources",
      icon: <Book className="w-6 h-6" />,
      image: "/service/pic9.jpeg",
      items: [
        "Medical journal access",
        "Research databases",
        "Study spaces",
        "Librarian support",
      ],
      accent: "blue",
      stats: { number: "10K+", label: "Resources" },
    },
    {
      id: 10,
      title: "Well-being Services",
      icon: <Activity className="w-6 h-6" />,
      image: "/service/pic10.jpg",
      items: [
        "Wellness programs",
        "Fitness facilities",
        "Stress management",
        "Work-life balance",
      ],
      accent: "emerald",
      stats: { number: "80%", label: "Engagement" },
    },
  ];

  const features = [
    { icon: <Users className="w-5 h-5" />, text: "Faculty", number: "200+" },
    { icon: <Award className="w-5 h-5" />, text: "Awards", number: "50+" },
    { icon: <Star className="w-5 h-5" />, text: "Rating", number: "4.9/5" },
    { icon: <Clock className="w-5 h-5" />, text: "Experience", number: "25+" },
  ];

  const getAccentColors = (accent) => {
    const colors = {
      blue: {
        bg: "bg-blue-50",
        border: "border-blue-200",
        text: "text-blue-700",
        hover: "hover:bg-blue-100",
        accent: "bg-blue-600",
        light: "bg-blue-100",
      },
      emerald: {
        bg: "bg-emerald-50",
        border: "border-emerald-200",
        text: "text-emerald-700",
        hover: "hover:bg-emerald-100",
        accent: "bg-emerald-600",
        light: "bg-emerald-100",
      },
      violet: {
        bg: "bg-violet-50",
        border: "border-violet-200",
        text: "text-violet-700",
        hover: "hover:bg-violet-100",
        accent: "bg-violet-600",
        light: "bg-violet-100",
      },
      rose: {
        bg: "bg-rose-50",
        border: "border-rose-200",
        text: "text-rose-700",
        hover: "hover:bg-rose-100",
        accent: "bg-rose-600",
        light: "bg-rose-100",
      },
    };
    return colors[accent];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.05)_1px,transparent_0)] bg-[length:20px_20px]"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-100/30 rounded-full blur-xl animate-float-slow"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-emerald-100/30 rounded-full blur-xl animate-float-delayed"></div>
        <div className="absolute bottom-40 left-20 w-28 h-28 bg-violet-100/30 rounded-full blur-xl animate-float-reverse"></div>
        <div className="absolute bottom-20 right-10 w-36 h-36 bg-rose-100/30 rounded-full blur-xl animate-float-slow"></div>
      </div>

      {/* Header Section */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
          <div
            className={`text-center transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            {/* Medical Logo */}
            <div className="flex justify-center mb-6">
              <div className="relative group">
                <div className="w-16 h-16 bg-white rounded-full shadow-xl flex items-center justify-center border-4 border-gray-100 transform group-hover:scale-110 transition-all duration-500 animate-pulse-subtle">
                  <Shield className="w-8 h-8 text-gray-700" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-emerald-200 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-black text-gray-800 mb-4 tracking-tight">
              SERVICES
            </h1>

            {/* Decorative Line */}
            <div className="flex justify-center mb-6">
              <div className="w-20 h-1 bg-gradient-to-r from-gray-300 via-gray-600 to-gray-300 rounded-full animate-expand"></div>
            </div>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
              Comprehensive services to elevate your journey from student to
              healthcare professional
            </p>
          </div>

          {/* Stats Section */}
          <div
            className={`grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 transform transition-all duration-1000 delay-300 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-xl p-4 text-center shadow-md hover:shadow-lg transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 border border-gray-100">
                  <div className="text-gray-500 mb-2 flex justify-center group-hover:text-gray-700 transition-colors duration-300 transform group-hover:scale-110">
                    {feature.icon}
                  </div>
                  <div className="text-2xl font-bold text-gray-800 mb-1 group-hover:scale-110 transition-transform duration-300">
                    {feature.number}
                  </div>
                  <div className="text-gray-600 text-xs font-medium">
                    {feature.text}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-20 py-12">
        <Slider
          dots={true}
          infinite={true}
          speed={1000} // Increased for smoother transitions
          autoplay={true}
          autoplaySpeed={2000}
          slidesToShow={3}
          slidesToScroll={1}
          arrows={false} // Optional: remove arrows for cleaner look
          pauseOnHover={true} // Pause on hover for better UX
          responsive={[
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 640,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ]}
          className="services-carousel"
        >
          {services.map((service, index) => {
            const colors = getAccentColors(service.accent);
            return (
              <div key={service.id} className="px-2">
                {" "}
                {/* Add padding between slides */}
                <div
                  className={`group transform transition-all duration-700 ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-20 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                  onMouseEnter={() => setActiveService(index)}
                >
                  <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl border border-gray-200 hover:border-gray-300 transition-all duration-500 h-full">
                    {/* Service Header */}
                    <div
                      className={`${colors.bg} px-6 py-4 relative overflow-hidden border-b border-gray-200`}
                    >
                      <div className="relative flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div
                            className={`${colors.text} transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}
                          >
                            {service.icon}
                          </div>
                          <h2
                            className={`text-base font-bold ${colors.text} tracking-wide`}
                          >
                            {service.title}
                          </h2>
                        </div>
                        <div className="text-right">
                          <div className={`text-xl font-bold ${colors.text}`}>
                            {service.stats.number}
                          </div>
                          <div className="text-gray-500 text-xs font-medium">
                            {service.stats.label}
                          </div>
                        </div>
                      </div>

                      {/* Animated Accent Bar */}
                      <div
                        className={`absolute bottom-0 left-0 h-1 ${colors.accent} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                        style={{ width: "100%" }}
                      ></div>
                    </div>

                    {/* Service Image */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                      {/* Floating Action Button */}
                      <div
                        className={`absolute bottom-3 right-3 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-3 group-hover:translate-y-0 transition-all duration-500 hover:bg-white cursor-pointer shadow-md ${colors.hover}`}
                      >
                        <ChevronRight className="w-5 h-5 text-gray-700" />
                      </div>
                    </div>

                    {/* Service Content */}
                    <div className="p-6 relative bg-white">
                      <ul className="space-y-3">
                        {service.items.map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className={`flex items-start space-x-3 text-sm text-gray-600 leading-relaxed transform transition-all duration-500 ${
                              activeService === index
                                ? "translate-x-0 opacity-100"
                                : "translate-x-3 opacity-70"
                            }`}
                            style={{ transitionDelay: `${itemIndex * 100}ms` }}
                          >
                            <div
                              className={`w-1.5 h-1.5 ${colors.accent} rounded-full mt-2 flex-shrink-0 animate-pulse`}
                            ></div>
                            <span className="font-medium hover:text-gray-800 transition-colors duration-300 cursor-default">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>

                      {/* Learn More Button */}
                      <div className="mt-6 opacity-0 group-hover:opacity-100 transform translate-y-3 group-hover:translate-y-0 transition-all duration-500 delay-200">
                        <button
                          className={`${colors.accent} cursor-pointer text-white px-5 py-2 rounded-full font-semibold hover:shadow-md transform hover:scale-105 transition-all duration-300 flex items-center space-x-1 text-sm`}
                        >
                          <span>Learn More</span>
                          <ChevronRight className="w-3 h-3" />
                        </button>
                      </div>
                    </div>

                    {/* Subtle Border Animation */}
                    <div
                      className={`absolute inset-0 rounded-2xl border-2 border-transparent ${colors.light} opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10`}
                    ></div>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>

      {/* Call to Action Section */}
      <div className="relative z-10 bg-gradient-to-r from-gray-200 to-gray-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h3 className="text-4xl font-bold text-gray-800 mb-4">
              Ready to Transform Your Future?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Join thousands of successful medical professionals who started
              with us.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="group relative bg-gray-800 text-white px-8 py-3 rounded-full font-bold text-base hover:bg-gray-900 hover:shadow-lg transform hover:scale-105 transition-all duration-300 overflow-hidden">
                <span className="relative z-10 flex items-center space-x-1">
                  <span>Start Your Journey</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>

              <button className="group bg-white text-gray-800 px-8 py-3 rounded-full font-bold text-base hover:bg-gray-50 transition-all duration-300 border-2 border-gray-300 hover:border-gray-400 transform hover:scale-105 shadow-md hover:shadow-lg">
                <span className="flex items-center space-x-1">
                  <span>Schedule Consultation</span>
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }
        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-15px) translateX(-10px);
          }
        }
        @keyframes float-reverse {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(15px) translateX(15px);
          }
        }
        @keyframes pulse-subtle {
          0%,
          100% {
            box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.1);
          }
          50% {
            box-shadow: 0 0 0 8px rgba(0, 0, 0, 0.05);
          }
        }
        @keyframes expand {
          0% {
            width: 0;
          }
          100% {
            width: 5rem;
          }
        }
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 6s ease-in-out infinite 2s;
        }
        .animate-float-reverse {
          animation: float-reverse 7s ease-in-out infinite 1s;
        }
        .animate-pulse-subtle {
          animation: pulse-subtle 4s ease-in-out infinite;
        }
        .animate-expand {
          animation: expand 1s ease-out 0.5s both;
        }
      `}</style>
    </div>
  );
}

export default Services;
