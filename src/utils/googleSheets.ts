const GOOGLE_SHEETS_API = 'https://api.sheetbest.com/sheets/44d0edf0-9be6-46b2-a7f4-b400a80c32cd';

export const saveToGoogleSheets = async (userData: any) => {
  try {
    console.log('Attempting to save data to Google Sheets:', userData);
    
    // Format the answers as a string if they're an object
    const formattedData = {
      ...userData,
      answers: typeof userData.answers === 'object' ? JSON.stringify(userData.answers) : userData.answers
    };

    const response = await fetch(GOOGLE_SHEETS_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formattedData),
    });
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('Failed to save to Google Sheets:', errorText);
      throw new Error(`Failed to save data: ${response.status} ${response.statusText}`);
    }
    
    const result = await response.json();
    console.log('Successfully saved to Google Sheets:', result);
    return result;
  } catch (error) {
    console.error('Error saving to Google Sheets:', error);
    throw error;
  }
};

export const fetchFromGoogleSheets = async () => {
  try {
    console.log('Fetching data from Google Sheets');
    const response = await fetch(GOOGLE_SHEETS_API);
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('Failed to fetch from Google Sheets:', errorText);
      throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}`);
    }
    
    const data = await response.json();
    console.log('Successfully fetched from Google Sheets:', data);
    return data;
  } catch (error) {
    console.error('Error fetching from Google Sheets:', error);
    throw error;
  }
};