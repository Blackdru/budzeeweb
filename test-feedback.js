
// Test script for feedback endpoint
const fetch = require('node-fetch');

async function testFeedback() {
  try {
    console.log('Testing unified feedback endpoint...');
    
    const response = await fetch('http://localhost:8080/api/feedback/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        feedback: 'This is a test feedback from the website',
        rating: 5,
        category: 'gameplay',
        app: 'budzee'
      })
    });

    const result = await response.json();
    console.log('Response status:', response.status);
    console.log('Response data:', result);

    if (result.success) {
      console.log('✅ Feedback endpoint is working correctly!');
    } else {
      console.log('❌ Feedback endpoint failed:', result.message);
    }
  } catch (error) {
    console.error('❌ Error testing feedback endpoint:', error.message);
  }
}

testFeedback();