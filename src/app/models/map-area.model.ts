export interface MapArea{
  name: string,
  fullName: string,
  lat: number,
  lon: number,
  current: {
    dt: number,
    humidity: number,
    dewPoint: number,
    temperature: number
  },
  sendex?: number
}
