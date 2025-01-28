

## **Invest4Edu**

Invest4Edu is an intelligent web application designed to assist parents in enhancing their child’s study habits. By leveraging an AI-powered chatbot, the platform creates personalized, actionable plans tailored to each child’s unique strengths, challenges, and learning preferences.  

Whether you aim to improve your child’s focus, build better routines, or foster a love for learning, Invest4Edu provides practical strategies and engaging activities to achieve your goals.

---

### **Features**
- **AI-Powered Recommendations**: Generate customized study plans based on the child’s profile, behaviors, strengths, and challenges.
- **Interactive Frontend**: A user-friendly and attractive interface built with React.js and Tailwind CSS.
- **Robust Backend**: A secure and scalable backend powered by FastAPI for seamless request handling.
- **Free API Integration**: No reliance on paid APIs, ensuring cost-efficiency for users.
- **Scalability**: Modular design to add future enhancements like progress tracking or parental dashboards.

---

### **How It Works**
1. **Input Child Details**: Parents provide information about their child's academic performance, habits, strengths, and challenges.
2. **Custom Study Plan**: The chatbot generates a personalized, step-by-step guide with engaging activities and actionable tips.
3. **Long-Term Support**: Suggestions focus on fostering a sustainable love for learning, not just short-term results.

---

### **Technologies Used**
- **Frontend**:  
  - React.js for building a dynamic and responsive UI.  
  - Tailwind CSS for elegant, minimalist styling.

- **Backend**:  
  - FastAPI to process user inputs and manage data effectively.  
  - SQLite for lightweight data storage.

- **Deployment**:  
  - Cross-platform compatibility and easy deployment options.

---

### **Installation Guide**
Follow these steps to set up Invest4Edu on your local machine:

#### Prerequisites:
- Node.js and npm installed for the frontend.
- Python 3.9+ installed for the backend.

#### Steps:
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/saksh-arch/Invest4Edu.git
   ```
   Navigate to the project folder:
   ```bash
   cd Invest4Edu
   ```

2. **Set Up the Backend**:
   - Navigate to the `backend` folder:
     ```bash
     cd backend
     ```
   - Install dependencies:
     ```bash
     pip install -r requirements.txt
     ```
   - Run the backend server:
     ```bash
     uvicorn main:app --reload
     ```

3. **Set Up the Frontend**:
   - Navigate to the `frontend` folder:
     ```bash
     cd frontend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Start the development server:
     ```bash
     npm start
     ```

4. **Access the Application**:  
   - Open your browser and visit:  
     `http://localhost:3000` for the frontend.  
     `http://localhost:8000/docs` for backend API documentation.


---



