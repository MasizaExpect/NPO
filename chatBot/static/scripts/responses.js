function getBotResponse(input) {
    // Service-specific questions
    if (input.includes("services") || input.includes("what do you offer")) {
        return "Masiza Expect NPO provides a diverse range of services to uplift our community. Our offerings include education, science, agriculture, technology, social development, sports, arts, culture, and events. Explore our website for comprehensive information on each department.";
    } else if (input.includes("contact") || input.includes("how can I reach you")) {
        return "Getting in touch with us is easy! Use the contact section on our website to send us a message or reach out to us on WhatsApp. We're here to answer your questions and provide assistance.";
    } else if (input.includes("sports") || input.includes("tell me about sports")) {
        return "Our sports department is a hub of excitement! We organize various sports activities and events for enthusiasts of all ages. Whether you're into soccer, basketball, or other sports, stay tuned for upcoming events that will keep you engaged and active!";
    } else if (input.includes("tutoring") || input.includes("education")) {
        return "Education is at the core of Masiza Expect NPO's mission. If you're looking for tutoring services to enhance your learning, you're in the right place! Our education department is dedicated to supporting students and fostering a love for learning.";
    } else if (input.includes("awards") || input.includes("recognitions")) {
        return "Discover the pride of Masiza Expect NPO! Our awards section showcases the recognition and achievements within our community. From academic excellence to outstanding contributions in sports and culture, we celebrate the success of individuals who make a positive impact.";

    // General greetings and goodbyes
    } else if (input.includes("hello")) {
        return "Hello! How can I assist you today?";
    } else if (input.includes("hey") || input.includes("hi")) {
        return "Greetings! If you have any questions or if there's something specific you'd like to know, feel free to ask.";
    } else if (input.includes("goodbye")) {
        return "Take care of yourself! If you ever have more questions or need assistance, don't hesitate to reach out. Goodbye for now!";
    } else {
        return "I apologize, Nyakama Mahle is still in the process of creating me. Visit our website, navigate to the links, and select the service you desire for more detailed information. If there's anything specific you're looking for, feel free to ask!";
    }
}

// Example usage:
let userQuestion1 = "What kind of services do you offer?";
let botResponse1 = getBotResponse(userQuestion1);
console.log(botResponse1);

let userQuestion2 = "How can I contact Masiza Expect NPO?";
let botResponse2 = getBotResponse(userQuestion2);
console.log(botResponse2);

let userQuestion3 = "Tell me about the sports activities you organize.";
let botResponse3 = getBotResponse(userQuestion3);
console.log(botResponse3);

let userQuestion4 = "Do you provide tutoring services?";
let botResponse4 = getBotResponse(userQuestion4);
console.log(botResponse4);

let userQuestion5 = "What awards has Masiza Expect NPO received?";
let botResponse5 = getBotResponse(userQuestion5);
console.log(botResponse5);
