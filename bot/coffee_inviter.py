import requests
import random
import os
import time

from dotenv import load_dotenv
from requests.exceptions import HTTPError

load_dotenv()

GET_POST_COFFEE_SURVEYS = os.getenv('GET_POST_COFFEE_SURVEYS')
POST_INVITE_EMPLOYEES = os.getenv('POST_INVITE_EMPLOYEES')


class Employee:
    """a class that represents an employee"""

    def __init__(self, employee):
        self.nick = employee['employee']['nickName']
        self.grade = employee['grade']
        self.total_surveys = employee['numberOfSurveys']

    def __str__(self):
        return f'{self.nick}: {self.grade}/{self.total_surveys}'


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

        sad_employee = sad_employees[sad_employee_idx]
        happy_employee = happy_employees[happy_employee_idx]

        sad_employee = Employee(sad_employee)
        happy_employee = Employee(happy_employee)

        message = f'Hej {sad_employee.nick}!\nNie masz ochoty na odpoczynek?... 😊\nZrób sobie przerwę i wypij aromatyczną kawę z {happy_employee.nick}☕\nChwila przerwy dobrze wam zrobi!👌'

        try:
            payload = {'content': message}
            res = requests.post(POST_INVITE_EMPLOYEES, data=payload)
            res.raise_for_status()
            print(
                f'{time.ctime()}: Zaproszeni na kawe zostali {sad_employee} oraz {happy_employee}')
        except Exception as err:
            print(f'An error occurred: {err}')


invite_users()
