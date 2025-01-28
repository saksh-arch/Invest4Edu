import React, { useState } from "react";
import axios from "axios";

const App = () => {
    const [formData, setFormData] = useState({
        age: "",
        grade: "",
        performance: "",
        strengths: "",
        challenges: "",
        goals: "",
    });
    const [recommendations, setRecommendations] = useState([]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        try {
            const response = await axios.post("http://localhost:5000/chat", formData);
            setRecommendations(response.data.recommendations);
        } catch (error) {
            console.error("Error fetching recommendations:", error);
            alert("Error: " + error.message);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
            <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg p-8">
                <h1 className="text-2xl font-bold text-gray-800 mb-6">
                    Invest4Edu Chatbot
                </h1>
                <form
                    className="grid grid-cols-1 gap-4"
                    onSubmit={(e) => e.preventDefault()}
                >
                    <input
                        name="age"
                        placeholder="Child's Age"
                        className="border border-gray-300 rounded-lg p-2"
                        value={formData.age}
                        onChange={handleChange}
                    />
                    <input
                        name="grade"
                        placeholder="Grade Level"
                        className="border border-gray-300 rounded-lg p-2"
                        value={formData.grade}
                        onChange={handleChange}
                    />
                    <input
                        name="performance"
                        placeholder="Academic Performance"
                        className="border border-gray-300 rounded-lg p-2"
                        value={formData.performance}
                        onChange={handleChange}
                    />
                    <textarea
                        name="strengths"
                        placeholder="Strengths"
                        className="border border-gray-300 rounded-lg p-2"
                        rows="3"
                        value={formData.strengths}
                        onChange={handleChange}
                    ></textarea>
                    <textarea
                        name="challenges"
                        placeholder="Challenges"
                        className="border border-gray-300 rounded-lg p-2"
                        rows="3"
                        value={formData.challenges}
                        onChange={handleChange}
                    ></textarea>
                    <textarea
                        name="goals"
                        placeholder="Goals"
                        className="border border-gray-300 rounded-lg p-2"
                        rows="3"
                        value={formData.goals}
                        onChange={handleChange}
                    ></textarea>
                    <button
                        type="button"
                        className="bg-blue-600 text-white rounded-lg py-2 px-4 hover:bg-blue-700"
                        onClick={handleSubmit}
                    >
                        Get Recommendations
                    </button>
                </form>
                {recommendations.length > 0 && (
                    <div className="mt-6">
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">
                            Recommendations:
                        </h2>
                        <ul className="list-disc list-inside bg-gray-50 p-4 rounded-lg">
                            {recommendations.map((rec, index) => (
                                <li key={index} className="text-gray-700">
                                    {rec}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default App;
