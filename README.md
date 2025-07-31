# Urban-Mark

Urban-Mark is a web application that allows users to discover and review urban places by adding pins on a map.

## Features

- **User Authentication:** Secure login and registration system.
- **Map Integration:** Interactive map interface powered by [Mapbox](https://www.mapbox.com/).
- **Pin Management:** Add, edit, and delete pins to mark places on the map.
- **Review System:** Rate and review places added by other users.
- **Navigation:** Get navigated by your location.
- **Responsive Design:** Optimized for various screen sizes and devices.

## Technologies Used

- **Frontend:** React, Mapbox GL JS
- **Backend:** Node.js, Express.js, MongoDB
- **Authentication:** JWT (JSON Web Tokens)
- **Styling:** CSS and Mui (For Icons)
  
## Installation

To run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/lohith84/Urban-Mark.git

2. Install dependencies for both frontend and backend:
   ```bash
   cd Urban-Mark
   cd frontend && npm install
   cd ../backend && npm install

3. Configure environment variables:
- Create a .env file in the backend directory.
- Add the following variables:
  ```bash
  SECRET_KEY="key"
  MONGO_URL="MongoDB URL"
  PORT="PORT Number"

- Create a .env file in the frontend directory.
- Add the following variables:
  ```bash
  REACT_APP_MAPBOX="Get Key from below Website"
  REACT_APP_BACKEND_URL="Backend url"
  #Get it from https://www.mapbox.com/

4. Start the backend server:
   ```bash
   cd backend && npm start

5. Start the frontend development server:
   ```bash
   cd frontend && npm start
3. Open your browser and navigate to http://localhost:3000 to view the application.

## Deployment
Urban-Mark is deployed and can be accessed at: [Urban-Mark](https://urban-mark.netlify.app/).
## Screenshots
![Image1](https://github.com/lohith84/Urban-Mark/assets/121237224/0ec27b39-c8b6-4ee2-bd31-c44b8f203b09)
![image2](https://github.com/lohith84/Urban-Mark/assets/121237224/d9ebe42e-2f29-431a-a622-4c71d89008f9)
## Contributions
Contributions are welcome! Please fork the repository and submit a pull request.
## License
This project is licensed under the MIT License - see the LICENSE.md file for details.

### Notes:
- Replace placeholders (`key`, `MongoDB URL`, `Port Number`, `Backend url`, `API-Key`) with your actual details.
- Customize sections like screenshots, features, and technologies used according to your project specifics.
- Add additional sections as needed, such as API documentation, troubleshooting tips, or deployment instructions.

Feel free to tailor this template further based on your project's unique aspects and requirements!
# Urban_mark
