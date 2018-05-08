function initFbWIdget(url) {

    document.getElementById('fbWidget').innerHTML='';
    parser=document.getElementById('fbWidget');
    parser.innerHTML=`<div id="fb-root"></div>
    <div class="fb-page" id="fb-page" data-href="`+ url + `" data-tabs="timeline" data-small-header="false" data-adapt-container-width="true"
        data-hide-cover="false" data-show-facepile="true">
        <div class="fb-xfbml-parse-ignore">
            <blockquote cite="https://www.facebook.com/facebook">
                <a href="https://www.facebook.com/facebook">Facebook</a>
            </blockquote>
        </div>
    </div>`;
    

    if(window.FB){
        window.FB.XFBML.parse(parser);
    }
    loadFb()
}
function loadFb() {
    APP_ID = '1783474715284560';
    (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.5&appId=" + APP_ID;
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'))
   
   
}

const fbWidgetLinks = [
    {
        "name": "CORP",
        "link": "https://www.facebook.com/weareamericanwater/"
    },
    {
        "name": "California",
        "link": "https://www.facebook.com/caamwater/"
    },
    {
        "name": "Hawaii",
        "link": ""
    },
    {
        "name": "Iowa",
        "link": "https://www.facebook.com/iowaamwater/"
    },
    {
        "name": "Illinois",
        "link": "https://www.facebook.com/ilamwater/"
    },
    {
        "name": "Indiana",
        "link": "https://www.facebook.com/IndianaAmericanWater/"
    },
    {
        "name": "Kentucky",
        "link": "https://www.facebook.com/KentuckyAmericanWater/"
    },
    {
        "name": "Maryland",
        "link": "https://www.facebook.com/MarylandAmericanWater/"
    },
    {
        "name": "Michigan",
        "link": ""
    },
    {
        "name": "Missouri",
        "link": "https://www.facebook.com/missouriaw/"
    },
    {
        "name": "New Jersey",
        "link": ""
    },
    {
        "name": "New York",
        "link": "https://www.facebook.com/nyamwater/"
    },
    {
        "name": "Pennsylvania",
        "link": "https://www.facebook.com/pennsylvaniaamwater/"
    },
    {
        "name": "Tennessee",
        "link": "https://www.facebook.com/tnamwater/"
    },
    {
        "name": "Virginia",
        "link": "https://www.facebook.com/VirginiaAmericanWater/"
    },
    {
        "name": "West Virginia",
        "link": "https://www.facebook.com/wvamwater/"
    }
]

initFbWIdget(fbWidgetLinks[0].link);

function generateList() {
    const obj = document.getElementById('fbLinks');
    let str = '<option value="">Select Link</option>';

    for (let i = 0; i < fbWidgetLinks.length; i++) {
        if (!!fbWidgetLinks[i].link) {
            str += '<option value="' + fbWidgetLinks[i].link + '">' + fbWidgetLinks[i].name + '</option>';
        }
    }
    obj.innerHTML = str;
}
generateList();

function loadFeed() {
    const link = document.getElementById('fbLinks').value;
    console.log(link);
    initFbWIdget(link);
}