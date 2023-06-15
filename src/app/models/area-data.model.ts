export interface AreaData {
    id: number,
    areaName: string,
    mountainProjectUrl: string,
    state: string,
    lat: number,
    lon: number,
    timezone: string,
    updatedAt: string,
    timezone_offset: string,
    current: {
        id: number,
        dt: number,
        humidity: number,
        pressure: number,
        uvi: number,
        sunrise: number,
        sunset: number,
        visibility: number,
        dew_point: number,
        wind_speed: number,
        wind_deg: number,
        wind_gust: number,
        clouds: number,
        weather: [
            {
                main: string,
                description: string,
                icon: string
             }
        ],
        feels_like: number,
        temp: number,
        rain?: {
            hour: number
        },
        snow?: {
            hour: number
        }
    },
    hourly: [
        {
            id: number,
            dt: number,
            humidity: number,
            pressure: number,
            uvi: number,
            visibility: number,
            dew_point: number,
            wind_speed: number,
            wind_deg: number,
            wind_gust: number,
            clouds: number,
            weather: [
                {
                    main: string,
                    description: string,
                    icon: string
                }
            ],
            feels_like: number,
            temp: number,
            pop: number,
            rain?: {
                hour: number
            },
            snow?: {
                hour: number
            }
        }
    ],
    daily: [
        {
            id: number,
            dt: number,
            humidity: number,
            pressure: number,
            uvi: number,
            sunrise: number,
            sunset: number,
            moonrise: number,
            moonset: number,
            rain?: number,
            snow?: number,
            summary: string,
            dew_point: number,
            wind_speed: number,
            wind_deg: number,
            wind_gust: number,
            clouds: number
            temp: {
              min: number,
              max: number
            },
            weather: [
              {
                  main: string,
                  description: string,
                  icon: string
              }
          ],
            pop: number
        }
    ]

}
