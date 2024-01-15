document.addEventListener("DOMContentLoaded", function () {
      // This should fetch data from our Node.js server thats server.js
      fetch('http://localhost:8000/api/group3dynamodbtable')
        .then(response => response.json())
        .then(data => {
          // Handle the data received here and update the dashboard, etc.
          updateDashboard(data);
          console.log(data);
          // Add your logic to update the UI with the data
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
        // Function to update the dashboard with the fetched data
      function updateDashboard(data) {
        // Access the DOM elements
        const rawDataElement = document.getElementById('rawData');
        const interpretationElement = document.getElementById('interpretation');
        const responseActionsElement = document.getElementById('responseActions');
        const overallStatusElement = document.getElementById('overallStatus');
        const overallActionElement = document.getElementById('overallAction');
        
        // Update the UI with the data
        rawDataElement.textContent = 'Raw Data: ' + JSON.stringify(data, null, 2);
        // Add your logic to extract and display specific attributes as needed

        // You can access attributes like:
        // const temperature = data.temperature.S;

        // Example: Update other UI elements
        interpretationElement.textContent = 'Interpretation: ' + data.interpretation;
        responseActionsElement.textContent = 'Response Actions: ' + data.response_actions;
        overallStatusElement.textContent = 'Overall Status: ' + data.overall_status;
        overallActionElement.textContent = 'Overall Action: ' + data.overall_action;
      }
    });