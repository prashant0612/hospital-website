import React, { useState, useEffect } from "react";
import {
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
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
  CheckCircle,
  ArrowRight,
  Globe,
  Calendar,
  Target,
  Eye,
  Lightbulb,
  Brain,
  Activity,
  User,
  UserCheck,
  Play,
  Pause,
  Volume2,
  Camera,
  Video,
  MessageCircle,
  ThumbsUp,
  Share2,
  Filter,
  Search,
} from "lucide-react";

import { testimonials } from "../Data/data";

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const categories = [
    { id: "all", name: "All Testimonials", count: testimonials.length },
    {
      id: "student",
      name: "Students",
      count: testimonials.filter((t) => t.category === "student").length,
    },
    {
      id: "alumni",
      name: "Alumni",
      count: testimonials.filter((t) => t.category === "alumni").length,
    },
    {
      id: "faculty",
      name: "Faculty",
      count: testimonials.filter((t) => t.category === "faculty").length,
    },
    {
      id: "patient",
      name: "Patients",
      count: testimonials.filter((t) => t.category === "patient").length,
    },
  ];

  const filteredTestimonials = testimonials.filter((testimonial) => {
    const matchesCategory =
      selectedCategory === "all" || testimonial.category === selectedCategory;
    const matchesSearch =
      testimonial.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      testimonial.text.toLowerCase().includes(searchTerm.toLowerCase()) ||
      testimonial.role.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % filteredTestimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) =>
        (prev - 1 + filteredTestimonials.length) % filteredTestimonials.length
    );
  };

  useEffect(() => {
    if (isAutoPlaying && filteredTestimonials.length > 0) {
      const interval = setInterval(nextTestimonial, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, filteredTestimonials.length]);

  const getCategoryIcon = (category) => {
    switch (category) {
      case "student":
        return BookOpen;
      case "alumni":
        return GraduationCap;
      case "faculty":
        return UserCheck;
      case "patient":
        return Heart;
      default:
        return Users;
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case "student":
        return "from-blue-600 to-indigo-600";
      case "alumni":
        return "from-purple-600 to-pink-600";
      case "faculty":
        return "from-green-600 to-emerald-600";
      case "patient":
        return "from-red-600 to-rose-600";
      default:
        return "from-gray-600 to-slate-600";
    }
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 sm:w-5 sm:h-5 ${
          i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative text-black bg-gray-50 overflow-hidden py-10">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Icon Circle */}
            <div className="flex justify-center mb-6 md:mb-8">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-black/5 backdrop-blur-sm rounded-full flex items-center justify-center border border-black/10">
                <Quote className="w-8 h-8 md:w-10 md:h-10 text-black" />
              </div>
            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              What People
              <span className="block">Say About Us</span>
            </h1>

            {/* Decorative Line */}
            <div className="flex justify-center mb-6">
              <div className="w-20 h-1 bg-gradient-to-r from-gray-300 via-gray-600 to-gray-300 rounded-full animate-expand"></div>
            </div>

            {/* Description */}
            <p className="text-lg md:text-xl mb-6 md:mb-8 text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Real experiences from our students, faculty, alumni, and patients
              who have been part of our medical community
            </p>

            {/* Stats */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              <div className="flex items-center gap-2 text-sm sm:text-base text-black">
                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                <span>4.9/5 Average Rating</span>
              </div>
              <div className="flex items-center gap-2 text-sm sm:text-base text-black">
                <Users className="w-5 h-5" />
                <span>500+ Reviews</span>
              </div>
              <div className="flex items-center gap-2 text-sm sm:text-base text-black">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span>100% Verified</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      {/* <section className="py-8 md:py-12 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 md:gap-6 items-center justify-between">
            
            <div className="relative w-full lg:flex-1 lg:max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 md:w-5 md:h-5" />
              <input
                type="text"
                placeholder="Search testimonials..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 md:py-3 border border-gray-200 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300 text-sm md:text-base"
              />
            </div>

           
            <div className="flex flex-wrap gap-2 w-full lg:w-auto justify-center lg:justify-start">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-3 py-1 md:px-4 md:py-2 rounded-full font-medium transition-all duration-300 text-xs md:text-sm ${
                    selectedCategory === category.id
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                      : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                  }`}
                >
                  {category.name}
                  <span className="ml-1 opacity-75">({category.count})</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* Featured Testimonial Carousel */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
              Featured Stories
            </h2>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6 md:mb-8"></div>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
              Discover inspiring stories from our community members who have
              experienced excellence at HMCH
            </p>
          </div>

          {filteredTestimonials.length > 0 && (
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl md:rounded-2xl lg:rounded-3xl p-6 md:p-8 lg:p-12 shadow-lg md:shadow-xl lg:shadow-2xl">
                <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-10 lg:gap-12">
                  {/* Testimonial Image */}
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full overflow-hidden shadow-lg md:shadow-xl lg:shadow-2xl border-4 border-white">
                        <img
                          src={filteredTestimonials[currentTestimonial].image}
                          alt={filteredTestimonials[currentTestimonial].name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      {filteredTestimonials[currentTestimonial].verified && (
                        <div className="absolute -bottom-1 -right-1 md:-bottom-2 md:-right-2 w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-green-500 rounded-full flex items-center justify-center border-2 md:border-4 border-white shadow-md md:shadow-lg">
                          <CheckCircle className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white" />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Testimonial Content */}
                  <div className="flex-1 text-center lg:text-left">
                    <div className="mb-4 md:mb-6">
                      <Quote className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-blue-600 mb-2 md:mb-3 lg:mb-4 mx-auto lg:mx-0" />
                      <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed mb-4 md:mb-6 italic">
                        "{filteredTestimonials[currentTestimonial].text}"
                      </p>
                    </div>

                    <div className="mb-4 md:mb-6">
                      <div className="flex justify-center lg:justify-start mb-2 md:mb-3">
                        {renderStars(
                          filteredTestimonials[currentTestimonial].rating
                        )}
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-1 md:mb-2">
                        {filteredTestimonials[currentTestimonial].name}
                      </h3>
                      <p className="text-base md:text-lg text-gray-600 mb-1 md:mb-2">
                        {filteredTestimonials[currentTestimonial].role}
                      </p>
                      <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 md:gap-4 text-xs md:text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-3 h-3 md:w-4 md:h-4" />
                          <span>
                            {filteredTestimonials[currentTestimonial].location}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3 md:w-4 md:h-4" />
                          <span>
                            {new Date(
                              filteredTestimonials[currentTestimonial].date
                            ).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Category Badge */}
                    <div className="flex justify-center lg:justify-start">
                      <div
                        className={`inline-flex items-center gap-1 md:gap-2 px-3 py-1 md:px-4 md:py-2 bg-gradient-to-r ${getCategoryColor(
                          filteredTestimonials[currentTestimonial].category
                        )} text-white rounded-full text-xs md:text-sm font-medium`}
                      >
                        {React.createElement(
                          getCategoryIcon(
                            filteredTestimonials[currentTestimonial].category
                          ),
                          { className: "w-3 h-3 md:w-4 md:h-4" }
                        )}
                        <span className="capitalize">
                          {filteredTestimonials[currentTestimonial].category}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center justify-center gap-3 md:gap-4 mt-6 md:mt-8">
                <button
                  onClick={prevTestimonial}
                  className="w-10 h-10 md:w-12 md:h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors duration-300 shadow-md md:shadow-lg"
                >
                  <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-gray-600" />
                </button>

                <div className="flex gap-1 md:gap-2">
                  {filteredTestimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                        index === currentTestimonial
                          ? "bg-blue-600 w-6 md:w-8"
                          : "bg-gray-300 hover:bg-gray-400"
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextTestimonial}
                  className="w-10 h-10 md:w-12 md:h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors duration-300 shadow-md md:shadow-lg"
                >
                  <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-gray-600" />
                </button>

                <button
                  onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                  className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-colors duration-300 shadow-md md:shadow-lg ${
                    isAutoPlaying
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  {isAutoPlaying ? (
                    <Pause className="w-4 h-4 md:w-5 md:h-5" />
                  ) : (
                    <Play className="w-4 h-4 md:w-5 md:h-5" />
                  )}
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Testimonials Grid */}
      {/* <section className="py-12 md:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
              All Testimonials
            </h2>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6 md:mb-8"></div>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
              Browse through all the wonderful feedback from our community
            </p>
          </div>

          {filteredTestimonials.length === 0 ? (
            <div className="text-center py-12 md:py-16">
              <Quote className="w-12 h-12 md:w-16 md:h-16 text-gray-300 mx-auto mb-3 md:mb-4" />
              <h3 className="text-lg md:text-xl font-semibold text-gray-600 mb-1 md:mb-2">
                No testimonials found
              </h3>
              <p className="text-gray-500 text-sm md:text-base">
                Try adjusting your search or filter criteria
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredTestimonials.map((testimonial) => {
                const CategoryIcon = getCategoryIcon(testimonial.category);
                return (
                  <div
                    key={testimonial.id}
                    className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 group hover:-translate-y-1"
                  >
                    <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                      <div className="relative">
                        <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden shadow-md">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        {testimonial.verified && (
                          <div className="absolute -bottom-1 -right-1 w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 bg-green-500 rounded-full flex items-center justify-center border-2 border-white shadow-sm">
                            <CheckCircle className="w-2 h-2 md:w-3 md:h-3 text-white" />
                          </div>
                        )}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 text-base md:text-lg">
                          {testimonial.name}
                        </h3>
                        <p className="text-gray-600 text-xs md:text-sm">
                          {testimonial.role}
                        </p>
                        <div className="flex items-center gap-1 mt-1">
                          {renderStars(testimonial.rating)}
                        </div>
                      </div>
                    </div>

                    <div className="mb-4 md:mb-6">
                      <Quote className="w-6 h-6 md:w-8 md:h-8 text-blue-600 mb-2 md:mb-3 opacity-50" />
                      <p className="text-gray-700 text-sm md:text-base leading-relaxed line-clamp-4">
                        {testimonial.text}
                      </p>
                    </div>

                    <div className="flex items-center justify-between">
                      <div
                        className={`inline-flex items-center gap-1 md:gap-2 px-2 py-1 md:px-3 md:py-1 bg-gradient-to-r ${getCategoryColor(
                          testimonial.category
                        )} text-white rounded-full text-xs font-medium`}
                      >
                        <CategoryIcon className="w-2 h-2 md:w-3 md:h-3" />
                        <span className="capitalize">
                          {testimonial.category}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        <Calendar className="w-2 h-2 md:w-3 md:h-3" />
                        <span>
                          {new Date(testimonial.date).toLocaleDateString()}
                        </span>
                      </div>
                    </div>

                    {(testimonial.specialty ||
                      testimonial.treatment ||
                      testimonial.department ||
                      testimonial.year) && (
                      <div className="mt-3 md:mt-4 pt-3 md:pt-4 border-t border-gray-100">
                        <div className="text-xs text-gray-600">
                          {testimonial.specialty && (
                            <div className="flex items-center gap-1 mb-1">
                              <Stethoscope className="w-2 h-2 md:w-3 md:h-3" />
                              <span>Specialty: {testimonial.specialty}</span>
                            </div>
                          )}
                          {testimonial.treatment && (
                            <div className="flex items-center gap-1 mb-1">
                              <Heart className="w-2 h-2 md:w-3 md:h-3" />
                              <span>Treatment: {testimonial.treatment}</span>
                            </div>
                          )}
                          {testimonial.department && (
                            <div className="flex items-center gap-1 mb-1">
                              <Building className="w-2 h-2 md:w-3 md:h-3" />
                              <span>Department: {testimonial.department}</span>
                            </div>
                          )}
                          {testimonial.year && (
                            <div className="flex items-center gap-1">
                              <BookOpen className="w-2 h-2 md:w-3 md:h-3" />
                              <span>Year: {testimonial.year}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section> */}

      {/* Statistics Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
              Our Impact in Numbers
            </h2>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6 md:mb-8"></div>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
              These numbers reflect the trust and satisfaction of our community
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center">
              <div className="w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-md md:shadow-lg">
                <Star className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 text-white" />
              </div>
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-1 md:mb-2">
                4.9/5
              </div>
              <div className="text-sm md:text-base text-gray-600">
                Average Rating
              </div>
            </div>

            <div className="text-center">
              <div className="w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-green-600 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-md md:shadow-lg">
                <Users className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 text-white" />
              </div>
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-1 md:mb-2">
                500+
              </div>
              <div className="text-sm md:text-base text-gray-600">
                Happy Reviews
              </div>
            </div>

            <div className="text-center">
              <div className="w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-md md:shadow-lg">
                <CheckCircle className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 text-white" />
              </div>
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-1 md:mb-2">
                100%
              </div>
              <div className="text-sm md:text-base text-gray-600">
                Verified Reviews
              </div>
            </div>

            <div className="text-center">
              <div className="w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-orange-600 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-md md:shadow-lg">
                <Heart className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 text-white" />
              </div>
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-1 md:mb-2">
                98%
              </div>
              <div className="text-sm md:text-base text-gray-600">
                Satisfaction Rate
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-blue-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">
              Share Your Experience
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-blue-100 mb-6 md:mb-8 leading-relaxed">
              Have you been part of the HMCH community? We'd love to hear about
              your experience and share it with others.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <button className="bg-white text-blue-900 px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2 text-sm md:text-base">
                <MessageCircle className="w-4 h-4 md:w-5 md:h-5" />
                Write a Review
              </button>
              <button className="border border-white text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300 flex items-center gap-2 text-sm md:text-base">
                <Share2 className="w-4 h-4 md:w-5 md:h-5" />
                Share Your Story
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
