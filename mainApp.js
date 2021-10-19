var twitterTrends = angular.module('twitterTrends',[]); 

twitterTrends.controller('twitterTrendsController',['$scope',function($scope){

    $scope.data = [{"trends":[{"name":"Har SSRIAN Ek Sushant Hai","url":"http://twitter.com/search?q=%22Har+SSRIAN+Ek+Sushant+Hai%22","promoted_content":null,"query":"%22Har+SSRIAN+Ek+Sushant+Hai%22","tweet_volume":null},{"name":"#AStoryLostInTimeKashmir","url":"http://twitter.com/search?q=%23AStoryLostInTimeKashmir","promoted_content":null,"query":"%23AStoryLostInTimeKashmir","tweet_volume":null},{"name":"#HabitOfSidharthShukla","url":"http://twitter.com/search?q=%23HabitOfSidharthShukla","promoted_content":null,"query":"%23HabitOfSidharthShukla","tweet_volume":85025},{"name":"#लड़की_हूँ_लड़_सकती_हूँ","url":"http://twitter.com/search?q=%23%E0%A4%B2%E0%A4%A1%E0%A4%BC%E0%A4%95%E0%A5%80_%E0%A4%B9%E0%A5%82%E0%A4%81_%E0%A4%B2%E0%A4%A1%E0%A4%BC_%E0%A4%B8%E0%A4%95%E0%A4%A4%E0%A5%80_%E0%A4%B9%E0%A5%82%E0%A4%81","promoted_content":null,"query":"%23%E0%A4%B2%E0%A4%A1%E0%A4%BC%E0%A4%95%E0%A5%80_%E0%A4%B9%E0%A5%82%E0%A4%81_%E0%A4%B2%E0%A4%A1%E0%A4%BC_%E0%A4%B8%E0%A4%95%E0%A4%A4%E0%A5%80_%E0%A4%B9%E0%A5%82%E0%A4%81","tweet_volume":123157},{"name":"#YCPTerroristsAttack","url":"http://twitter.com/search?q=%23YCPTerroristsAttack","promoted_content":null,"query":"%23YCPTerroristsAttack","tweet_volume":10179},{"name":"#OnlyIdolJungkook","url":"http://twitter.com/search?q=%23OnlyIdolJungkook","promoted_content":null,"query":"%23OnlyIdolJungkook","tweet_volume":82768},{"name":"BILLBOARD STAR JUNGKOOK","url":"http://twitter.com/search?q=%22BILLBOARD+STAR+JUNGKOOK%22","promoted_content":null,"query":"%22BILLBOARD+STAR+JUNGKOOK%22","tweet_volume":84010},{"name":"Oman","url":"http://twitter.com/search?q=Oman","promoted_content":null,"query":"Oman","tweet_volume":19143},{"name":"Sushant A Pure Bliss","url":"http://twitter.com/search?q=%22Sushant+A+Pure+Bliss%22","promoted_content":null,"query":"%22Sushant+A+Pure+Bliss%22","tweet_volume":16369},{"name":"Congratulations Jungkook","url":"http://twitter.com/search?q=%22Congratulations+Jungkook%22","promoted_content":null,"query":"%22Congratulations+Jungkook%22","tweet_volume":54337},{"name":"6 years with twice","url":"http://twitter.com/search?q=%226+years+with+twice%22","promoted_content":null,"query":"%226+years+with+twice%22","tweet_volume":86420},{"name":"Urdu","url":"http://twitter.com/search?q=Urdu","promoted_content":null,"query":"Urdu","tweet_volume":43343},{"name":"Wagah Border","url":"http://twitter.com/search?q=%22Wagah+Border%22","promoted_content":null,"query":"%22Wagah+Border%22","tweet_volume":16797},{"name":"Hare Krishna Hare Krishna","url":"http://twitter.com/search?q=%22Hare+Krishna+Hare+Krishna%22","promoted_content":null,"query":"%22Hare+Krishna+Hare+Krishna%22","tweet_volume":null},{"name":"WE LOVE SID MALHOTRA","url":"http://twitter.com/search?q=%22WE+LOVE+SID+MALHOTRA%22","promoted_content":null,"query":"%22WE+LOVE+SID+MALHOTRA%22","tweet_volume":null},{"name":"शरद पूर्णिमा","url":"http://twitter.com/search?q=%22%E0%A4%B6%E0%A4%B0%E0%A4%A6+%E0%A4%AA%E0%A5%82%E0%A4%B0%E0%A5%8D%E0%A4%A3%E0%A4%BF%E0%A4%AE%E0%A4%BE%22","promoted_content":null,"query":"%22%E0%A4%B6%E0%A4%B0%E0%A4%A6+%E0%A4%AA%E0%A5%82%E0%A4%B0%E0%A5%8D%E0%A4%A3%E0%A4%BF%E0%A4%AE%E0%A4%BE%22","tweet_volume":32688},{"name":"Last Prophet Sant Rampal Ji","url":"http://twitter.com/search?q=%22Last+Prophet+Sant+Rampal+Ji%22","promoted_content":null,"query":"%22Last+Prophet+Sant+Rampal+Ji%22","tweet_volume":305063},{"name":"JIN OST IS COMING","url":"http://twitter.com/search?q=%22JIN+OST+IS+COMING%22","promoted_content":null,"query":"%22JIN+OST+IS+COMING%22","tweet_volume":null},{"name":"Sanskrit","url":"http://twitter.com/search?q=Sanskrit","promoted_content":null,"query":"Sanskrit","tweet_volume":null},{"name":"Bhojpuri","url":"http://twitter.com/search?q=Bhojpuri","promoted_content":null,"query":"Bhojpuri","tweet_volume":null},{"name":"doyoung","url":"http://twitter.com/search?q=doyoung","promoted_content":null,"query":"doyoung","tweet_volume":160949},{"name":"Hazrat Muhammad","url":"http://twitter.com/search?q=%22Hazrat+Muhammad%22","promoted_content":null,"query":"%22Hazrat+Muhammad%22","tweet_volume":85757},{"name":"BRING BACK DONAL","url":"http://twitter.com/search?q=%22BRING+BACK+DONAL%22","promoted_content":null,"query":"%22BRING+BACK+DONAL%22","tweet_volume":101462},{"name":"Allah Kabir","url":"http://twitter.com/search?q=%22Allah+Kabir%22","promoted_content":null,"query":"%22Allah+Kabir%22","tweet_volume":39103},{"name":"Rs 50","url":"http://twitter.com/search?q=%22Rs+50%22","promoted_content":null,"query":"%22Rs+50%22","tweet_volume":null},{"name":"Arjun Pathak","url":"http://twitter.com/search?q=%22Arjun+Pathak%22","promoted_content":null,"query":"%22Arjun+Pathak%22","tweet_volume":null},{"name":"CBI Y No Arrest Of SSR Killers","url":"http://twitter.com/search?q=%22CBI+Y+No+Arrest+Of+SSR+Killers%22","promoted_content":null,"query":"%22CBI+Y+No+Arrest+Of+SSR+Killers%22","tweet_volume":63406},{"name":"प्रियंका गांधी","url":"http://twitter.com/search?q=%22%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A4%BF%E0%A4%AF%E0%A4%82%E0%A4%95%E0%A4%BE+%E0%A4%97%E0%A4%BE%E0%A4%82%E0%A4%A7%E0%A5%80%22","promoted_content":null,"query":"%22%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A4%BF%E0%A4%AF%E0%A4%82%E0%A4%95%E0%A4%BE+%E0%A4%97%E0%A4%BE%E0%A4%82%E0%A4%A7%E0%A5%80%22","tweet_volume":33648},{"name":"harry styles","url":"http://twitter.com/search?q=%22harry+styles%22","promoted_content":null,"query":"%22harry+styles%22","tweet_volume":222033},{"name":"हजरत मुहम्मद","url":"http://twitter.com/search?q=%22%E0%A4%B9%E0%A4%9C%E0%A4%B0%E0%A4%A4+%E0%A4%AE%E0%A5%81%E0%A4%B9%E0%A4%AE%E0%A5%8D%E0%A4%AE%E0%A4%A6%22","promoted_content":null,"query":"%22%E0%A4%B9%E0%A4%9C%E0%A4%B0%E0%A4%A4+%E0%A4%AE%E0%A5%81%E0%A4%B9%E0%A4%AE%E0%A5%8D%E0%A4%AE%E0%A4%A6%22","tweet_volume":162138},{"name":"PMO Seek CBI Report Of SSR","url":"http://twitter.com/search?q=%22PMO+Seek+CBI+Report+Of+SSR%22","promoted_content":null,"query":"%22PMO+Seek+CBI+Report+Of+SSR%22","tweet_volume":68838},{"name":"Persian","url":"http://twitter.com/search?q=Persian","promoted_content":null,"query":"Persian","tweet_volume":null},{"name":"Milad","url":"http://twitter.com/search?q=Milad","promoted_content":null,"query":"Milad","tweet_volume":82853},{"name":"#ONE_IN_6_MILLION","url":"http://twitter.com/search?q=%23ONE_IN_6_MILLION","promoted_content":null,"query":"%23ONE_IN_6_MILLION","tweet_volume":157701},{"name":"#트와이스와의_매순간이_눈부셔","url":"http://twitter.com/search?q=%23%ED%8A%B8%EC%99%80%EC%9D%B4%EC%8A%A4%EC%99%80%EC%9D%98_%EB%A7%A4%EC%88%9C%EA%B0%84%EC%9D%B4_%EB%88%88%EB%B6%80%EC%85%94","promoted_content":null,"query":"%23%ED%8A%B8%EC%99%80%EC%9D%B4%EC%8A%A4%EC%99%80%EC%9D%98_%EB%A7%A4%EC%88%9C%EA%B0%84%EC%9D%B4_%EB%88%88%EB%B6%80%EC%85%94","tweet_volume":155460},{"name":"#YellowHillsOrganicRestaurant","url":"http://twitter.com/search?q=%23YellowHillsOrganicRestaurant","promoted_content":null,"query":"%23YellowHillsOrganicRestaurant","tweet_volume":null},{"name":"#ನಮ್ಮ_ರಾಜ್ಯೋತ್ಸವ_ನಮ್ಮ_ಹಬ್ಬ","url":"http://twitter.com/search?q=%23%E0%B2%A8%E0%B2%AE%E0%B3%8D%E0%B2%AE_%E0%B2%B0%E0%B2%BE%E0%B2%9C%E0%B3%8D%E0%B2%AF%E0%B3%8B%E0%B2%A4%E0%B3%8D%E0%B2%B8%E0%B2%B5_%E0%B2%A8%E0%B2%AE%E0%B3%8D%E0%B2%AE_%E0%B2%B9%E0%B2%AC%E0%B3%8D%E0%B2%AC","promoted_content":null,"query":"%23%E0%B2%A8%E0%B2%AE%E0%B3%8D%E0%B2%AE_%E0%B2%B0%E0%B2%BE%E0%B2%9C%E0%B3%8D%E0%B2%AF%E0%B3%8B%E0%B2%A4%E0%B3%8D%E0%B2%B8%E0%B2%B5_%E0%B2%A8%E0%B2%AE%E0%B3%8D%E0%B2%AE_%E0%B2%B9%E0%B2%AC%E0%B3%8D%E0%B2%AC","tweet_volume":22766},{"name":"#HindinotourNationalLanguage","url":"http://twitter.com/search?q=%23HindinotourNationalLanguage","promoted_content":null,"query":"%23HindinotourNationalLanguage","tweet_volume":null},{"name":"#NammaRajyotsavaNammaHabba","url":"http://twitter.com/search?q=%23NammaRajyotsavaNammaHabba","promoted_content":null,"query":"%23NammaRajyotsavaNammaHabba","tweet_volume":18645},{"name":"#YCPGoons","url":"http://twitter.com/search?q=%23YCPGoons","promoted_content":null,"query":"%23YCPGoons","tweet_volume":null},{"name":"#Nation_Supports_NCB","url":"http://twitter.com/search?q=%23Nation_Supports_NCB","promoted_content":null,"query":"%23Nation_Supports_NCB","tweet_volume":14115},{"name":"#Zomato","url":"http://twitter.com/search?q=%23Zomato","promoted_content":null,"query":"%23Zomato","tweet_volume":17278},{"name":"#IStandWith_UdaramJiMeghwal","url":"http://twitter.com/search?q=%23IStandWith_UdaramJiMeghwal","promoted_content":null,"query":"%23IStandWith_UdaramJiMeghwal","tweet_volume":null},{"name":"#पकौड़ी_को_तलना_होगा","url":"http://twitter.com/search?q=%23%E0%A4%AA%E0%A4%95%E0%A5%8C%E0%A4%A1%E0%A4%BC%E0%A5%80_%E0%A4%95%E0%A5%8B_%E0%A4%A4%E0%A4%B2%E0%A4%A8%E0%A4%BE_%E0%A4%B9%E0%A5%8B%E0%A4%97%E0%A4%BE","promoted_content":null,"query":"%23%E0%A4%AA%E0%A4%95%E0%A5%8C%E0%A4%A1%E0%A4%BC%E0%A5%80_%E0%A4%95%E0%A5%8B_%E0%A4%A4%E0%A4%B2%E0%A4%A8%E0%A4%BE_%E0%A4%B9%E0%A5%8B%E0%A4%97%E0%A4%BE","tweet_volume":null},{"name":"#WhoisMuhammad","url":"http://twitter.com/search?q=%23WhoisMuhammad","promoted_content":null,"query":"%23WhoisMuhammad","tweet_volume":31009},{"name":"#IRCTC","url":"http://twitter.com/search?q=%23IRCTC","promoted_content":null,"query":"%23IRCTC","tweet_volume":null},{"name":"#40KiShakti","url":"http://twitter.com/search?q=%2340KiShakti","promoted_content":null,"query":"%2340KiShakti","tweet_volume":101901},{"name":"#TWICEComesBeforeONCE","url":"http://twitter.com/search?q=%23TWICEComesBeforeONCE","promoted_content":null,"query":"%23TWICEComesBeforeONCE","tweet_volume":65613},{"name":"#justiceformamita","url":"http://twitter.com/search?q=%23justiceformamita","promoted_content":null,"query":"%23justiceformamita","tweet_volume":null},{"name":"#rajkundra","url":"http://twitter.com/search?q=%23rajkundra","promoted_content":null,"query":"%23rajkundra","tweet_volume":null}],"as_of":"2021-10-19T16:05:05Z","created_at":"2021-10-17T22:12:51Z","locations":[{"name":"India","woeid":23424848}]}];
}]);