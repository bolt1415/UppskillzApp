import type { User } from "@/types/quizTypes";

const GOOGLE_SHEETS_API = 'https://api.sheetbest.com/sheets/44d0edf0-9be6-46b2-a7f4-b400a80c32cd';

export const saveToGoogleSheets = async (userData: User): Promise<any> => {
  try {
    console.log('Attempting to save data to Google Sheets:', userData);

    const formattedData = {
      ...userData,
      answers: typeof userData.answers === 'object' ? JSON.stringify(userData.answers) : userData.answers,
    };

    console.log('Formatted data for Google Sheets:', formattedData);

    const response = await fetch(GOOGLE_SHEETS_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formattedData),
    });

    if (!response.ok) {
      let errorText;
      try {
        const errorResponse = await response.json();
        errorText = errorResponse.message || JSON.stringify(errorResponse);
      } catch {
        errorText = await response.text();
      }
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

export const fetchFromGoogleSheets = async (): Promise<User[]> => {
  try {
    console.log('Fetching data from Google Sheets');

    const response = await fetch(GOOGLE_SHEETS_API);

    if (!response.ok) {
      let errorText;
      try {
        const errorResponse = await response.json();
        errorText = errorResponse.message || JSON.stringify(errorResponse);
      } catch {
        errorText = await response.text();
      }
      console.error('Failed to fetch from Google Sheets:', errorText);
      throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    
    // Format the data to ensure answers are parsed correctly
    const formattedData = data.map((user: any) => ({
      ...user,
      answers: typeof user.answers === 'string' ? JSON.parse(user.answers) : user.answers
    }));
    
    console.log('Successfully fetched from Google Sheets:', formattedData);
    return formattedData;
  } catch (error) {
    console.error('Error fetching from Google Sheets:', error);
    throw error;
  }
};