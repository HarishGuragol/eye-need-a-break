FROM python:3.6

RUN mkdir /project
RUN mkdir /project/backend
RUN mkdir /project/distraction_classification

COPY ./backend /project/backend
COPY ./distraction_classification /project/distraction_classification
WORKDIR /project/

ENV PYTHONPATH="/project"

RUN pip3 install -r ./backend/requirements.txt
CMD ["python3", "db/utils/calc_scores.py"]
