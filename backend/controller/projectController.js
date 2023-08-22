const Project = require("../model/projectDetailsModel");

exports.addProjectDetails = async (req, res) => {
  const { subject, number, assigne, receiptNumber, expectedDate, description } =
    req.body;

  try {
    if (!subject && !number && !assigne && !receiptNumber) {
      res.status(400).json({
        success: false,
        message: "fill all the details",
      });
    }

    const projectDetails = await Project.create({
      subject,
      number,
      assigne,
      receiptNumber,
      expectedDate,
      description,
    });

    res.status(200).json({
      success: true,
      projectDetails,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error,
    });
  }
};
