from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Example logic for generating study recommendations
def generate_recommendations(child_profile):
    age = child_profile.get("age")
    grade = child_profile.get("grade")
    strengths = child_profile.get("strengths")
    challenges = child_profile.get("challenges")
    goals = child_profile.get("goals")

    # Example logic for recommendations
    recommendations = []

    if "focus" in challenges:
        recommendations.append("Create a distraction-free study environment and set a fixed schedule.")
    if "time management" in challenges:
        recommendations.append("Use a planner or a study timetable to organize tasks.")
    if "math" in strengths:
        recommendations.append("Encourage advanced math exercises to leverage their strengths.")
    if "better grades" in goals:
        recommendations.append("Regularly review and test the child on weak areas to track progress.")
    
    return recommendations

@app.route("/chat", methods=["POST"])
def chat():
    try:
        child_profile = request.json
        recommendations = generate_recommendations(child_profile)
        response = {
            "child_profile": child_profile,
            "recommendations": recommendations
        }
        return jsonify(response), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)
