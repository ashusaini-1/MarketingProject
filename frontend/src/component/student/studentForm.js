import React, { useState } from "react";
import {
  Input,
  Box,
  Center,
  Button,
  Textarea,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { projectDetail } from "../../action/projectDetailAction";
import { useToast } from "@chakra-ui/react";
import { useDispatch } from "react-redux";

const StudentForm = () => {
  const toast = useToast();
  const dispatch = useDispatch();
  const [currentStep, setCurrentStep] = useState(1);
  const [subject, setSubject] = useState("");
  const [number, setNumber] = useState("");
  const [document, setDocument] = useState(null);
  const [assigne, setAssigne] = useState("");
  const [receiptNumber, setReceiptNumber] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [description, setDescription] = useState("");

  const handleSubmitStep1 = (e) => {
    e.preventDefault();
    // Process step 1 form data

    // If everything is valid, move to the next step
    setCurrentStep(2);
  };

  const handlePreviousStep = () => {
    setCurrentStep(1);
  };

  const submitDetails = async (e) => {
    e.preventDefault();

    if (!subject || !assigne || !receiptNumber || !number) {
      toast({
        title: "Please Fill all the Fields",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      return;
    }

    try {
      const myForm = new FormData();
      myForm.set("subject", subject);
      myForm.set("assigne", assigne);
      myForm.set("number", number);
      myForm.set("receiptNumber", receiptNumber);

      myForm.set("description", description);
      if (selectedDate) {
        const formattedDate = selectedDate.toISOString().split("T")[0];
        myForm.set("expectedDate", formattedDate);
      }

      // Dispatch the register action directly
      await dispatch(projectDetail(myForm)); // Use dispatch here

      toast({
        title: "Data Entered Successfuly",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      //  navigate("/");
    } catch (error) {
      toast({
        title: "Error Occurred!",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
    }
  };

  return (
    <Center h="100vh">
      <Box p={6} shadow="md" borderRadius="md" bg="white" w="300px">
        {currentStep === 1 && (
          <form onSubmit={handleSubmitStep1}>
            <FormControl>
              <FormLabel>Subject Name</FormLabel>
              <Input
                type="text"
                value={subject}
                placeholder="Enter subject name"
                onChange={(e) => setSubject(e.target.value)}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Contact Number</FormLabel>
              <Input
                type="number"
                value={number}
                placeholder="Enter contact number"
                onChange={(e) => setNumber(e.target.value)}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Select Document</FormLabel>
              <Input
                type="file"
                value={document}
                onChange={(e) => setDocument(e.target.files[0])}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Choose Assignee</FormLabel>
              <select
                value={assigne}
                onChange={(e) => setAssigne(e.target.value)}
              >
                <option value="Ashu">Ashu</option>{" "}
                <option value="Saini">Saini</option>
                <option value="Ashu Saini">Ashu Saini</option>
              </select>
            </FormControl>
            <Button type="submit" colorScheme="blue" mt={4} w="full">
              Next
            </Button>
          </form>
        )}
        {currentStep === 2 && (
          <form>
            <FormControl>
              <FormLabel>Payment Receipt Number</FormLabel>
              <Input
                type="number"
                value={receiptNumber}
                placeholder="Enter receipt number"
                onChange={(e) => setReceiptNumber(e.target.value)}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Select Date</FormLabel>
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                dateFormat="dd/MM/yyyy"
                className="form-control"
                placeholderText="Select a date"
                style={{ border: "1px solid #ced4da", borderRadius: "4px" }}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Description</FormLabel>
              <Textarea
                value={description}
                placeholder="Enter description"
                onChange={(e) => setDescription(e.target.value)}
              />
            </FormControl>
            <Button
              onClick={handlePreviousStep}
              colorScheme="gray"
              mt={4}
              w="full"
            >
              Back
            </Button>

            <Button onClick={submitDetails} colorScheme="blue" mt={4} w="full">
              Submit
            </Button>
          </form>
        )}
      </Box>
    </Center>
  );
};

export default StudentForm;
