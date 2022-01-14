import requests
import random
import os

from requests.exceptions import HTTPError

GET_POST_COFFEE_SURVEYS = 'https://mocki.io/v1/22f4c0d0-332f-41d5-93e6-2d0ebd061293'


def invite_users():
    """logic responsible for inviting users for a coffee"""
    try:
        res = requests.get(GET_POST_COFFEE_SURVEYS)
        res.raise_for_status()
    except HTTPError as http_err:
        print(f'HTTP error occurred: {http_err}')
    except Exception as err:
        print(f'Other error occurred: {err}')
    else:
        employees = res.json()
        employees.sort(
            key=lambda employee: employee['grade']/employee['numberOfSurveys'])
        half_of_length = int(len(employees)/2)

        sad_employees = employees[:half_of_length]
        happy_employees = employees[half_of_length + 1:]

        sad_employee_idx = random.randrange(0, len(sad_employees))
        happy_employee_idx = random.randrange(0, len(happy_employees))

        print(sad_employees[sad_employee_idx])
        print(happy_employees[happy_employee_idx])


invite_users()
