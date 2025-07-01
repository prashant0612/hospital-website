import React from "react";
import {
  Mail,
  Phone,
  Award,
  Users,
  Stethoscope,
  GraduationCap,
} from "lucide-react";
import { motion } from "framer-motion";

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Uma Shankar",
      role: "Chairman",
      phone: "+91-9334767990",
      email: "himalayauniv.hmch@gmail.com",
      image: "/team/team1.png",
      icon: Award,
    },
    {
      id: 2,
      name: "Dr. RC Saw",
      role: "Director",
      phone: "+91-9304637349",
      email: "himalayauniv.hmch@gmail.com",
      image: "/team/team2.png",
      icon: Users,
    },
    {
      id: 3,
      name: "Dr. Rakesh Kumar",
      role: "Principal",
      phone: "+91-9031068020",
      email: "himalayauniv.hmch@gmail.com",
      image: "/team/team3.jpg",
      icon: GraduationCap,
    },
    {
      id: 4,
      name: "Dr. Kumar Harihar Raghwendra",
      role: "Medical Superintendent",
      phone: "+91-9835092798",
      email: "himalayauniv.hmch@gmail.com",
      image: "/team/team4.jpg",
      icon: Stethoscope,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  const cardHoverVariants = {
    hover: {
      y: -10,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className=" bg-gray-50">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden py-20"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/5 to-gray-900/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-900 rounded-full mb-6 shadow-md">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">
              OUR LEADERSHIP TEAM
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-gray-700 to-gray-500 rounded-full mx-auto"></div>
          </motion.div>

          {/* Team Members Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {teamMembers.map((member) => {
              const IconComponent = member.icon;
              return (
                <motion.div
                  key={member.id}
                  variants={itemVariants}
                  whileHover="hover"
                  className="group relative"
                >
                  <motion.div
                    variants={cardHoverVariants}
                    className="bg-white rounded-xl shadow-md overflow-hidden h-full border border-gray-100"
                  >
                    {/* Card Content */}
                    <div className="p-6">
                      {/* Profile Image */}
                      <div className="relative mb-6">
                        <motion.div
                          initial={{ scale: 1 }}
                          whileHover={{ scale: 1.05 }}
                          className="relative w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg"
                        >
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent"></div>
                        </motion.div>
                        <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center shadow-lg">
                          <IconComponent className="w-5 h-5 text-white" />
                        </div>
                      </div>

                      {/* Name and Role */}
                      <div className="text-center mb-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-1">
                          {member.name}
                        </h3>
                        <span className="text-sm font-medium text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                          {member.role}
                        </span>
                      </div>

                      {/* Divider */}
                      <div className="border-t border-gray-200 my-4"></div>

                      {/* Contact Info */}
                      <div className="space-y-3">
                        <div className="flex items-center text-gray-700">
                          <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mr-3">
                            <Phone className="w-4 h-4 text-gray-600" />
                          </div>
                          <span className="text-sm font-medium">
                            {member.phone}
                          </span>
                        </div>

                        <div className="flex items-start text-gray-700">
                          <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mr-3 mt-1">
                            <Mail className="w-4 h-4 text-gray-600" />
                          </div>
                          <span className="text-sm font-medium break-all">
                            {member.email}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Team;
