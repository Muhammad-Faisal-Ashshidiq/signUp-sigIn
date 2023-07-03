// Template class
class Template {
    constructor() {
      this.data = [];
    }
  
    render() {
      // Render the template
      console.log("Rendering the template...");
      console.log("Data:", this.data);
      // Add rendering logic here
    }
  
    setData(data) {
      // Set data for the template
      this.data = data;
    }
  }
  
  // Export the Template class
  module.exports = Template;
  