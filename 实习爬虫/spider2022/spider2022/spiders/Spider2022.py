import scrapy


class Spider2022Spider(scrapy.Spider):
    name = 'Spider2022'
    allowed_domains = ['baidu.com']
    start_urls = ['http://baidu.com/']

    def parse(self, response):
        pass
