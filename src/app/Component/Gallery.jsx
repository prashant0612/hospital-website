import React, { useState } from "react";
import {
  Camera,
  Search,
  Filter,
  Grid3X3,
  ZoomIn,
  X,
  ChevronLeft,
  ChevronRight,
  Download,
  Share2,
  GraduationCap,
  Building,
  Users,
  Award,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    { id: "all", name: "All Photos", count: 48 },
    { id: "campus", name: "Campus Life", count: 12 },
    { id: "medical", name: "Medical Training", count: 15 },
    { id: "events", name: "Events & Ceremonies", count: 10 },
    { id: "facilities", name: "Facilities", count: 8 },
    { id: "students", name: "Student Activities", count: 3 },
  ];

  const galleryImages = [
    {
      id: 1,
      src: "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Medical Students in Laboratory",
      category: "medical",
      description:
        "Students conducting practical experiments in our state-of-the-art laboratory",
    },
    {
      id: 2,
      src: "https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Clinical Training Session",
      category: "medical",
      description:
        "Hands-on clinical training with experienced faculty members",
    },
    {
      id: 3,
      src: "https://images.pexels.com/photos/5452274/pexels-photo-5452274.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Modern Hospital Ward",
      category: "facilities",
      description: "Our modern hospital ward with advanced medical equipment",
    },
    {
      id: 4,
      src: "https://images.pexels.com/photos/5452268/pexels-photo-5452268.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Graduation Ceremony",
      category: "events",
      description:
        "Annual graduation ceremony celebrating our medical graduates",
    },
    {
      id: 5,
      src: "https://images.pexels.com/photos/5452299/pexels-photo-5452299.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Surgery Training",
      category: "medical",
      description: "Advanced surgical training in our operation theater",
    },
    {
      id: 6,
      src: "https://images.pexels.com/photos/5452290/pexels-photo-5452290.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Campus Building",
      category: "campus",
      description: "Main academic building of Himalaya Medical College",
    },
    {
      id: 7,
      src: "https://images.pexels.com/photos/5452297/pexels-photo-5452297.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Medical Equipment",
      category: "facilities",
      description: "Advanced medical equipment for student training",
    },
    {
      id: 8,
      src: "https://images.pexels.com/photos/5452283/pexels-photo-5452283.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Student Discussion",
      category: "students",
      description: "Students engaged in academic discussions",
    },
    {
      id: 10,
      src: "https://images.pexels.com/photos/5452295/pexels-photo-5452295.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Library Study Area",
      category: "campus",
      description: "Modern library with extensive medical literature",
    },
    {
      id: 11,
      src: "https://images.pexels.com/photos/5452287/pexels-photo-5452287.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Anatomy Class",
      category: "medical",
      description: "Interactive anatomy class with 3D models",
    },
    {
      id: 12,
      src: "https://images.pexels.com/photos/5452280/pexels-photo-5452280.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Research Laboratory",
      category: "facilities",
      description: "Advanced research laboratory for medical research",
    },
  ];

  const filteredImages = galleryImages.filter((image) => {
    const matchesCategory =
      selectedCategory === "all" || image.category === selectedCategory;
    const matchesSearch =
      image.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      image.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const openLightbox = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  const nextImage = () => {
    const currentIndex = filteredImages.findIndex(
      (img) => img.id === selectedImage.id
    );
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex]);
  };

  const prevImage = () => {
    const currentIndex = filteredImages.findIndex(
      (img) => img.id === selectedImage.id
    );
    const prevIndex =
      (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedImage(filteredImages[prevIndex]);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="container mx-auto px-6 py-24 lg:py-32 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
              <Camera className="w-10 h-10 text-white" />
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Explore Our <span className="text-teal-300">Gallery</span>
            </h1>

            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Discover the vibrant life at Himalaya Medical College through our
              collection of campus moments, facilities, and events
            </p>

            <div className="flex justify-center gap-6 mt-8">
              <div className="flex items-center gap-2 text-blue-100">
                <Grid3X3 className="w-5 h-5" />
                <span>{galleryImages.length} Photos</span>
              </div>
              <div className="flex items-center gap-2 text-blue-100">
                <Filter className="w-5 h-5" />
                <span>{categories.length - 1} Categories</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-xl">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search photos by title or description..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full pl-10 pr-4 py-3 border border-gray-200 rounded-full bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? "bg-blue-600 text-white shadow-md"
                      : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-16 bg-white">
        <div className="container mx-auto px-6">
          {filteredImages.length === 0 ? (
            <div className="text-center py-16">
              <Camera className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                No matching photos found
              </h3>
              <p className="text-gray-500">
                Try adjusting your search or filter criteria
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredImages.map((image) => (
                <div
                  key={image.id}
                  className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
                  onClick={() => openLightbox(image)}
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <h3 className="text-white font-semibold text-lg mb-1">
                      {image.title}
                    </h3>
                    <p className="text-white/80 text-sm line-clamp-2">
                      {image.description}
                    </p>

                    <div className="absolute top-4 right-4">
                      <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-white/30">
                        <ZoomIn className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full shadow-sm">
                      {
                        categories.find((cat) => cat.id === image.category)
                          ?.name
                      }
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCard
              icon={<Camera className="w-8 h-8 text-white" />}
              value={`${galleryImages.length}+`}
              label="Total Photos"
              gradient="from-blue-600 to-teal-600"
            />
            <StatCard
              icon={<Building className="w-8 h-8 text-white" />}
              value="25+"
              label="Facilities"
              gradient="from-emerald-600 to-teal-600"
            />
            <StatCard
              icon={<Users className="w-8 h-8 text-white" />}
              value="1000+"
              label="Students"
              gradient="from-purple-600 to-blue-600"
            />
            <StatCard
              icon={<Award className="w-8 h-8 text-white" />}
              value="50+"
              label="Events"
              gradient="from-orange-600 to-red-600"
            />
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-6xl w-full max-h-full">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-300"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image */}
            <div className="relative h-full">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="max-w-full max-h-[80vh] object-contain rounded-lg mx-auto"
              />

              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                <div className="max-w-4xl mx-auto">
                  <h3 className="text-white text-xl md:text-2xl font-bold mb-2">
                    {selectedImage.title}
                  </h3>
                  <p className="text-white/80 md:text-lg">
                    {selectedImage.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-4 mt-4">
                    <span className="px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full">
                      {
                        categories.find(
                          (cat) => cat.id === selectedImage.category
                        )?.name
                      }
                    </span>
                    <div className="flex gap-2 ml-auto">
                      <button className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-300">
                        <Download className="w-5 h-5" />
                      </button>
                      <button className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-300">
                        <Share2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Reusable Stat Card Component
const StatCard = ({ icon, value, label, gradient }) => (
  <div className="text-center bg-white p-6 rounded-xl shadow-sm">
    <div
      className={`w-16 h-16 bg-gradient-to-br ${gradient} rounded-full flex items-center justify-center mx-auto mb-4`}
    >
      {icon}
    </div>
    <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
      {value}
    </div>
    <div className="text-gray-600">{label}</div>
  </div>
);

// Reusable Contact Info Component
const ContactInfo = ({ icon, title, info1, info2 }) => (
  <div className="text-center bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
    <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-white/20">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-blue-100">{info1}</p>
    <p className="text-blue-100">{info2}</p>
  </div>
);

export default Gallery;
