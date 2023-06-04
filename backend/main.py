from flask import Flask, request

app = Flask(__name__)

@app.route('/register', methods=['POST'])
def registerUser():
    # store user's name and phone number
    return

@app.route('/user/{userId}', methods=['GET'])
def getUser(userId):
    # get user
    return

@app.route('/workouts/{userId}', methods=['GET'])
def getWorkouts(userId):
    # get workout history
    return

@app.route('/friends/{userId}', methods=['GET'])
def getFriends(userId):
    # get friends
    return

@app.route('/addFriend', methods=['POST'])
def addFriend():
    # add friend
    return

@app.route('/addWorkout', methods=['POST'])
def addWorkout():
    # add new workout
    return

if __name__ == '__main__':
    app.run()