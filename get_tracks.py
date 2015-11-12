from lxml import html
import requests

page = requests.get('https://soundcloud.com/niagaramoon')
tree = html.fromstring(page.content)

for x in range(0, 3):
    track = tree.xpath('//article[@class="audible"]/h2/a[@itemprop="url"]')[x]
    print track.attrib['href']
