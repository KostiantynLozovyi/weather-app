export interface IData {
    message: string,
    city: {
        coord: {
            lat: number;
            lon: number;
        }
        country: string;
        id: number;
        name: string;
        population: number;
        sunrise: number;
        sunset: number;
        timezone: number;
    }
    list: ListItem[]
}

export interface ListItem {
    dt: number;
    dt_txt: string;
    main: {
        feels_like: number;
        humidity: number;
        pressure: number;
        temp: number;
        temp_max: number;
        temp_min: number;
    };
    wind: {
        deg: number;
        gust: number;
        speed: number;
    };
    weather: [{
        id: number,
        main: string,
        description: string,
        icon: string,
    }]


}