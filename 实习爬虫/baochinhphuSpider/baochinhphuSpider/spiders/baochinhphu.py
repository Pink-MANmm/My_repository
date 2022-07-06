import scrapy
from scrapy import Selector
from scrapy.http import HtmlResponse

from baochinhphuSpider.items import BaochinhphuspiderItem


class BaochinhphuSpider(scrapy.Spider):
    name = 'baochinhphu'
    allowed_domains = ['cn.baochinhphu.vn']
    start_urls = ['http://cn.baochinhphu.vn/%E6%97%B6%E6%94%BF%E5%A4%96%E4%BA%A4.htm']

    def start_requests(self):
        for page in range(1,1000):
            url=f'https://cn.baochinhphu.vn/timelinelist/1161087/{page}.htm'
            yield scrapy.Request(url=url)

    def parse(self, response:HtmlResponse):
        sel=Selector(response)
        selectors=sel.css('body > div.box-stream-item')
        for selector in selectors:
            item=BaochinhphuspiderItem()
            item['news_date']=selector.css('div.box-stream-content > span::text').extract_first()
            item['news_href']=selector.css('div.box-stream-content > div > a::attr(href)').extract_first()
            item['news_title']=selector.css('div.box-stream-content > div > a::text').extract_first()
            yield item