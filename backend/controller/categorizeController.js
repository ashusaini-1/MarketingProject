const Question = require("../model/categorizeModel");

module.exports.newQuestion = async (req, res) => {
  const formData = req.body;

  try {
    const newQuestion = new Question({
      questionText: formData.questionText,
      options: formData.options.map((option) => ({
        text: option.text,
        isCorrect: option.isCorrect || false,
      })),
      marks: formData.marks,
    });

    const savedQuestion = await newQuestion.save();

    res.status(201).json({
      success: true,
      message: "Question saved successfully",
      question: savedQuestion,
    });
  } catch (error) {
    console.error("Error saving question:", error);
    res.status(500).json({
      success: false,
      message: "Error saving question",
    });
  }
};
