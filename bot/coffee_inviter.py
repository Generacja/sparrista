import requests
import os

GET_POST_COFFEE_SURVEYS = 'https://mocki.io/v1/22f4c0d0-332f-41d5-93e6-2d0ebd061293'


def invite_users():
    """logic responsible for inviting users for a coffee"""
    res = requests.get(GET_POST_COFFEE_SURVEYS)
    print(res.json())
