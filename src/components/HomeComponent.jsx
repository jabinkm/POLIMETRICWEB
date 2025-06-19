"use client";
import { motion } from "framer-motion";
import { img } from "framer-motion/client";
import { Clock, TrendingUp } from "lucide-react";

const HomeComponent = () => {
  const chartData = [
    { party: "UDF", percentage: 43, color: "#2563eb", votes: "62,452" },
    { party: "LDF", percentage: 41, color: "#dc2626", votes: "59,547" },
    { party: "PV", percentage: 13, color: "#16a34a", votes: "18,880" },
    { party: "NDA", percentage: 2, color: "#f59e0b", votes: "2,904" },
    { party: "OTHERS", percentage: 1, color: "#8b5cf6", votes: "1,462" },
  ];

  const pollingRanges = [
    {
      title: "Polling Range: 60% - 65%",
      data: [
        { party: "UDF", votes: "62,452", color: "#2563eb" },
        { party: "LDF", votes: "59,547", color: "#dc2626" },
        { party: "PV", votes: "18,880", color: "#16a34a" },
        { party: "NDA", votes: "2,904", color: "#f59e0b" },
        { party: "OTHERS", votes: "1,462", color: "#8b5cf6" },
      ],
    },
    {
      title: "Polling Range: 65% - 70%",
      data: [
        { party: "UDF", votes: "67,448", color: "#2563eb" },
        { party: "LDF", votes: "64,311", color: "#dc2626" },
        { party: "PV", votes: "20,391", color: "#16a34a" },
        { party: "NDA", votes: "3,137", color: "#f59e0b" },
        { party: "OTHERS", votes: "1,568", color: "#8b5cf6" },
      ],
    },
    {
      title: "Polling Range: 70% - 75%",
      data: [
        { party: "UDF", votes: "72,444", color: "#2563eb" },
        { party: "LDF", votes: "69,075", color: "#dc2626" },
        { party: "PV", votes: "21,901", color: "#16a34a" },
        { party: "NDA", votes: "3,369", color: "#f59e0b" },
        { party: "OTHERS", votes: "1,684", color: "#8b5cf6" },
      ],
    },
    {
      title: "Polling Range: 75% - 80%",
      data: [
        { party: "UDF", votes: "77,440", color: "#2563eb" },
        { party: "LDF", votes: "73,838", color: "#dc2626" },
        { party: "PV", votes: "23,412", color: "#16a34a" },
        { party: "NDA", votes: "3,601", color: "#f59e0b" },
        { party: "OTHERS", votes: "1,800", color: "#8b5cf6" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        {/* Animated Coming Soon Header */}
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="flex items-center justify-center gap-3 mb-4"
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            <Clock className="w-8 h-8 text-orange-500" />
          </motion.div>
          <motion.h1
            className="text-6xl font-bold text-gray-800"
            animate={{
              color: ["#1f2937", "#f59e0b", "#1f2937"],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          
          >
            <img
              src="/images/polimetricLogo.png"
              alt="POLIMETRIC Logo"
              width={450}
              height={150}
              className="mb-4"
            />  
            COMING SOON
          </motion.h1>
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <TrendingUp className="w-8 h-8 text-blue-600" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Header Section */}
      <motion.div
        className="flex items-center gap-4 mb-8"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="bg-orange-400 text-white text-2xl font-bold px-4 py-3 rounded">
          02
        </div>
        <div>
          <h1 className="text-3xl font-bold text-blue-900 mb-2">
            Final Analysis Report
          </h1>
          <div className="w-16 h-1 bg-orange-400"></div>
        </div>
      </motion.div>

      {/* Subtitle */}
      <motion.h2
        className="text-xl font-semibold text-blue-900 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        A Solid Bar Graph, Analysis and Evaluation
      </motion.h2>

      {/* Total Respondents */}
      <motion.div
        className="text-right mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <span className="text-gray-700 font-medium">Total Respondents - </span>
        <span className="text-red-500 font-bold">36,400</span>
      </motion.div>

      {/* Legend */}
      <motion.div
        className="flex flex-wrap gap-4 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        {chartData.map((item, index) => (
          <div key={item.party} className="flex items-center gap-2">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: item.color }}
            ></div>
            <span className="text-sm font-medium">{item.party}</span>
          </div>
        ))}
      </motion.div>

      {/* Bar Chart */}
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <div className="relative">
          {/* Y-axis labels */}
          <div className="absolute left-0 top-0 h-80 flex flex-col justify-between text-sm text-gray-600">
            {[100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 0].map((num) => (
              <div key={num}>{num}</div>
            ))}
          </div>

          {/* Chart area */}
          <div className="ml-8 pl-4 border-l border-b border-gray-300 h-80 flex items-end gap-8">
            {chartData.map((item, index) => (
              <motion.div
                key={item.party}
                className="flex flex-col items-center"
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                transition={{ duration: 1, delay: 1.2 + index * 0.1 }}
              >
                <div className="text-white font-bold text-sm mb-2">
                  {item.percentage}%
                </div>
                <motion.div
                  className="w-16 rounded-t"
                  style={{
                    backgroundColor: item.color,
                    height: `${item.percentage * 3}px`,
                  }}
                  initial={{ height: 0 }}
                  animate={{ height: `${item.percentage * 3}px` }}
                  transition={{ duration: 1, delay: 1.2 + index * 0.1 }}
                ></motion.div>
                <div className="text-sm font-medium mt-2">{item.party}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Statistics */}
      <motion.div
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.8 }}
      >
        <p className="text-gray-700 mb-2">
          <span className="font-medium">Nilambur By-election</span> has a total
          of <span className="text-red-500 font-bold">2,32,381</span>
        </p>
        <p className="text-gray-700">
          <span className="font-medium">Comprising: Male Voters - </span>
          <span className="text-red-500 font-bold">1,13,613</span>
          <span className="font-medium"> : Female Voters - </span>
          <span className="text-red-500 font-bold">1,18,760</span>
          <span className="font-medium"> : Transgender - </span>
          <span className="text-red-500 font-bold">6</span>
        </p>
      </motion.div>

      {/* Data Analysis Section */}
      <motion.div
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 2 }}
      >
        <h3 className="text-xl font-bold text-gray-800 mb-6 underline">
          As per our Data Analysis:
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {pollingRanges.map((range, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 p-4 rounded"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 2.2 + index * 0.1 }}
            >
              <h4 className="font-bold text-sm mb-3 text-center">
                {range.title}
              </h4>
              {range.data.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className="flex justify-between text-sm mb-1"
                >
                  <span style={{ color: item.color }} className="font-medium">
                    {item.party} -
                  </span>
                  <span style={{ color: item.color }} className="font-bold">
                    {item.votes}
                  </span>
                </div>
              ))}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Conclusion */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 2.6 }}
      >
        <h3 className="text-xl font-bold text-gray-800 mb-4 underline">
          Conclusion:
        </h3>
        <p className="text-gray-700 leading-relaxed">
          From <span className="font-bold">POLYMETRIC's</span> perspective, our
          team projects that{" "}
          <span className="font-bold">Mr. Aryadan Shoukath</span> will recieves{" "}
          <span className="font-bold">2,400 to 5600</span> more votes than{" "}
          <span className="font-bold">Mr. Swaraj</span>.
        </p>
      </motion.div>
    </div>
  );
};

export default HomeComponent;
