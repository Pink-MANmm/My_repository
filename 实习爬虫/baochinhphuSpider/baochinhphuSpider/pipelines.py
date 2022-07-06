# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://docs.scrapy.org/en/latest/topics/item-pipeline.html


# useful for handling different item types with a single interface
from itemadapter import ItemAdapter
import pymongo

class BaochinhphuspiderPipeline:
    def __init__(self):
        super().__init__()
        myclient=pymongo.MongoClient('mongodb://localhost:27017')
        mydb=myclient["mymongoDB"]
        self.mycol=mydb["baochinhphu"]

    def process_item(self, item, spider):
        self.mycol.insert_one(dict(item))
        return item
