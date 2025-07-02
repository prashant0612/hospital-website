import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NoticeBoard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const panelRef = useRef(null);

  // Sample notices data with categories and dates
  const notices = [
    {
      id: 1,
      title: "MBBS 2024 Admissions Open",
      link: "/notices/admission-mbbs-2024",
      category: "Admissions",
      date: "15 Jun 2024",
      urgent: true,
    },
    {
      id: 2,
      title: "New Visiting Hours Policy",
      link: "/notices/visiting-hours-update",
      category: "Hospital",
      date: "10 Jun 2024",
      urgent: false,
    },
    {
      id: 3,
      title: "Annual Research Symposium",
      link: "/notices/research-symposium",
      category: "Academics",
      date: "25 May 2024",
      urgent: true,
    },
    {
      id: 4,
      title: "Blood Donation Camp - Save Lives",
      link: "/notices/blood-donation-camp",
      category: "Event",
      date: "20 May 2024",
      urgent: false,
    },
    {
      id: 5,
      title: "Revised Academic Calendar 2024-25",
      link: "/notices/academic-calendar",
      category: "Academics",
      date: "12 May 2024",
      urgent: false,
    },
  ];

  // Animation variants
  const floatingButton = {
    initial: {
      y: 0,
      rotate: 0,
    },
    animate: {
      y: [-5, 5, -5],
      rotate: [0, 5, -5, 0],
      transition: {
        y: {
          repeat: Infinity,
          duration: 3,
          ease: "easeInOut",
        },
        rotate: {
          repeat: Infinity,
          duration: 8,
          ease: "easeInOut",
        },
      },
    },
    hover: {
      scale: 1.1,
      y: 0,
      rotate: 0,
      transition: { duration: 0.3 },
    },
    tap: {
      scale: 0.9,
      transition: { duration: 0.2 },
    },
  };

  const noticePanel = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 300,
        mass: 0.5,
      },
    },
    exit: {
      opacity: 0,
      y: 30,
      scale: 0.95,
      transition: { duration: 0.3 },
    },
  };

  const noticeItem = {
    hidden: { opacity: 0, y: 10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.07,
        duration: 0.4,
        ease: "backOut",
      },
    }),
    hover: {
      y: -2,
      transition: { duration: 0.2 },
    },
  };

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (panelRef.current && !panelRef.current.contains(event.target)) {
        // Check if the click was not on the floating button
        const floatingButton = document.querySelector(
          '[aria-label="Notice Board"]'
        );
        if (floatingButton && !floatingButton.contains(event.target)) {
          setIsOpen(false);
        }
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
  if (isOpen) {
    document.body.classList.add('overflow-hidden');
  } else {
    document.body.classList.remove('overflow-hidden');
  }

  return () => {
    document.body.classList.remove('overflow-hidden');
  };
}, [isOpen]);

  return (
    <div className="fixed bottom-28 md:bottom-28 right-4 md:right-8 z-50">
      {/* Floating Action Button */}
      <motion.button
        variants={floatingButton}
        initial="initial"
        animate="animate"
        whileHover="hover"
        whileTap="tap"
        onClick={() => setIsOpen(!isOpen)}
        className="relative cursor-pointer bg-gradient-to-br from-blue-600 to-blue-800 text-white p-3 md:p-4 rounded-full shadow-2xl flex items-center justify-center ring-4 ring-blue-400/30 hover:ring-blue-400/50 transition-all duration-300"
        aria-label="Notice Board"
      >
        <div className="absolute -inset-1 bg-blue-400/30 blur-md rounded-full"></div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 md:h-7 md:w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
            />
          </svg>
        </motion.div>
        <AnimatePresence>
          {!isOpen && (
            <motion.span
              className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 md:h-6 md:w-6 flex items-center justify-center shadow-md"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ type: "spring" }}
            >
              {notices.filter((n) => n.urgent).length}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Notice Board Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={noticePanel}
            ref={panelRef}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute bottom-14 right-0 w-[calc(100vw-2rem)] sm:w-96 z-50 bg-white/90 backdrop-blur-lg rounded-xl shadow-2xl border border-white/20 overflow-hidden"
          >
            {/* Panel Header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-4 py-3 md:px-5 md:py-3 flex justify-between items-center border-b border-white/20">
              <div>
                <h3 className="font-bold text-base md:text-lg">
                  Medical College Notices
                </h3>
                <p className="text-xs text-blue-100 opacity-90">
                  Latest updates and announcements
                </p>
              </div>
              <motion.button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white p-1 rounded-full hover:bg-white/10"
                aria-label="Close notices"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 md:h-5 md:w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </motion.button>
            </div>

            {/* Notices List */}
            <div className="max-h-[60vh] sm:max-h-80 overflow-y-auto">
              {notices.map((notice, i) => (
                <motion.a
                  key={notice.id}
                  href={notice.link}
                  className={`block px-4 py-2 md:px-5 md:py-3 border-b border-white/10 hover:bg-white/50 transition-colors ${
                    notice.urgent ? "bg-red-50/50" : ""
                  }`}
                  variants={noticeItem}
                  initial="hidden"
                  animate="visible"
                  custom={i}
                  whileHover="hover"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        {notice.urgent && (
                          <span className="bg-red-500 text-white text-[10px] md:text-xs px-1.5 md:px-2 py-0.5 rounded-full animate-pulse">
                            URGENT
                          </span>
                        )}
                        <span className="text-[10px] md:text-xs font-medium text-blue-600 bg-blue-100/80 px-1.5 md:px-2 py-0.5 rounded">
                          {notice.category}
                        </span>
                      </div>
                      <p
                        className={`text-xs md:text-sm font-medium mt-1 ${
                          notice.urgent ? "text-red-700" : "text-gray-700"
                        }`}
                      >
                        {notice.title}
                      </p>
                    </div>
                    <span className="text-[10px] md:text-xs text-gray-500 whitespace-nowrap ml-2">
                      {notice.date}
                    </span>
                  </div>
                  <motion.div
                    className="text-[10px] md:text-xs text-blue-500 mt-1 flex items-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: i * 0.07 + 0.3 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-2.5 w-2.5 md:h-3 md:w-3 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Click for details
                  </motion.div>
                </motion.a>
              ))}
            </div>

            {/* Panel Footer */}
            <motion.div
              className="bg-gradient-to-r from-blue-50 to-white/50 px-4 py-2 md:px-5 md:py-3 text-center border-t border-white/20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: notices.length * 0.07 + 0.4 }}
            >
              <a
                href="/notices"
                className="text-[10px] md:text-xs font-medium text-blue-600 hover:text-blue-800 inline-flex items-center hover:underline"
              >
                View All Notices
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-2.5 w-2.5 md:h-3 md:w-3 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NoticeBoard;
