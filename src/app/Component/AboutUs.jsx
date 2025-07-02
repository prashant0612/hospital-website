import React from "react";
import {
  CheckCircle,
  Building,
  Target,
  Eye,
  Lightbulb,
  Users,
  Calendar,
  Award,
  GraduationCap,
  BookOpen,
  Stethoscope,
  Heart,
} from "lucide-react";

const AboutUs = () => {
  const stats = [
    { number: "900+", label: "Hospital Beds", icon: Building },
    { number: "25+", label: "Years Experience", icon: Calendar },
    { number: "1000+", label: "Students Graduated", icon: GraduationCap },
    { number: "50+", label: "Expert Faculty", icon: Users },
  ];

  const features = [
    {
      icon: Stethoscope,
      title: "World-Class Medical Care",
      description:
        "State-of-the-art medical facilities with 24/7 emergency services and specialized departments.",
    },
    {
      icon: GraduationCap,
      title: "Excellence in Education",
      description:
        "MBBS program approved by NMC with modern teaching methodologies and practical training.",
    },
    {
      icon: Heart,
      title: "Patient-Centered Approach",
      description:
        "Comprehensive healthcare services with experienced doctors and healthcare professionals.",
    },
    {
      icon: BookOpen,
      title: "Research & Innovation",
      description:
        "Cutting-edge research facilities fostering innovation in medical science and healthcare.",
    },
  ];

  const programs = [
    {
      title: "MBBS Program",
      duration: "5.5 Years",
      seats: "100 Seats",
      description:
        "Bachelor of Medicine and Bachelor of Surgery program approved by National Medical Commission.",
      highlights: [
        "NMC Approved",
        "Clinical Training",
        "Modern Curriculum",
        "Experienced Faculty",
      ],
    },
    {
      title: "Nursing Programs",
      duration: "4 Years",
      seats: "60 Seats",
      description:
        "Comprehensive nursing education with hands-on clinical experience.",
      highlights: [
        "INC Approved",
        "Practical Training",
        "Hospital Attachment",
        "Career Support",
      ],
    },
  ];

  const accreditations = [
    { name: "National Medical Commission (NMC)", type: "Medical Education" },
    { name: "Government of India", type: "Ministry of Health" },
    {
      name: "Bihar University of Health Sciences",
      type: "University Affiliation",
    },
    { name: "NEET Qualified", type: "Admission Criteria" },
  ];

  return (
    <div className=" bg-gray-50">
      {/* About Content */}
      <section className="py-8 sm:py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 mb-4 sm:mb-6">
              About Our Institution
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-slate-800 mx-auto mb-4 sm:mb-8"></div>
            <p className="text-lg sm:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed px-4">
              Established with a vision to provide world-class medical education
              and healthcare services, Himalaya Medical College & Hospital has
              been a beacon of excellence for over 25 years.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mt-12 lg:mt-16">
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-4 sm:mb-6">
                Our Story
              </h3>
              <p className="text-slate-600 mb-4 sm:mb-6 leading-relaxed text-justify">
                Welcome to Himalaya Medical College and Hospital (HMCH). After
                recommendation by the National Medical Commission (NMC),
                Government of India, the Ministry of Health and Family Welfare
                approved our MBBS program. HMCH will always strive to scale new
                parameters in the field of health education.
              </p>
              <p className="text-slate-600 mb-4 sm:mb-6 leading-relaxed text-justify">
                The beginning has been made over 25 acres of land that houses
                the Medical College building and more than 900 bedded hospital
                which offers the best medical care and attention to each and
                every category of patients and provides world-class health care
                services by experienced doctors and health professionals.
              </p>
              <div className="flex items-start gap-3 sm:gap-4 p-4 bg-slate-50 rounded-lg border border-slate-200">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700 font-medium text-sm sm:text-base">
                  Committed to excellence in healthcare and education
                </span>
              </div>
            </div>

            <div className="order-1 lg:order-2 relative">
              <div className="bg-white rounded-2xl p-6 sm:p-8 relative overflow-hidden shadow-lg border border-slate-200">
                <div className="absolute top-4 right-4 w-12 h-12 sm:w-20 sm:h-20 bg-slate-100 rounded-full opacity-50"></div>
                <div className="absolute bottom-4 left-4 w-10 h-10 sm:w-16 sm:h-16 bg-slate-100 rounded-full opacity-50"></div>

                <div className="relative z-10">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-slate-800 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                    <Building className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h4 className="text-xl sm:text-2xl font-bold text-slate-800 mb-3 sm:mb-4">
                    State-of-the-Art Facilities
                  </h4>
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                    Modern infrastructure spanning over 25 acres with
                    cutting-edge medical equipment, research laboratories, and
                    comprehensive training facilities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 sm:py-12 lg:py-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="flex justify-center mb-3 sm:mb-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-slate-800 rounded-xl flex items-center justify-center group-hover:bg-slate-700 transition-colors duration-300 shadow-lg">
                    <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mb-1 sm:mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-600 font-medium text-sm sm:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-12 sm:py-16 lg:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-slate-800">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-slate-100 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                <Target className="w-5 h-5 sm:w-6 sm:h-6 text-slate-800" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-3 sm:mb-4">
                Our Mission
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                To provide high-quality education and training to future
                healthcare professionals, including doctors, nurses, and other
                allied health professionals, fostering excellence in medical
                education and patient care.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-blue-600">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                <Eye className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-3 sm:mb-4">
                Our Vision
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                To aspire as centers of cutting-edge innovation in the field of
                medicine, developing compassionate healthcare professionals who
                will serve communities with dedication and expertise.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-emerald-600">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-3 sm:mb-4">
                Our Values
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Excellence, integrity, compassion, and innovation guide
                everything we do. We are committed to maintaining the highest
                standards in education, research, and patient care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-8 sm:py-10 lg:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 mb-4 sm:mb-6">
              Why Choose Us
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-slate-800 mx-auto"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="bg-white rounded-xl p-6 sm:p-8 h-full hover:shadow-xl transition-all duration-300 border border-slate-200 group-hover:border-slate-300">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-slate-800 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-slate-700 transition-colors duration-300">
                    <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-3 sm:mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Support Section */}
      <div className="py-8 sm:py-10">
        <div className="text-center px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-purple-100 p-3 sm:p-4 rounded-full">
              <Users className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600" />
            </div>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
            Comprehensive Student Support
          </h3>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            We believe that academic success goes beyond classroom learning. Our
            comprehensive student support services ensure that every student
            receives the guidance and assistance they need to thrive both
            academically and personally.
          </p>
        </div>
      </div>

      {/* Support Services */}
      <div className="w-full px-4 sm:px-6 lg:px-12 pb-8 sm:pb-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="w-full max-w-md aspect-square bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl flex items-center justify-center">
              <img src="/info1.png" alt="image" />
            </div>
          </div>
          <div className="w-full lg:w-1/2 space-y-4 sm:space-y-6">
            <div className="text-center lg:text-left">
              <div className="bg-purple-50 p-6 sm:p-8 lg:p-10 rounded-lg shadow-xl">
                <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                  Academic Counseling
                </h4>
                <p className="text-gray-600 text-sm sm:text-base">
                  Personalized academic guidance and study planning to help
                  students achieve their goals.
                </p>
              </div>
            </div>
            <div className="text-center lg:text-left">
              <div className="bg-purple-50 p-6 sm:p-8 lg:p-10 rounded-lg shadow-xl">
                <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                  Career Services
                </h4>
                <p className="text-gray-600 text-sm sm:text-base">
                  Professional development workshops and placement assistance
                  for successful careers.
                </p>
              </div>
            </div>
            <div className="text-center lg:text-left">
              <div className="bg-purple-50 p-6 sm:p-8 lg:p-10 rounded-lg shadow-xl">
                <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                  Mental Health Support
                </h4>
                <p className="text-gray-600 text-sm sm:text-base">
                  Counseling services and wellness programs to support student
                  mental health and well-being.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-6 lg:px-12 pb-8 sm:pb-12">
        <div className="text-center bg-white p-4 sm:p-6 rounded-xl shadow-lg">
          <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600 mb-1 sm:mb-2">
            98%
          </div>
          <div className="text-gray-600 font-medium text-sm sm:text-base">
            Pass Rate
          </div>
        </div>
        <div className="text-center bg-white p-4 sm:p-6 rounded-xl shadow-lg">
          <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-600 mb-1 sm:mb-2">
            500+
          </div>
          <div className="text-gray-600 font-medium text-sm sm:text-base">
            Students
          </div>
        </div>
        <div className="text-center bg-white p-4 sm:p-6 rounded-xl shadow-lg">
          <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-600 mb-1 sm:mb-2">
            50+
          </div>
          <div className="text-gray-600 font-medium text-sm sm:text-base">
            Faculty Members
          </div>
        </div>
        <div className="text-center bg-white p-4 sm:p-6 rounded-xl shadow-lg">
          <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-purple-600 mb-1 sm:mb-2">
            15+
          </div>
          <div className="text-gray-600 font-medium text-sm sm:text-base">
            Years Excellence
          </div>
        </div>
      </div>

      {/* Educational Programs */}
      <section className="py-12 sm:py-16 lg:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 mb-4 sm:mb-6">
              Educational Programs
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-slate-800 mx-auto mb-4 sm:mb-8"></div>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto px-4">
              Comprehensive medical education programs designed to prepare
              future healthcare leaders
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {programs.map((program, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200"
              >
                <div className="bg-slate-800 p-4 sm:p-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                    {program.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 sm:gap-4 text-slate-200 text-sm sm:text-base">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {program.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {program.seats}
                    </span>
                  </div>
                </div>

                <div className="p-4 sm:p-6">
                  <p className="text-slate-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                    {program.description}
                  </p>

                  <div className="space-y-2 sm:space-y-3">
                    <h4 className="font-semibold text-slate-800 mb-2 sm:mb-3 text-sm sm:text-base">
                      Program Highlights:
                    </h4>
                    {program.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-start gap-2 sm:gap-3">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700 text-sm sm:text-base">
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="pt-12 sm:pt-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4 sm:mb-6">
              Accreditations & Approvals
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-slate-800 mx-auto"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {accreditations.map((accreditation, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-4 sm:p-6 text-center border border-slate-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-slate-800 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Award className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h3 className="font-bold text-slate-800 mb-1 sm:mb-2 text-sm sm:text-base">
                  {accreditation.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  {accreditation.type}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
