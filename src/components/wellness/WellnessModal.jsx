/**
 * WellnessModal Component
 * Main modal component for the wellness recommendation flow
 * Features: Multi-step form, smooth animations, progress tracking, result display
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import QuestionStep from "./QuestionStep";
import ResultSection from "./ResultSection";
import { questionsByCategory, generateRecommendations } from "../../data/wellnessRecommendationData";

const WellnessModal = ({ category, isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [recommendations, setRecommendations] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const questions = questionsByCategory[category.id] || [];
  const isLastStep = currentStep === questions.length - 1;
  const isFirstStep = currentStep === 0;

  // Reset state when modal opens
  useEffect(() => {
    if (isOpen) {
      setCurrentStep(0);
      setSelectedAnswers({});
      setRecommendations(null);
      setIsLoading(false);
    }
  }, [isOpen, category]);

  const handleAnswerChange = (questionId, answer) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: answer,
    }));
  };

  const handleNext = () => {
    // Validate current question is answered
    const currentQuestion = questions[currentStep];
    if (!selectedAnswers[currentQuestion.id]) {
      // Show validation error
      return;
    }

    if (isLastStep) {
      // Generate recommendations
      handleSubmit();
    } else {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const generatedRecommendations = generateRecommendations(category.id, selectedAnswers);
    setRecommendations(generatedRecommendations);
    setIsLoading(false);
  };

  const handleClose = () => {
    setCurrentStep(0);
    setSelectedAnswers({});
    setRecommendations(null);
    onClose();
  };

  const canProceed = selectedAnswers[questions[currentStep]?.id];

  // Modal backdrop animation
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0, transition: { duration: 0.2 } },
  };

  // Modal content animation
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
    exit: { opacity: 0, scale: 0.95, y: 20, transition: { duration: 0.2 } },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
          onClick={handleClose}
        >
          {/* Modal Container */}
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
            className="relative flex h-[90vh] w-full max-w-2xl max-h-[90vh] overflow-hidden rounded-3xl bg-gradient-to-br from-white/95 to-white/90 backdrop-blur-xl border border-white/40 shadow-2xl"
          >
            {/* Decorative elements */}
            <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-blue-400/20 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-purple-400/20 blur-3xl" />

            {/* Scrollable Content Area */}
            <div className="relative z-10 flex min-h-0 flex-col w-full">
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="border-b border-white/20 px-6 pt-6 pb-4 bg-gradient-to-r from-white/40 to-transparent"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-4xl">{category.icon}</span>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-800">{category.label}</h2>
                      <p className="text-sm text-gray-600">{category.description}</p>
                    </div>
                  </div>

                  {/* Close button */}
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleClose}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100/80 text-red-600 hover:bg-red-200 transition-colors"
                  >
                    ✕
                  </motion.button>
                </div>
              </motion.div>

              {/* Main Content */}
              <div className="flex-1 min-h-0 max-h-[calc(90vh-184px)] overflow-y-auto p-6">
                <AnimatePresence mode="wait">
                  {recommendations === null ? (
                    // Questions View
                    <motion.div
                      key="questions"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <QuestionStep
                        question={questions[currentStep]}
                        selectedAnswers={selectedAnswers}
                        onAnswerChange={handleAnswerChange}
                        isActive={true}
                        stepNumber={currentStep + 1}
                        totalSteps={questions.length}
                      />
                    </motion.div>
                  ) : isLoading ? (
                    // Loading state
                    <motion.div
                      key="loading"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex flex-col items-center justify-center py-12"
                    >
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="mb-6"
                      >
                        <div className="h-16 w-16 rounded-full border-4 border-blue-200 border-t-blue-500" />
                      </motion.div>

                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        Analyzing Your Responses...
                      </h3>
                      <p className="text-center text-gray-600">
                        Creating your personalized wellness plan based on your unique needs
                      </p>

                      {/* Loading stages */}
                      <div className="mt-6 space-y-2 w-full max-w-sm">
                        {[
                          "📊 Analyzing preferences",
                          "🧘 Selecting yoga poses",
                          "🧠 Choosing meditations",
                          "✨ Personalizing recommendations",
                        ].map((stage, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.15 }}
                            className="flex items-center gap-2 text-sm text-gray-700"
                          >
                            <motion.span
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ delay: idx * 0.15, repeat: Infinity, duration: 1.5 }}
                            >
                              {stage.split(" ")[0]}
                            </motion.span>
                            <span>{stage}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  ) : (
                    // Results View
                    <motion.div
                      key="results"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <ResultSection
                        recommendations={recommendations}
                        category={category}
                        answers={selectedAnswers}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Footer with navigation buttons */}
              {recommendations === null && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="border-t border-white/20 bg-gradient-to-r from-white/40 to-transparent p-6 flex gap-4"
                >
                  {/* Previous Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handlePrevious}
                    disabled={isFirstStep}
                    className={`
                      px-6
                      py-3
                      rounded-lg
                      font-semibold
                      transition-all
                      ${
                        isFirstStep
                          ? "text-gray-400 cursor-not-allowed"
                          : "text-gray-700 hover:bg-gray-100 border border-gray-300"
                      }
                    `}
                  >
                    ← Previous
                  </motion.button>

                  {/* Spacer */}
                  <div className="flex-1" />

                  {/* Question counter */}
                  <div className="flex items-center px-4 py-2 rounded-lg bg-blue-100/50 border border-blue-200">
                    <span className="text-sm font-semibold text-blue-700">
                      {currentStep + 1} / {questions.length}
                    </span>
                  </div>

                  {/* Next/Submit Button */}
                  <motion.button
                    whileHover={canProceed ? { scale: 1.05 } : {}}
                    whileTap={canProceed ? { scale: 0.95 } : {}}
                    onClick={handleNext}
                    disabled={!canProceed}
                    className={`
                      px-8
                      py-3
                      rounded-lg
                      font-semibold
                      text-white
                      transition-all
                      ${
                        canProceed
                          ? "bg-gradient-to-r from-blue-500 to-purple-500 hover:shadow-lg cursor-pointer"
                          : "bg-gray-400 cursor-not-allowed"
                      }
                    `}
                  >
                    {isLastStep ? "Generate Recommendations →" : "Next →"}
                  </motion.button>
                </motion.div>
              )}

              {/* Footer for results */}
              {recommendations !== null && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="border-t border-white/20 bg-gradient-to-r from-white/40 to-transparent p-6 flex gap-4"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleClose}
                    className="flex-1 px-6 py-3 rounded-lg font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 transition-all"
                  >
                    Close
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      setCurrentStep(0);
                      setSelectedAnswers({});
                      setRecommendations(null);
                    }}
                    className="flex-1 px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-500 hover:shadow-lg transition-all"
                  >
                    Start Over
                  </motion.button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WellnessModal;
