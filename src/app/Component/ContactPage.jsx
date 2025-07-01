import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  User,
  MessageSquare,
  Building,
  GraduationCap,
  Shield,
  Globe,
  ExternalLink,
  CheckCircle,
  AlertCircle,
  Calendar,
  Users,
  Heart,
  Award,
  Stethoscope,
  Activity,
  Navigation,
  Map,
  Smartphone,
  Printer,
  Fan as Fax,
  UserCheck,
  BookOpen,
  Target,
  ChevronRight,
  Eye,
  Ear,
  SquareCheckIcon,
  Brain,
  X,
  Microscope,
  Syringe,
  Ambulance,
} from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, 2000);
  };

  const contactInfo = [
    {
      title: "Main Campus",
      address:
        "Paliganj, Chiksi, Kinjar Road, State Highway, Patna, Bihar 801110",
      icon: MapPin,
      color: "from-blue-600 to-indigo-600",
    },
    {
      title: "Corporate Office",
      address:
        "MIG-44, near Salimar Sweets, Kankarbagh, Lohia Nagar, Patna, Bihar 800020",
      icon: Building,
      color: "from-purple-600 to-pink-600",
    },
  ];

  const phoneNumbers = [
    { title: "Director", number: "+91 9304637349", icon: UserCheck },
    { title: "Chairman", number: "+91 9334767990", icon: Award },
    { title: "Principal", number: "+91 9031068020", icon: GraduationCap },
    {
      title: "Medical Superintendent",
      number: "+91 9031068021",
      icon: Stethoscope,
    },
    { title: "College Office", number: "+91 9031068024", icon: BookOpen },
    { title: "Hospital Manager", number: "+91 9031052021", icon: Activity },
  ];

  const quickLinks = [
    { title: "Dashboard Login", icon: Shield, color: "bg-blue-600", url: "#" },
    { title: "Webmail Login", icon: Mail, color: "bg-green-600", url: "#" },
    { title: "Student Query", icon: Users, color: "bg-purple-600", url: "#" },
  ];

  const departments = [
    { name: "General Medicine", icon: Stethoscope },
    { name: "General Surgery", icon: Activity },
    { name: "Pediatrics", icon: Heart },
    { name: "Obstetrics & Gynecology", icon: Users },
    { name: "Orthopedics", icon: Target },
    { name: "Ophthalmology", icon: Eye },
    { name: "ENT", icon: Ear },
    { name: "Dermatology", icon: SquareCheckIcon },
    { name: "Psychiatry", icon: Brain },
    { name: "Radiology", icon: X },
    { name: "Pathology", icon: Microscope },
    { name: "Anesthesiology", icon: Syringe },
    { name: "Emergency Medicine", icon: Ambulance },
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-400/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
                <Phone className="w-10 h-10 text-white" />
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Contact{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">
                Us
              </span>
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Get in touch with Himalaya Medical College & Hospital for
              admissions, consultations, or any inquiries
            </p>

            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <div className="flex items-center gap-2 text-blue-100 text-sm sm:text-base">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>24/7 Emergency Services</span>
              </div>
              <div className="flex items-center gap-2 text-blue-100 text-sm sm:text-base">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Multiple Contact Points</span>
              </div>
              <div className="flex items-center gap-2 text-blue-100 text-sm sm:text-base">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Two Convenient Locations</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* College Information */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 border border-gray-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                      HMCH
                    </h2>
                    <p className="text-gray-600 text-sm sm:text-base">
                      Excellence in Medical Education
                    </p>
                  </div>
                </div>

                <p className="text-gray-700 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
                  Himalaya Medical College & Hospital is dedicated to excellence
                  in medical education and patient care. Established in 2023, we
                  provide world-class healthcare services and comprehensive
                  medical education.
                </p>

                {/* Quick Access Links */}
                <div className="space-y-3 mb-6 sm:mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 sm:mb-4">
                    Quick Access
                  </h3>
                  {quickLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      className={`w-full ${link.color} text-white px-4 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300 flex items-center gap-3 text-sm sm:text-base`}
                    >
                      <link.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                      {link.title}
                      <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 ml-auto" />
                    </a>
                  ))}
                </div>

                {/* Newsletter Signup */}
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 sm:p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Stay Updated
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4">
                    Get healthy news, tips and solutions to your problems from
                    our experts.
                  </p>
                  <div className="flex gap-2">
                    <input
                      type="email"
                      placeholder="Email address"
                      className="flex-1 px-3 sm:px-4 py-2 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    />
                    <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 sm:px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300">
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="lg:col-span-2">
              <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                {/* Contact Details */}
                <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 border border-gray-100">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center">
                      <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                      Contact Information
                    </h2>
                  </div>

                  {/* Email */}
                  <div className="mb-6 sm:mb-8">
                    <div className="flex items-center gap-3 mb-3">
                      <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                      <h3 className="font-semibold text-gray-900 text-sm sm:text-base">
                        Email Address
                      </h3>
                    </div>
                    <div className="space-y-2 ml-7 sm:ml-8">
                      <a
                        href="mailto:himalayauniv.hmch@gmail.com"
                        className="text-blue-600 hover:text-blue-700 transition-colors duration-300 block text-sm sm:text-base"
                      >
                        himalayauniv.hmch@gmail.com
                      </a>
                      <a
                        href="mailto:info@hmcedu.in"
                        className="text-blue-600 hover:text-blue-700 transition-colors duration-300 block text-sm sm:text-base"
                      >
                        info@hmcedu.in
                      </a>
                    </div>
                  </div>

                  {/* Phone Numbers */}
                  <div className="mb-6 sm:mb-8">
                    <div className="flex items-center gap-3 mb-4">
                      <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                      <h3 className="font-semibold text-gray-900 text-sm sm:text-base">
                        Phone Numbers
                      </h3>
                    </div>
                    <div className="space-y-3">
                      {phoneNumbers.map((contact, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-2 sm:p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                        >
                          <div className="flex items-center gap-2 sm:gap-3">
                            <contact.icon className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600" />
                            <span className="text-xs sm:text-sm font-medium text-gray-700">
                              {contact.title}
                            </span>
                          </div>
                          <a
                            href={`tel:${contact.number}`}
                            className="text-blue-600 hover:text-blue-700 font-medium text-xs sm:text-sm"
                          >
                            {contact.number}
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Operating Hours */}
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
                      <h3 className="font-semibold text-gray-900 text-sm sm:text-base">
                        Operating Hours
                      </h3>
                    </div>
                    <div className="space-y-2 ml-7 sm:ml-8 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600 text-xs sm:text-sm">
                          Emergency Services
                        </span>
                        <span className="font-medium text-green-600 text-xs sm:text-sm">
                          24/7
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 text-xs sm:text-sm">
                          OPD Timings
                        </span>
                        <span className="font-medium text-gray-900 text-xs sm:text-sm">
                          9:00 AM - 5:00 PM
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 text-xs sm:text-sm">
                          Office Hours
                        </span>
                        <span className="font-medium text-gray-900 text-xs sm:text-sm">
                          9:00 AM - 6:00 PM
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 border border-gray-100">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                      <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                      Send Message
                    </h2>
                  </div>

                  <form
                    onSubmit={handleSubmit}
                    className="space-y-4 sm:space-y-6"
                  >
                    <div className="grid md:grid-cols-2 gap-3 sm:gap-4">
                      <div>
                        <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                          Full Name *
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300 text-sm sm:text-base"
                            placeholder="Enter your name"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                          Phone Number *
                        </label>
                        <div className="relative">
                          <Smartphone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                            className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300 text-sm sm:text-base"
                            placeholder="Enter phone number"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300 text-sm sm:text-base"
                          placeholder="Enter email address"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                        Subject *
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300 text-sm sm:text-base"
                      >
                        <option value="">Select a subject</option>
                        <option value="admission">Admission Inquiry</option>
                        <option value="appointment">Medical Appointment</option>
                        <option value="emergency">Emergency Services</option>
                        <option value="general">General Information</option>
                        <option value="feedback">Feedback/Complaint</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300 resize-none text-sm sm:text-base"
                        placeholder="Enter your message..."
                      ></textarea>
                    </div>

                    {submitStatus === "success" && (
                      <div className="flex items-center gap-2 p-3 sm:p-4 bg-green-50 border border-green-200 rounded-lg text-sm sm:text-base">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                        <span className="text-green-700">
                          Message sent successfully! We'll get back to you soon.
                        </span>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm sm:text-base"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Address Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
              Find Our Locations
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4 sm:mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
              Visit us at our convenient locations for consultations,
              admissions, or any assistance you need.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {contactInfo.map((location, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 sm:p-8 border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div
                    className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${location.color} rounded-full flex items-center justify-center flex-shrink-0`}
                  >
                    <location.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">
                      {location.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                      {location.address}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-blue-600 text-white px-3 sm:px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center gap-1 sm:gap-2 text-sm sm:text-base"
                  >
                    <Navigation className="w-3 h-3 sm:w-4 sm:h-4" />
                    Get Directions
                  </a>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 border border-gray-300 text-gray-700 px-3 sm:px-4 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-300 flex items-center justify-center gap-1 sm:gap-2 text-sm sm:text-base"
                  >
                    <Map className="w-3 h-3 sm:w-4 sm:h-4" />
                    View on Map
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
              Interactive Map
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Locate us easily with our interactive map
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
              <div className="text-center p-4 sm:p-6">
                <Map className="w-12 h-12 sm:w-16 sm:h-16 text-blue-600 mx-auto mb-3 sm:mb-4" />
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                  Interactive Map
                </h3>
                <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">
                  Click to view our location on Google Maps
                </p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300 flex items-center gap-2 mx-auto text-sm sm:text-base"
                >
                  <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Departments Quick Access */}
      {/* <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
              Department Contacts
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4 sm:mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
              Connect directly with our specialized departments for specific
              medical consultations and services.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {departments.map((dept, index) => (
              <a
                key={index}
                href="#"
                className="bg-gradient-to-br from-blue-50 to-purple-50 p-3 sm:p-4 rounded-lg hover:shadow-md transition-all duration-300 cursor-pointer group"
              >
                <div className="text-center">
                  <dept.icon className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 mx-auto mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="font-medium text-gray-900 text-xs sm:text-sm">
                    {dept.name}
                  </h3>
                  <div className="flex items-center justify-center mt-1 text-blue-600 text-xs">
                    <span>Contact</span>
                    <ChevronRight className="w-3 h-3" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default ContactPage;
