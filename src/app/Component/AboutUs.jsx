import React from "react";
import {
  GraduationCap,
  Heart,
  Users,
  Award,
  Building,
  Stethoscope,
  BookOpen,
  Shield,
  Phone,
  Mail,
  MapPin,
  Star,
  CheckCircle,
  ArrowRight,
  Globe,
  Calendar,
  Target,
  Eye,
  Lightbulb,
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
    <div className="min-h-screen bg-gray-50">
      {/* Stats Section */}
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-slate-800 rounded-xl flex items-center justify-center group-hover:bg-slate-700 transition-colors duration-300 shadow-lg">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-slate-800 mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              About Our Institution
            </h2>
            <div className="w-24 h-1 bg-slate-800 mx-auto mb-8"></div>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Established with a vision to provide world-class medical education
              and healthcare services, Himalaya Medical College & Hospital has
              been a beacon of excellence for over 25 years.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-3xl font-bold text-slate-800 mb-6">
                Our Story
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed text-justify">
                Welcome to Himalaya Medical College and Hospital (HMCH). After
                recommendation by the National Medical Commission (NMC),
                Government of India, the Ministry of Health and Family Welfare
                approved our MBBS program. HMCH will always strive to scale new
                parameters in the field of health education.
              </p>
              <p className="text-slate-600 mb-6 leading-relaxed text-justify">
                The beginning has been made over 25 acres of land that houses
                the Medical College building and more than 900 bedded hospital
                which offers the best medical care and attention to each and
                every category of patients and provides world-class health care
                services by experienced doctors and health professionals.
              </p>
              <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg border border-slate-200">
                <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                <span className="text-slate-700 font-medium">
                  Committed to excellence in healthcare and education
                </span>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl p-8 relative overflow-hidden shadow-lg border border-slate-200">
                <div className="absolute top-4 right-4 w-20 h-20 bg-slate-100 rounded-full opacity-50"></div>
                <div className="absolute bottom-4 left-4 w-16 h-16 bg-slate-100 rounded-full opacity-50"></div>

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-slate-800 rounded-xl flex items-center justify-center mb-6">
                    <Building className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-slate-800 mb-4">
                    State-of-the-Art Facilities
                  </h4>
                  <p className="text-slate-600 leading-relaxed">
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

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-slate-800">
              <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-slate-800" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                Our Mission
              </h3>
              <p className="text-slate-600 leading-relaxed">
                To provide high-quality education and training to future
                healthcare professionals, including doctors, nurses, and other
                allied health professionals, fostering excellence in medical
                education and patient care.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-blue-600">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                Our Vision
              </h3>
              <p className="text-slate-600 leading-relaxed">
                To aspire as centers of cutting-edge innovation in the field of
                medicine, developing compassionate healthcare professionals who
                will serve communities with dedication and expertise.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-emerald-600">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
                <Lightbulb className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                Our Values
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Excellence, integrity, compassion, and innovation guide
                everything we do. We are committed to maintaining the highest
                standards in education, research, and patient care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center lg:mb-16 mb-5">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Why Choose Us
            </h2>
            <div className="w-24 h-1 bg-slate-800 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="bg-white rounded-xl p-8 h-full hover:shadow-xl transition-all duration-300 border border-slate-200 group-hover:border-slate-300">
                  <div className="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-slate-700 transition-colors duration-300">
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Educational Programs */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Educational Programs
            </h2>
            <div className="w-24 h-1 bg-slate-800 mx-auto mb-8"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive medical education programs designed to prepare
              future healthcare leaders
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200"
              >
                <div className="bg-slate-800 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {program.title}
                  </h3>
                  <div className="flex gap-4 text-slate-200">
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

                <div className="p-6">
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {program.description}
                  </p>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-slate-800 mb-3">
                      Program Highlights:
                    </h4>
                    {program.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                        <span className="text-slate-700">{highlight}</span>
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-6">
              Accreditations & Approvals
            </h2>
            <div className="w-24 h-1 bg-slate-800 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {accreditations.map((accreditation, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center border border-slate-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-slate-800 mb-2">
                  {accreditation.name}
                </h3>
                <p className="text-sm text-slate-600">{accreditation.type}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;     