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
from flask_cors import CORS

import praw
import requests
import re

# APP SETUP
##############
app = Flask(__name__)
CORS(app)

reddit = praw.Reddit(
    client_id = 'WO7q0-MUoVUadQ',
    client_secret = 'QNG971NQ6_69yLXdzyZm5Y71Blg',
    user_agent = 'redzin v1.0 by /u/Verser'
)
#imgur
#Authorization = a6031dbafe07fef
imgur_cliet_id = 'a6031dbafe07fef'

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
        number_of_links = 0

        if not submission.is_self:
            if 'imgur.com/a/' in link:
                domain_pattern = r"(https://|http://)?(www.)?(imgur.com)?(/a/)?"
                token_pattern = r"([a-zA-Z0-9]{1,})(/)?$"

                stripped_id = re.sub(domain_pattern, '', link, flags=re.IGNORECASE)
                stripped_id = re.search(token_pattern, stripped_id).groups()[0]
                res = requests.get('https://api.imgur.com/3/album/' + stripped_id + '/images', headers={'Authorization':'Client-ID a6031dbafe07fef'})
                res_as_json = res.json()["data"]

                res_as_list = []

                for x in res_as_json:
                    res_as_list.append(x["link"])
                    number_of_links += 1
                    print(number_of_links)

                link = res_as_list


            elif link.endswith('.jpg') or link.endswith('.png'):
                link = submission.url

            elif 'imgur.com/' in link:
                link = submission.url

            post = {'id': submission.id, 'title': submission.title, 'ups': submission.ups, 'downs': submission.downs, 'visited': submission.visited, 'url_count' : number_of_links if number_of_links else 1, 'url': link}
            list_hot_subreddit.append(post)

    json_list_hot_subreddit = jsonify(list_hot_subreddit)

    return json_list_hot_subreddit

# need to restructure route to accept default ('/r/<subreddit>/') or top ('/r/<subreddit>/top'), new, rising controversial etc
# @app.route('/r/<subreddit>/top')
# def top_subbreddit(subreddit):
#
#     _top_subreddit = reddit.subreddit(subreddit).top(limit = 10)
#     list_top_subreddit = []
#
#     for submission in _top_subreddit:
#         if not submissionis_self:
#             if 'imgur.com/a/' in link:
#             # send to imgur album downloader
#             elif link.endswith('.jpg') or link.endswith('.png'):
#             # send to image downloader
#             elif 'imgur.com/' in link:
#             # send to single imgage imgur downloader
#             post =  {'id': submission.id, 'title': submission.title, 'ups': submission.ups, 'downs': submission.downs, 'visited': submission.visited}
#             list_top_subreddit.append(post)
#
#     json_list_top_subreddit = jsonify(list_top_subreddit)
#
#     return json_list_top_subreddit

# DEBUG
##########
if __name__ == '__main__':
    app.run(debug=True)
