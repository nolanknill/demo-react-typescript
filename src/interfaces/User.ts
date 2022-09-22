import HoroscopeSign from "../enums/HoroscopeSign";

interface User {
    id: number,
    name: string,
    horoscope: HoroscopeSign
}

export default User;