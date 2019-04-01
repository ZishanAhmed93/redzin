# INDEX
#########
# IMPORTS
# APP SETUP
# ROUTES
# DEBUG
##########

# IMPORTS
############
from flask import *
import praw

# APP SETUP
##############
app = Flask(__name__)

reddit = praw.Reddit(
    client_id = 'WO7q0-MUoVUadQ',
    client_secret = 'QNG971NQ6_69yLXdzyZm5Y71Blg',
    user_agent = 'redzin v1.0 by /u/Verser'
)
#imgur
#Authorization = a6031dbafe07fef
imgur_cliet_id = a6031dbafe07fef

# imgur get album images endpoint
# https://api.imgur.com/3/album/{{albumHash}}/images
# curl --location --request GET "https://api.imgur.com/3/album/{{albumHash}}/images" \
#   --header "Authorization: Client-ID {{clientId}}"


# Routes
###########
@app.route('/')
def index():
    return 'Welcome to Redzin'


@app.route('/r/<subreddit>/')
def hot_subbreddit(subreddit):

    _hot_subreddit = reddit.subreddit(subreddit).hot(limit = 10)
    list_hot_subreddit = []

    for submission in _hot_subreddit:
        link = submission.url
        if not is_self:
            if 'imgur.com/a/' in link:
                #link as list of imgur album
            elif link.endswith('.jpg') or link.endswith('.png'):
                #link is okay
            elif 'imgur.com/' in link:
                #send to single imgage imgur downloader
            post =  {'id': submission.id, 'title': submission.title, 'ups': submission.ups, 'downs': submission.downs, 'visited': submission.visited, 'url': submission.url}
            list_hot_subreddit.append(post)

    json_list_hot_subreddit = jsonify(list_hot_subreddit)

    return json_list_hot_subreddit


@app.route('/r/<subreddit>/top')
def top_subbreddit(subreddit):

    _top_subreddit = reddit.subreddit(subreddit).top(limit = 10)
    list_top_subreddit = []

    for submission in _top_subreddit:
        if not is_self:
            if 'imgur.com/a/' in link:
            # send to imgur album downloader
            elif link.endswith('.jpg') or link.endswith('.png'):
            # send to image downloader
            elif 'imgur.com/' in link:
            # send to single imgage imgur downloader
            post =  {'id': submission.id, 'title': submission.title, 'ups': submission.ups, 'downs': submission.downs, 'visited': submission.visited}
            list_top_subreddit.append(post)

    json_list_top_subreddit = jsonify(list_top_subreddit)

    return json_list_top_subreddit

# DEBUG
##########
if __name__ == '__main__':
    app.run(debug=True)
