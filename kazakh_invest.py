import requests


s = requests.session()
# Define API url
url_search = "https://invest.gov.kz/media-center/press-releases/stroitelstvo-kazakhstansko-kitayskikh-invest-proektov-budet-vestis-v-sootvetstvii-s-zakonodatelstvom/"

req = s.get(url_search)

print(req.content)
