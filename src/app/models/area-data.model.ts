export interface AreaData {
  name: string,
  fullName: string,
  mountainProjectUrl: string,
  latitude: string,
  longitude: string,
  state: string,
  current: {
      dt: number,
      humidity: number,
      dewPoint: number,
      temperature: number,
  },
  hourly: [
      {
          dt: number,
          humidity: number,
          dewPoint: number,
          temperature: number,
      }
  ],
  daily: [
      {
          dt: number,
          humidity: number,
          dewPoint: number,
          temperature: {
            min: number,
            max: number
          },
          weather: [
            {
                icon: string
            }
        ],
          pop: number
      }
  ]

}
