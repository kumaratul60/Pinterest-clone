import axios from 'axios';

export default axios.create({
    baseUrl: 'https://api.unsplash.com',
    headers: {
        Authorization: "Client-ID d1a46KiRY0_PdRLmpZl1fgCCcZ-wlQrfRei_YMmXUBc"
    }
});