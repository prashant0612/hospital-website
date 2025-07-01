import React, { useState } from "react";
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
  Brain,
  Activity,
  Microscope,
  Pill,
  Bone,
  Baby,
  Search,
  Filter,
  ChevronRight,
  Clock,
  UserCheck,
  Zap,
  Beaker,
  Scissors,
  Thermometer,
  Syringe,
  HeartPulse,
  Scan,
  Waves,
} from "lucide-react";

const Departments = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState(null);

  const categories = [
    { id: "all", name: "All Departments", count: 16 },
    { id: "clinical", name: "Clinical Sciences", count: 8 },
    { id: "preclinical", name: "Pre-Clinical Sciences", count: 5 },
    { id: "surgical", name: "Surgical Specialties", count: 3 },
  ];

  const departments = [
    {
      id: 1,
      name: "Anatomy",
      category: "preclinical",
      icon: Bone,
      color: "from-blue-600 to-indigo-700",
      bgColor: "bg-blue-50",
      description: "Study of human body structure and organization",
      details:
        "Our Anatomy department provides comprehensive understanding of human body structure through modern teaching methods including cadaveric dissection, histology, and embryology.",
      facilities: [
        "Modern Dissection Hall",
        "Digital Microscopy Lab",
        "Museum with Specimens",
        "Histology Laboratory",
      ],
      faculty: 8,
      students: 120,
      image:
        "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 2,
      name: "Physiology",
      category: "preclinical",
      icon: HeartPulse,
      color: "from-red-600 to-pink-700",
      bgColor: "bg-red-50",
      description: "Understanding human body functions and mechanisms",
      details:
        "The Physiology department focuses on how the human body works, covering cardiovascular, respiratory, nervous, and other body systems.",
      facilities: [
        "Exercise Physiology Lab",
        "Neurophysiology Unit",
        "Cardiovascular Lab",
        "Research Facility",
      ],
      faculty: 6,
      students: 120,
      image:
        "https://images.pexels.com/photos/5452268/pexels-photo-5452268.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 3,
      name: "Biochemistry",
      category: "preclinical",
      icon: Beaker,
      color: "from-green-600 to-emerald-700",
      bgColor: "bg-green-50",
      description: "Chemical processes within living organisms",
      details:
        "Our Biochemistry department explores the chemical basis of life, metabolism, and molecular mechanisms of diseases.",
      facilities: [
        "Advanced Laboratory",
        "Spectrophotometry Unit",
        "Electrophoresis Lab",
        "Clinical Biochemistry",
      ],
      faculty: 7,
      students: 120,
      image:
        "https://images.pexels.com/photos/5452274/pexels-photo-5452274.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 4,
      name: "Pathology",
      category: "preclinical",
      icon: Microscope,
      color: "from-purple-600 to-violet-700",
      bgColor: "bg-purple-50",
      description: "Study of disease causes and effects",
      details:
        "The Pathology department provides diagnostic services and teaches the nature of diseases through laboratory investigations.",
      facilities: [
        "Histopathology Lab",
        "Cytology Unit",
        "Autopsy Room",
        "Digital Pathology",
      ],
      faculty: 5,
      students: 120,
      image:
        "https://images.pexels.com/photos/5452299/pexels-photo-5452299.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 5,
      name: "Microbiology",
      category: "preclinical",
      icon: Zap,
      color: "from-teal-600 to-cyan-700",
      bgColor: "bg-teal-50",
      description: "Study of microorganisms and infectious diseases",
      details:
        "Our Microbiology department focuses on bacteria, viruses, fungi, and parasites, their role in health and disease.",
      facilities: [
        "Bacteriology Lab",
        "Virology Unit",
        "Mycology Section",
        "Parasitology Lab",
      ],
      faculty: 4,
      students: 120,
      image:
        "https://images.pexels.com/photos/5452290/pexels-photo-5452290.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 6,
      name: "General Medicine",
      category: "clinical",
      icon: Stethoscope,
      color: "from-blue-700 to-indigo-800",
      bgColor: "bg-blue-50",
      description: "Comprehensive medical care for adults",
      details:
        "Our General Medicine department provides comprehensive healthcare for adult patients with various medical conditions.",
      facilities: [
        "General Medicine Ward",
        "ICU",
        "Emergency Department",
        "Outpatient Clinic",
      ],
      faculty: 12,
      students: 80,
      image:
        "https://images.pexels.com/photos/5452297/pexels-photo-5452297.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 7,
      name: "General Surgery",
      category: "surgical",
      icon: Scissors,
      color: "from-red-700 to-rose-800",
      bgColor: "bg-red-50",
      description: "Surgical treatment of diseases and injuries",
      details:
        "The General Surgery department performs a wide range of surgical procedures with modern equipment and techniques.",
      facilities: [
        "Operation Theaters",
        "Surgical ICU",
        "Pre-op Preparation",
        "Post-op Recovery",
      ],
      faculty: 10,
      students: 60,
      image:
        "https://images.pexels.com/photos/5452283/pexels-photo-5452283.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 8,
      name: "Orthopedics",
      category: "surgical",
      icon: Bone,
      color: "from-orange-600 to-amber-700",
      bgColor: "bg-orange-50",
      description: "Treatment of musculoskeletal disorders",
      details:
        "Our Orthopedics department specializes in treating bone, joint, muscle, and ligament conditions.",
      facilities: [
        "Orthopedic OT",
        "Physiotherapy Unit",
        "X-ray Facility",
        "Plaster Room",
      ],
      faculty: 8,
      students: 40,
      image:
        "https://images.pexels.com/photos/5452266/pexels-photo-5452266.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 9,
      name: "Pediatrics",
      category: "clinical",
      icon: Baby,
      color: "from-pink-600 to-rose-700",
      bgColor: "bg-pink-50",
      description: "Medical care for infants, children, and adolescents",
      details:
        "The Pediatrics department provides specialized healthcare for children from birth to adolescence.",
      facilities: [
        "Pediatric Ward",
        "NICU",
        "Pediatric ICU",
        "Vaccination Center",
      ],
      faculty: 9,
      students: 50,
      image:
        "https://images.pexels.com/photos/5452295/pexels-photo-5452295.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 10,
      name: "Obstetrics & Gynecology",
      category: "clinical",
      icon: Heart,
      color: "from-purple-700 to-pink-800",
      bgColor: "bg-purple-50",
      description: "Women's reproductive health and childbirth",
      details:
        "Our OB-GYN department provides comprehensive care for women's health, pregnancy, and childbirth.",
      facilities: [
        "Labor Room",
        "Operation Theater",
        "Antenatal Clinic",
        "Gynecology Ward",
      ],
      faculty: 7,
      students: 45,
      image:
        "https://images.pexels.com/photos/5452287/pexels-photo-5452287.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 11,
      name: "Ophthalmology",
      category: "clinical",
      icon: Eye,
      color: "from-indigo-600 to-blue-700",
      bgColor: "bg-indigo-50",
      description: "Eye and vision care",
      details:
        "The Ophthalmology department provides comprehensive eye care including medical and surgical treatments.",
      facilities: [
        "Eye OT",
        "Refraction Unit",
        "Retina Clinic",
        "Glaucoma Center",
      ],
      faculty: 4,
      students: 30,
      image:
        "https://images.pexels.com/photos/5452280/pexels-photo-5452280.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 12,
      name: "ENT",
      category: "surgical",
      icon: Waves,
      color: "from-cyan-600 to-blue-700",
      bgColor: "bg-cyan-50",
      description: "Ear, Nose, and Throat disorders",
      details:
        "Our ENT department specializes in treating disorders of the ear, nose, throat, and related structures.",
      facilities: [
        "ENT OT",
        "Audiometry Room",
        "Endoscopy Unit",
        "Speech Therapy",
      ],
      faculty: 5,
      students: 35,
      image:
        "https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 13,
      name: "Dermatology",
      category: "clinical",
      icon: Shield,
      color: "from-emerald-600 to-teal-700",
      bgColor: "bg-emerald-50",
      description: "Skin, hair, and nail disorders",
      details:
        "The Dermatology department provides treatment for various skin conditions and cosmetic procedures.",
      facilities: [
        "Dermatology Clinic",
        "Phototherapy Unit",
        "Cosmetic Center",
        "Allergy Testing",
      ],
      faculty: 3,
      students: 25,
      image:
        "https://images.pexels.com/photos/5452268/pexels-photo-5452268.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 14,
      name: "Psychiatry",
      category: "clinical",
      icon: Brain,
      color: "from-violet-600 to-purple-700",
      bgColor: "bg-violet-50",
      description: "Mental health and behavioral disorders",
      details:
        "Our Psychiatry department provides comprehensive mental health services and counseling.",
      facilities: [
        "Counseling Rooms",
        "Group Therapy Hall",
        "Psychiatric Ward",
        "Rehabilitation Center",
      ],
      faculty: 4,
      students: 20,
      image:
        "https://images.pexels.com/photos/5452274/pexels-photo-5452274.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 15,
      name: "Radiology",
      category: "clinical",
      icon: Scan,
      color: "from-slate-600 to-gray-700",
      bgColor: "bg-slate-50",
      description: "Medical imaging and diagnostics",
      details:
        "The Radiology department provides advanced imaging services for accurate diagnosis.",
      facilities: ["X-ray Unit", "CT Scan", "MRI", "Ultrasound"],
      faculty: 6,
      students: 30,
      image:
        "https://images.pexels.com/photos/5452299/pexels-photo-5452299.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 16,
      name: "Anesthesiology",
      category: "clinical",
      icon: Thermometer,
      color: "from-amber-600 to-orange-700",
      bgColor: "bg-amber-50",
      description: "Perioperative care and pain management",
      details:
        "Our Anesthesiology department ensures safe anesthesia during surgeries and manages pain.",
      facilities: [
        "Pre-op Assessment",
        "Recovery Room",
        "Pain Clinic",
        "Critical Care",
      ],
      faculty: 5,
      students: 25,
      image:
        "https://images.pexels.com/photos/5452290/pexels-photo-5452290.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ];

  const filteredDepartments = departments.filter((dept) => {
    const matchesCategory =
      selectedCategory === "all" || dept.category === selectedCategory;
    const matchesSearch =
      dept.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dept.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const openDepartmentModal = (department) => {
    setSelectedDepartment(department);
  };

  const closeDepartmentModal = () => {
    setSelectedDepartment(null);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative text-black overflow-hidden py-10">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Our
              <span className="block   ">Departments</span>
            </h1>

            {/* Decorative Line */}
            <div className="flex justify-center mb-6">
              <div className="w-20 h-1 bg-gradient-to-r from-gray-300 via-gray-600 to-gray-300 rounded-full animate-expand"></div>
            </div>

            <p className="text-lg mb-8 max-w-3xl mx-auto leading-relaxed">
              Comprehensive medical education across specialized departments
              with world-class faculty and modern facilities
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center gap-2  ">
                <BookOpen className="w-5 h-5" />
                <span>{departments.length} Departments</span>
              </div>
              <div className="flex items-center gap-2  ">
                <Users className="w-5 h-5" />
                <span>100+ Faculty Members</span>
              </div>
              <div className="flex items-center gap-2 ">
                <GraduationCap className="w-5 h-5" />
                <span>1000+ Students</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search departments..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                      : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                  }`}
                >
                  {category.name}
                  <span className="ml-2 text-sm opacity-75">
                    ({category.count})
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Departments Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredDepartments.length === 0 ? (
            <div className="text-center py-16">
              <Building className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                No departments found
              </h3>
              <p className="text-gray-500">
                Try adjusting your search or filter criteria
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredDepartments.map((department) => {
                const IconComponent = department.icon;
                return (
                  <div
                    key={department.id}
                    className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2 border border-gray-100"
                    onClick={() => openDepartmentModal(department)}
                  >
                    {/* Department Image */}
                    <div className="aspect-video overflow-hidden relative">
                      <img
                        src={department.image}
                        alt={department.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                      {/* Icon Overlay */}
                      <div className="absolute top-4 left-4">
                        <div
                          className={`w-12 h-12 bg-gradient-to-br ${department.color} rounded-full flex items-center justify-center shadow-lg`}
                        >
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    </div>

                    {/* Department Info */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                        {department.name}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {department.description}
                      </p>

                      {/* Stats */}
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center gap-1">
                          <UserCheck className="w-4 h-4" />
                          <span>{department.faculty} Faculty</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          <span>{department.students} Students</span>
                        </div>
                      </div>

                      {/* View More Button */}
                      <div className="flex items-center justify-between">
                        <span
                          className={`px-3 py-1 ${department.bgColor} text-xs font-medium rounded-full capitalize`}
                        >
                          {department.category.replace("-", " ")}
                        </span>
                        <div className="flex items-center text-blue-600 font-medium text-sm group-hover:text-blue-700">
                          <span>Learn More</span>
                          <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Academic Excellence
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {departments.length}
              </div>
              <div className="text-gray-600">Departments</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <UserCheck className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">100+</div>
              <div className="text-gray-600">Faculty Members</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">1000+</div>
              <div className="text-gray-600">Students</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">25+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Department Detail Modal */}
      {selectedDepartment && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl">
            {/* Close Button */}
            <button
              onClick={closeDepartmentModal}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-300"
            >
              <ArrowRight className="w-5 h-5 rotate-45" />
            </button>

            {/* Modal Content */}
            <div className="p-8">
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${selectedDepartment.color} rounded-full flex items-center justify-center`}
                >
                  <selectedDepartment.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    {selectedDepartment.name}
                  </h2>
                  <p className="text-gray-600 capitalize">
                    {selectedDepartment.category.replace("-", " ")} Department
                  </p>
                </div>
              </div>

              {/* Image */}
              <div className="aspect-video rounded-xl overflow-hidden mb-6">
                <img
                  src={selectedDepartment.image}
                  alt={selectedDepartment.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Description */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  About the Department
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {selectedDepartment.details}
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-blue-50 p-4 rounded-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <UserCheck className="w-5 h-5 text-blue-600" />
                    <span className="font-semibold text-gray-900">Faculty</span>
                  </div>
                  <div className="text-2xl font-bold text-blue-600">
                    {selectedDepartment.faculty}
                  </div>
                </div>
                <div className="bg-green-50 p-4 rounded-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="w-5 h-5 text-green-600" />
                    <span className="font-semibold text-gray-900">
                      Students
                    </span>
                  </div>
                  <div className="text-2xl font-bold text-green-600">
                    {selectedDepartment.students}
                  </div>
                </div>
              </div>

              {/* Facilities */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Facilities & Equipment
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedDepartment.facilities.map((facility, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{facility}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
                  Contact Department
                </button>
                <button className="flex-1 border border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300">
                  View Faculty
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Departments;
