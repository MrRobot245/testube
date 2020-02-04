import { Component, OnInit } from '@angular/core';
import { CardProvider, CategoryType } from 'src/app/elements/card/card.component';

export interface Category {
  title : string;
  providers : CardProvider[];
}

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.scss']
})
export class DashComponent implements OnInit {
  categories : Category[];

  constructor() { }

  ngOnInit() {
    this.getDefault();
  }

  getDefault() {
    this.categories = [
      {
        title: 'Streaming',
        providers : [
          {
            name: 'Plex',
            url: 'https://app.plex.tv/desktop',
            color: '#1f2326',
            logo: 'https://zhf1943ap1t4f26r11i05c7l-wpengine.netdna-ssl.com/wp-content/themes/plex/assets/img/plex-logo.svg',
            category: CategoryType.Streaming,
          },
          {
            name: 'YouTube',
            url: 'https://youtube.com',
            color: '#c2c2c2',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg',
            category: CategoryType.Streaming,
          },
          {
            name: 'Netflix',
            url: 'https://netflix.com',
            color: '#121212',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png',
            category: CategoryType.Streaming,
          },
          {
            name: 'Apple TV+',
            url: 'https://tv.apple.com/',
            color: '#121212',
            logo: 'https://tv.apple.com/assets/brands/Apple_TV_Plus_logo_white-fa7126f2bf5269837b484153a88493f8.png',
            category: CategoryType.Streaming,
          },
          {
            name: 'Crunchyroll',
            url: 'https://crunchyroll.com/',
            color: '#c2c2c2',
            logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f6/Crunchyroll_Logo.svg/1200px-Crunchyroll_Logo.svg.png',
            category: CategoryType.Streaming,
          },
        ]
      },

      {
        title: 'Entertainment',
        providers : [
          {
            name: 'Chrome',
            url: 'https://google.ca',
            color: '#121212',
            logo: 'https://cdn0.iconfinder.com/data/icons/jfk/512/chrome-512.png',
            category: CategoryType.Personal,
          },
          {
            name: 'Reddit',
            url: 'https://reddit.com',
            color: '#212121',
            logo: 'https://images-eu.ssl-images-amazon.com/images/I/418PuxYS63L.png',
            category: CategoryType.Personal,
          },

        ]
      },
      {
        title: 'Mapping',
        providers : [
          {
            name: 'Google Maps',
            url: 'https://maps.google.com/',
            color: '#1c9957',
            logo: 'https://pluspng.com/img-png/google-maps-png-google-maps-icon-1600.png',
            category: CategoryType.Mapping,
          },
          {
            name: 'Waze',
            url: 'https://waze.com/livemap',
            color: '#47cfee',
            logo: 'https://pngimg.com/uploads/waze/waze_PNG23.png',
            category: CategoryType.Mapping,
          },
          {
            name: 'ABetterRoutePlanner',
            url: 'https://new.abetterrouteplanner.com',
            color: '#2196f3',
            logo: 'https://new.abetterrouteplanner.com/abrp_banner.png',
            category: CategoryType.Mapping,
          },
  
        ]
      },
      {
        title: 'Utility',
        providers : [
         
          {
            name: 'TeslaFi',
            url: 'https://www.teslafi.com/',
            color: '#c2c2c2',
            logo: 'https://teslafi.com/images/LogoNew.png',
            category: CategoryType.Utility,
          },
          {
            name: 'Plugshare',
            url: 'https://www.plugshare.com/',
            color: '#003ca6',
            logo: 'https://assets.plugshare.com/assets/plugshare-web.png',
            category: CategoryType.Utility,
          },
          {
            name: 'Windy',
            url: 'https://www.teslafi.com/',
            color: '#212121',
            logo: 'https://www.jing.fm/clipimg/full/259-2590672_windy-com-logo-png.png',
            category: CategoryType.Weather,
          },
          {
            name: 'Dark Sky',
            url: 'https://maps.darksky.net/',
            color: '#121212',
            logo: 'https://darksky.net/images/darkskylogo.png',
            category: CategoryType.Weather,
          },
        ]
      },

      // {
      //   title: 'Weather',
      //   providers : [
         

      //   ]
      // }
    ]
  }

}
