# WeValidate-for-Email-Validation
This code builds a responsive email validation web application with a dynamic user interface and API integration for validating email addresses.

## HTML Overview
### Header:

Contains a navigation bar with a logo and three links: Home, About, and Contact Us.
The navigation links are styled and responsive.
### Main Section:

Includes:
A form where users can enter an email address for validation.
A results section where validation feedback is dynamically displayed after API interaction.
### Footer:

Contains a copyright notice styled for a professional look.
## CSS Overview
### Design Highlights:

Uses Google Fonts for a clean, modern typography (Poppins and Noto Sans).
Provides a responsive layout with Flexbox for alignment and media queries for mobile optimization.
### Navigation Bar:

Styled with a green-yellow background.
Ensures proper alignment and spacing of the logo and text using Flexbox (align-items: center and gap).
### Form Inputs and Buttons:

Email input field:
Styled for clarity with padding, border-radius, and larger font size.
Submit button:
Styled for visibility, changing colors on hover for better interactivity.
### Responsive Design:

Adapts input fields, buttons, and the navigation layout for screens smaller than 600px.
## JavaScript Overview
### Form Submission:

A click event listener on the submit button prevents default form behavior.
Fetches email validation results from the EmailValidation.io API using fetch.
### API Response Handling:

Displays loading animation while awaiting a response.
Dynamically updates the results section (#resultCont) with API feedback or error messages.
### Error Handling:

Detects invalid email formats and provides user-friendly messages.
Handles API failures gracefully with clear error displays.
## Key Features
### Email Validation API Integration:

Fetches details like the email's validity, domain, deliverability, and reason for invalidity.
### Responsive and Accessible Design:

Works seamlessly across devices, with accessibility enhancements like:
aria-live for screen readers.
Labels for input fields.
### Dynamic Content Update:

Results are displayed interactively without page reloads.
