from flask import *
import praw

app = Flask(__name__)

reddit = praw.Reddit(
    client_id = 'WO7q0-MUoVUadQ',
    client_secret = 'QNG971NQ6_69yLXdzyZm5Y71Blg',
    user_agent = 'redzin v1.0 by /u/Verser'
)

@app.route('/')
def index():
    return 'hello world!'

@app.route('/r/<subreddit>/')
def subreddit(subreddit):
    _subreddit = reddit.subreddit(subreddit)
    return subreddit

@app.route('/r/<subreddit>/')
def top_subbreddit(subreddit):
    _hot_subreddit = reddit.subreddit(subreddit).hot(limit = 10)
    list_hot_subreddit = []
    for posts in _hot_subreddit:
        post =  {'id': posts.id, 'title': posts.title, 'ups': posts.ups, 'downs': posts.downs, 'visited': posts.visited}
        list_hot_subreddit.append(post)
    json_hot_subreddit = jsonify(list_hot_subreddit)
    return json_hot_subreddit

@app.route('/r/<subreddit>/top')
def top_subbreddit(subreddit):
    _top_subreddit = reddit.subreddit(subreddit).top(limit = 10)
    list_top_subreddit = []
    for posts in _top_subreddit:
        post =  {'id': posts.id, 'title': posts.title, 'ups': posts.ups, 'downs': posts.downs, 'visited': posts.visited}
        list_top_subreddit.append(post)
    json_top_subreddit = jsonify(list_top_subreddit)
    return json_top_subreddit

if __name__ == '__main__':
    app.run(debug=True)
