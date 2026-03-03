import os, re

base = open('/var/www/vibecoding-grodno/dist/index.html').read()

pages = {
    'offer': {
        'title': 'Публичная оферта | VibeCoding Гродно',
        'desc': 'Публичная оферта AI-лаборатории VibeCoding в Гродно',
        'canonical': 'https://grodno.vibecoding.by/offer',
    },
    'privacy': {
        'title': 'Политика конфиденциальности | VibeCoding Гродно',
        'desc': 'Политика конфиденциальности AI-лаборатории VibeCoding в Гродно',
        'canonical': 'https://grodno.vibecoding.by/privacy',
    },
}

for slug, meta in pages.items():
    html = base
    html = re.sub(r'<title>[^<]+</title>', f'<title>{meta["title"]}</title>', html)
    html = re.sub(r'<meta name="description" content="[^"]*"', f'<meta name="description" content="{meta["desc"]}"', html)
    html = re.sub(r'<link rel="canonical" href="[^"]*"', f'<link rel="canonical" href="{meta["canonical"]}"', html)
    os.makedirs(f'/var/www/vibecoding-grodno/dist/{slug}', exist_ok=True)
    open(f'/var/www/vibecoding-grodno/dist/{slug}/index.html', 'w').write(html)
    print(f'Created {slug}/index.html')
