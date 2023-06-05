from flask import Flask, request

app = Flask(__name__)

@app.route('/register', methods=['POST'])
def registerUser():
    # store user's name and phone number, json returns name of user and phone number
    data = request.get_json()
    name = data.get('name')
    phone_number = data.get('phone_number')
    return 'User registration successful'

@app.route('/workouts/<int:userId>', methods=['GET'])
def getWorkouts(userId):
    # get workout history
    return

@app.route('/friends/<int:userId>', methods=['GET'])
def getFriends(userId):
    # get friends
    return

@app.route('/addFriend', methods=['POST'])
def addFriend():
    # add friend by friend's userId
    data = request.get_json()
    friendId = data.get('friendId')
    userId = data.get('userId')
    return 'Friend added successfully'

@app.route('/addWorkout', methods=['POST'])
def addWorkout():
    # add new workout
    data = request.get_json()
    return 'Workout added successfully'

if __name__ == '__main__':
    app.run()