// Links re-Direct
const linkMap = {
    'auraLink': 'https://buy.aura.com/a-save?irclickid=UpUS8A0lhxycTVGQ6qUOJ1wxUksWgST-JQlH3M0&iradname=Online%20Tracking%20Link&iradid=899264&irgwc=1&c1=4944332&camp=12398&utm_source=g2gmedia&utm_medium=ir_affiliate&mktp=ir_affiliate&sharedid=',
    'aura-browse-plans': 'https://buy.aura.com/a-save?irclickid=UpUS8A0lhxycTVGQ6qUOJ1wxUksWgST-JQlH3M0&iradname=Online%20Tracking%20Link&iradid=899264&irgwc=1&c1=4944332&camp=12398&utm_source=g2gmedia&utm_medium=ir_affiliate&mktp=ir_affiliate&sharedid=',
    'aura-official-site': 'https://buy.aura.com/a-save?irclickid=UpUS8A0lhxycTVGQ6qUOJ1wxUksWgST-JQlH3M0&iradname=Online%20Tracking%20Link&iradid=899264&irgwc=1&c1=4944332&camp=12398&utm_source=g2gmedia&utm_medium=ir_affiliate&mktp=ir_affiliate&sharedid=',
    'auraLink2': 'https://buy.aura.com/a-save?irclickid=UpUS8A0lhxycTVGQ6qUOJ1wxUksWgST-JQlH3M0&iradname=Online%20Tracking%20Link&iradid=899264&irgwc=1&c1=4944332&camp=12398&utm_source=g2gmedia&utm_medium=ir_affiliate&mktp=ir_affiliate&sharedid=',
    'aura-browse-plans2': 'https://buy.aura.com/a-save?irclickid=UpUS8A0lhxycTVGQ6qUOJ1wxUksWgST-JQlH3M0&iradname=Online%20Tracking%20Link&iradid=899264&irgwc=1&c1=4944332&camp=12398&utm_source=g2gmedia&utm_medium=ir_affiliate&mktp=ir_affiliate&sharedid=',
    'aura-official-site2': 'https://buy.aura.com/a-save?irclickid=UpUS8A0lhxycTVGQ6qUOJ1wxUksWgST-JQlH3M0&iradname=Online%20Tracking%20Link&iradid=899264&irgwc=1&c1=4944332&camp=12398&utm_source=g2gmedia&utm_medium=ir_affiliate&mktp=ir_affiliate&sharedid=',
    'auraPoster': 'https://buy.aura.com/a-save?irclickid=UpUS8A0lhxycTVGQ6qUOJ1wxUksWgST-JQlH3M0&iradname=Online%20Tracking%20Link&iradid=899264&irgwc=1&c1=4944332&camp=12398&utm_source=g2gmedia&utm_medium=ir_affiliate&mktp=ir_affiliate&sharedid=',
    'identityIQ-Poster': 'https://www.creditscoreiq.com/lander/2-wl/csiq?offercode=431289B0&transactionid=2d3924572582438093e5d97bb4f475f1&offer_id=765&aff_id=1652&aff_sub=%7Bpublisher_or_affid_here%7D&fname=&lname=&email=&address=&city=&state=&zip=&phone=&source=meta&aff_sub2=%7Badditional_sub%7D&aff_sub3=%7Badditional_sub%7D&aff_click_id=%7BclickID_here%7D&utm_campaign=%7Bpublisher_or_affid_here%7D&utm_source=1652&utm_medium=affiliate',
    'identityIq-Plans': 'https://www.creditscoreiq.com/lander/2-wl/csiq?offercode=431289B0&transactionid=2d3924572582438093e5d97bb4f475f1&offer_id=765&aff_id=1652&aff_sub=%7Bpublisher_or_affid_here%7D&fname=&lname=&email=&address=&city=&state=&zip=&phone=&source=meta&aff_sub2=%7Badditional_sub%7D&aff_sub3=%7Badditional_sub%7D&aff_click_id=%7BclickID_here%7D&utm_campaign=%7Bpublisher_or_affid_here%7D&utm_source=1652&utm_medium=affiliate',
    'identityIq-Site': 'https://www.creditscoreiq.com/lander/2-wl/csiq?offercode=431289B0&transactionid=2d3924572582438093e5d97bb4f475f1&offer_id=765&aff_id=1652&aff_sub=%7Bpublisher_or_affid_here%7D&fname=&lname=&email=&address=&city=&state=&zip=&phone=&source=meta&aff_sub2=%7Badditional_sub%7D&aff_sub3=%7Badditional_sub%7D&aff_click_id=%7BclickID_here%7D&utm_campaign=%7Bpublisher_or_affid_here%7D&utm_source=1652&utm_medium=affiliate',
};

Object.entries(linkMap).forEach(([id, url]) => {
    const element = document.getElementById(id);
    if (element) {
        element.href = url;
    }
});
