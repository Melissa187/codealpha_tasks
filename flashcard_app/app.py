from flask import Flask, render_template, request, redirect, url_for
import random

app = Flask(__name__)

flashcards = []  # Store flashcards
current_index = 0  # Track current question index
score = {"correct": 0, "wrong": 0}  # Track scores

@app.route('/')
def home():
    return render_template('index.html', flashcards=flashcards, current_question=None, score=score)

@app.route('/add', methods=['POST'])
def add_flashcard():
    question = request.form['question']
    answer = request.form['answer']
    flashcards.append({'question': question, 'answer': answer})
    return redirect(url_for('home'))

@app.route('/quiz')
def quiz():
    global current_index, score
    current_index = 0  # Start from the first question
    score = {"correct": 0, "wrong": 0}  # Reset score when starting a new quiz
    return redirect(url_for('question'))

@app.route('/question')
def question():
    if current_index < len(flashcards):
        return render_template('index.html', flashcards=flashcards, current_question=flashcards[current_index], score=score)
    else:
        return render_template('index.html', flashcards=flashcards, current_question=None, score=score, result="🎉 Quiz Completed!")

@app.route('/check_answer', methods=['POST'])
def check_answer():
    global current_index
    user_answer = request.form['user_answer']
    correct_answer = flashcards[current_index]['answer']

    if user_answer.strip().lower() == correct_answer.strip().lower():
        score["correct"] += 1
        result = "✅ Correct!"
    else:
        score["wrong"] += 1
        result = f"❌ Wrong! Correct Answer: {correct_answer}"

    current_index += 1  # Move to the next question
    return redirect(url_for('question'))

if __name__ == '__main__':
    app.run(debug=True)
