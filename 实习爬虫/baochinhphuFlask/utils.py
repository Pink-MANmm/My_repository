from pymongo import MongoClient
import pandas as pd

def tableData():
    client=MongoClient('mongodb://localhost:27017')
    db=client['mymongoDB']
    mycol=db['baochinhphu']
    date=mycol.distinct('news_date')
    href=mycol.distinct('news_href')
    title=mycol.distinct('news_title')
    data={'date':date,'href':href,'title':title}
    return data
