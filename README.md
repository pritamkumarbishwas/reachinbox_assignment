# Node.js Email Tool

This repository contains a Node.js tool for parsing and managing emails from Gmail and Outlook, utilizing AI for context understanding and automated responses.

## Features

- **OAuth Integration**: Connects to Google and Outlook email accounts securely using OAuth2 authentication.
- **Email Parsing**: Fetches unread emails from Gmail and Outlook APIs.
- **Context Understanding**: Uses OpenAI to categorize emails based on content.
- **Automated Responses**: Generates automated replies based on email context using OpenAI.

## Setup

1. **Clone the repository**:

   ```bash
   git clone https://github.com/pritamkumarbishwas/reachinbox_assignment.git


## API Endpoints

### Authentication

#### Google OAuth2

- **GET /auth/google**
  - Initiates the Google OAuth2 flow for connecting a Google account.
  - Parameters:
    - None
  - Response:
    - Redirects the user to Google OAuth consent screen for authorization.

- **GET /auth/google/callback**
  - Callback URL for Google OAuth2 flow.
  - Parameters:
    - `code`: Authorization code received from Google.
  - Response:
    - Upon successful exchange of code for tokens, redirects to a success page.
   
    - 
- **POST /email/process**
  - Processes incoming emails from connected accounts..
  - Automatically categorizes and responds to emails based on content.

- ** labelEmail(emailContent: string)**
- 
      - Description: Labels the provided email content with a relevant category.
  
  Parameters:
  
      - emailContent: String containing the email content to be analyzed.
        Returns: A string representing the label (Interested, Not Interested, More information).
  
-** generateResponse(label: string, emailContent: string)**

      - Description: Generates a response based on the labeled category and original email content.
      
  Parameters:
  
      - label: String representing the category label (Interested, Not Interested, More information).
      - emailContent: String containing the original email content.
      - Returns: A string containing the generated response based on the label and email content.


### Explanation:

- **Description**: Provides an overview of the project, its purpose, and key features.
- **Setup**: Guides users through cloning the repository, installing dependencies, setting up environment variables, and starting the application.
- **Folder Structure**: Illustrates the project's organization, indicating where different components (controllers, models, routes, services) are located.
- **`.gitignore`**: Includes typical entries to ignore certain files and directories from version control, enhancing repository cleanliness.
- **Contributing**: Encourages contributions and explains how users can participate in the project.
- **License**: Specifies the project's licensing terms.

Replace placeholders (`your_redis_password`, `your_google_client_id`, `your_google_client_secret`,`your_google_redirect_uri`,`your_google_refresh_token`,`your_outlook_access_token`,`your_open_ai_key`,`your_email@example.com`,`your_email_password`,) with your actual credentials and customize the README to fit your specific project details and conventions. This README.md file will help users understand your project quickly and get started with setting it up.
