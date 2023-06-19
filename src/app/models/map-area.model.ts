export interface MapArea{
  name: string,
  fullName: string,
  latitude: number,
  longitude: number,
  current: {
    dt: number,
    humidity: number,
    dewPoint: number,
    temperature: number
  },
  sendex?: number
}
