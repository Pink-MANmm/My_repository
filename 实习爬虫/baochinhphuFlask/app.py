from flask import Flask
from flask import render_template
from jieba.analyse import extract_tags
from flask import jsonify
import utils
import string

app = Flask(__name__)


@app.route('/')
def flask():
    return render_template('index.html')

@app.route('/table_data',methods=['get','post'])
def table_data():
    return utils.tableData()


if __name__ == '__main__':
    app.run(port=5555)
