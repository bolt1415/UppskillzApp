const GOOGLE_SHEETS_API = 'https://sheet.best/api/sheets/YOUR-SHEET-ID';

export const saveToGoogleSheets = async (userData: any) => {
  try {
    const response = await fetch(GOOGLE_SHEETS_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    
    if (!response.ok) {
      throw new Error('Failed to save data');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error saving to Google Sheets:', error);
    throw error;
  }
};

export const fetchFromGoogleSheets = async () => {
  try {
    const response = await fetch(GOOGLE_SHEETS_API);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching from Google Sheets:', error);
    throw error;
  }
};